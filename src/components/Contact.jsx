import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://formsubmit.co/petekshamitbeyli@gmail.com"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New email wohoo!" />
          <input
            type="hidden"
            name="_next"
            value="https://petek.ml/pages/thankyou.html"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            required
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-teal-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
