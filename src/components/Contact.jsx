import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tkn77ib",
        "template_pix9ono",
        form.current,
        "9BXDXjJCIX3aY8vy8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          consolelog(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="from_email"
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
            type="submit"
            value="Send"
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
