"use client";

import { useForm, ValidationError } from "@formspree/react";
import { EnvelopeIcon, ChatBubbleLeftEllipsisIcon, PhoneIcon, MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbzlwpr");

  return (
    <div className="bg-gradient-to-r  border-t border-purple-500 from-blue-800 to-purple-900 dark:from-gray-900 dark:to-black py-16">
      <div className="max-w-4xl mx-auto p-8 rounded-lg mb-12 backdrop-blur-lg bg-opacity-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-center text-2xl md:text-xl sm:text-lg font-bold mb-8 text-gray-800 dark:text-gray-200">
              <EnvelopeIcon className="h-8 w-8 inline-block text-blue-600 dark:text-blue-400 mr-2" />
              Contact Me
            </h3>
            {state.succeeded ? (
              <div className="text-center text-green-600 mb-8">
                <h4 className="text-lg md:text-base sm:text-sm font-semibold">
                  🎉 Email Sent Successfully!
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-base md:text-sm sm:text-xs">
                  Thank you for reaching out to me. I&apos;ll get back to you as
                  soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-800 dark:text-gray-300 mb-2 text-lg md:text-base sm:text-sm font-medium flex items-center"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-600 mt-1 text-sm"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-800 dark:text-gray-300 mb-2 text-lg md:text-base sm:text-sm font-medium flex items-center"
                  >
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-600 mt-1 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-5 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <h3 className="text-center text-2xl md:text-xl sm:text-lg font-bold mb-8 text-gray-800 dark:text-gray-200">
              <GlobeAltIcon className="h-8 w-8 inline-block text-green-600 dark:text-green-400 mr-2" />
              Other Ways to Reach Me
            </h3>
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <PhoneIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                <span className="text-lg md:text-base sm:text-sm text-gray-800 dark:text-gray-300">
                  +27 603 179 552
                </span>
              </div>
              <div className="flex items-center mb-4">
                <MapPinIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                <span className="text-lg md:text-base sm:text-sm text-gray-800 dark:text-gray-300">
                  30 Kadjipiering street, Jan Hofmeyer, Aucklamd Park, 2092, Johannesburg
                </span>
              </div>
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                <a
                  href="https://www.sanelehlongwane.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-base sm:text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  sanelehlongwane.vercel.app
                </a>
              </div>
              <div className="flex items-center mb-4">
                <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                <a
                  href="mailto:sanelehlongwane61@gmail.com"
                  className="text-lg md:text-base sm:text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  sanelehlongwane61@gmail.com
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-lg sm:text-base font-bold mb-6 text-gray-800 dark:text-gray-200">
                Follow Me
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com/profile.php?id=61567059432813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Sanele-Hlongwane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanele-hlongwane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
