import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import validator from "validator";
import emailjs from "@emailjs/browser";

const links = [
  {
    text: "CV",
    icon: <FaDownload />,
    link: "/JohnnyKaram-CV.pdf",
    download: true,
  },
  {
    text: "Github",
    icon: <FaGithub />,
    link: "https://github.com/JohnnyKodes",
  },
  {
    text: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/johnny-karam-03b947208/",
  },
  {
    text: "Email",
    icon: <FiMail />,
    link: "mailto: johnnykaram@protonmail.com",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = (name, email, message) => {
    if (!validator.isEmail(email)) {
      toast.error("Invalid Email! Enter a valid email so we can chat!");
      return false;
    }

    if (validator.isAlpha(name)) {
      if (name.length < 2) {
        toast.error("Invalid Name! I'll need a name wit 2+ characters chief.");
        return false;
      }
    } else {
      toast.error(
        "Invalid Name! Dude I've never seen a name with numbers/symbols in it"
      );
      return false;
    }

    if (message.length < 2) {
      toast.error("Don't be shy write a bigger message than that.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    if (validateForm(name, email, message)) {
      toast.loading("Sending...");
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((result) => {
          toast.remove();
          toast.success("Message sent! I'll reply to you as soon as I can.");
        })
        .catch((error) => {
          toast.remove();
          toast.error("Oops, something went wrong while sending the message.");
        });
    }
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Johnny Karam" />
        <link rel="icon" href="/JK_Logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen w-full flex justify-center bg-black text-white overflow-hidden">
        <Navbar />
        <div className="min-h-screen sm:w-[900px] w-full sm:px-10 p-3 overflow-hidden flex flex-col gap-5 pt-14">
          <div className="flex items-center justify-center">
            <div className="w-full">
              <motion.h2
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4 }}
                className="sm:text-7xl text-6xl font-bold "
              >
                Don't Be A Stranger,{" "}
                <strong className="font-bold textGradient">Contact Me</strong>{" "}
              </motion.h2>
              <motion.p
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-zinc-500 text-sm"
              >
                i make a mean pasta bolognese
              </motion.p>
            </div>
          </div>
          <motion.form
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5 mb-10"
          >
            <div className="flex w-full flex-wrap gap-5">
              <div className="flex flex-col w-full flex-1">
                <label className="text-zinc-300 font-bold text-lg">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                />
              </div>
              <div className="flex flex-col w-full flex-1">
                <label className="text-zinc-300 font-bold text-lg">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="w-full flex-col">
              <label htmlFor="" className="textGradient font-bold text-lg">
                Message
              </label>
              <textarea
                className="w-full h-[300px] resize-none input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Type your message here..."
                cols="30"
                rows="10"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-gradient w-[200px] rounded-full flex items-center justify-center p-[2px] transition ease-out cursor-pointer"
              >
                <div className="bg-black w-full h-full rounded-full text-white flex items-center justify-center p-4 gap-2 hover:bg-transparent transition ease-out duration-500">
                  <p className="font-bold text-center">Send Message</p>
                </div>
              </button>
            </div>
          </motion.form>
          <div className="w-full flex items-center justify-center gap-5">
            {links.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={link.text}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center hover:textGradient cursor-pointer text-zinc-400"
              >
                <div className="hover:text-white flex items-center p-2 gap-2 text-3xl">
                  {link.icon}
                </div>
                <p className="text-xs font-bold">{link.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: "rgb(24, 24, 27)",
              color: "white",
            },
          }}
        />
      </main>
    </>
  );
};

export default Contact;
