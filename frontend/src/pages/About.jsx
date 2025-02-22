import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-full sm:size-1/2"
          src={assets.about_us_img}
          alt="About image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to BOOKS, your go-to online bookstore where the world of
            literature is just a click away. We are passionate about bringing
            stories to life, offering a wide range of books and eBooks that
            cater to every reader’s taste. Whether you're looking for timeless
            classics, the latest bestsellers, or niche genres, we’ve got
            something for everyone.
          </p>
          <b className="text-gray-700">Our Mission</b>
          <p>
            Our mission is to make reading accessible and enjoyable for all,
            with both physical and digital formats available. Explore our
            collection, discover your next favorite book, and let BOOKS be a
            part of your literary journey.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Asseurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iste neque impedit eius dignissimos velit consectetur mollitia iusto
            harum voluptatem sit atque, vitae nihil porro dolorem. Expedita
            magnam alias accusantium.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iste neque impedit eius dignissimos velit consectetur mollitia iusto
            harum voluptatem sit atque, vitae nihil porro dolorem. Expedita
            magnam alias accusantium.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            iste neque impedit eius dignissimos velit consectetur mollitia iusto
            harum voluptatem sit atque, vitae nihil porro dolorem. Expedita
            magnam alias accusantium.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
