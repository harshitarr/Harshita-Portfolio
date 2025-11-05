import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wqphnie",
        "template_e27ri6b",
        form.current,
        "LtPqJHPzQKlM9dQmw"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-white text-base" />,
      title: "Location",
      details: "Coimbatore",
    },
    {
      icon: <HiOutlineMail className="text-white text-base" />,
      title: "Email",
      details: "harshitarera@gmail.com",
    },
    {
      icon: <HiOutlinePhone className="text-white text-base" />,
      title: "Mobile Number",
      details: "+91 97876 16123",
    },
  ];

  return (
    <section
      id="contact"
      className=" text-white py-20 px-4 md:px-12"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5]">
            CONTACT ME
          </span>
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5] mx-auto mt-3 rounded-full shadow-[0_0_12px_#ff4f8b]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <ToastContainer />

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[900px] mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          className="bg-[#120d26] p-6 md:p-8 rounded-xl border border-pink-500 shadow-[0_0_20px_#ff4f8b]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-pink-500 text-xs font-semibold uppercase mb-4">
            Get in touch
          </h4>
          <hr className="border-pink-500 mb-6" />

          <div className="grid gap-6">
            {contactItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: idx * 0.15,
                }}
                viewport={{ once: true }}
              >
                <span className="bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full shadow-[0_0_10px_#ff4f8b]">
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="border-pink-500 mt-6" />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          className="bg-[#120d26] p-6 md:p-8 rounded-xl border border-pink-500 shadow-[0_0_20px_#ff4f8b]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-4">Send me a message</h3>

          <form ref={form} onSubmit={sendEmail} className="grid gap-4">
            {[
              { type: "text", name: "user_name", placeholder: "Name" },
              { type: "email", name: "user_email", placeholder: "Email" },
              { type: "text", name: "subject", placeholder: "Subject" },
            ].map((input, idx) => (
              <motion.input
                key={idx}
                {...input}
                required
                className="bg-[#1a1433] p-3 text-sm rounded-md border border-gray-700 text-white focus:border-pink-500 outline-none transition"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
              />
            ))}

            <motion.textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="bg-[#1a1433] p-3 text-sm rounded-md border border-gray-700 text-white focus:border-pink-500 outline-none transition"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.3,
              }}
              viewport={{ once: true }}
            />

            <motion.button
              type="submit"
              className="py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.4,
              }}
              viewport={{ once: true }}
            >
              ✉ SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
