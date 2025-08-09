import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import Stripe from "stripe";

// global variables
const CURRENCY = "usd";
const DELIVERY_CHARGE = 0;

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing orders using COD Method
const placeOrder = async (req, res) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    console.log("Datos recibidos en /api/order/place:", req.body);
    const { items, amount, address } = req.body;

    if (!items || !items.length || !amount || !address) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    console.log(orderData);

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
  const { origin } = req.headers;
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    console.log("Datos recibidos en /api/order/place:", req.body);
    const { items, amount, address } = req.body;

    if (!items || !items.length || !amount || !address) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    console.log(orderData);

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item, idx) => {
      // Ensure a non-empty product name
      const name =
        (item.title && String(item.title).trim()) || `Item ${idx + 1}`;

      // Validate numeric price and quantity
      const price = Number(item.price);
      if (!Number.isFinite(price) || price <= 0) {
        throw new Error(`Invalid price in item ${idx + 1}`);
      }
      const quantity = Number(item.quantity) || 1;

      return {
        price_data: {
          currency: CURRENCY,
          product_data: { name },
          unit_amount: Math.round(price * 100),
        },
        quantity,
      };
    });

    // Optional delivery charge line
    if (DELIVERY_CHARGE > 0) {
      line_items.push({
        price_data: {
          currency: CURRENCY,
          product_data: { name: "Delivery Charges" },
          unit_amount: Math.round(DELIVERY_CHARGE * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?succes=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?succes=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Verify Stripe
const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export {
  verifyStripe,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
