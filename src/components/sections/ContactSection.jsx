import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addJob } from "../../redux/rdx_/utils/jobcardSlice";

const ContactSection = () => {
  const dispatch = useDispatch();
  // const [text, setText] = useState("");

  const clickHandler = () => {
    console.log("Clicked");
    dispatch();
  };

  return (
    <>
      <section id="contact" className="py-20  text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-300 mb-6">Contact Us</h2>

          <form className="max-w-xl mx-auto" onClick={clickHandler}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
