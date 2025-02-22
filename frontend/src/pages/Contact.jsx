import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] sm:size-1/2"
          src={assets.contact_us_img}
          alt="Contact image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Have questions or need assistance? We’re here to help! Reach out to
            BOOKS, and our team will get back to you as soon as possible.
            Whether it’s about your orders, book recommendations, or general
            inquiries, we’d love to hear from you.
          </p>
          <b className="text-gray-700">Contact Information</b>
          <p>Email: support@books.com</p>
          <p>Phone: +1 (800) 555-BOOK</p>
          <p>Address: 123 Book Street, Literature City, BK 56789</p>
        </div>
      </div>

      {/*<div className="text-xl py-4">
        <Title text1={"GET IN "} text2={"TOUCH"} />
      </div>
      <form className="flex flex-col gap-4 mb-20 mx-auto w-[90%] sm:max-w-96">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-400"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          Send Message
        </button>
      </form> */}
    </div>
  );
}

export default Contact;
