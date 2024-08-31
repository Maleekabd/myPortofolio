import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // if (
    //   fullName.length == 0 ||
    //   email.length == 0 ||
    //   message == 0 ||
    //   fullName.length < 3 ||
    //   email.length < 4 ||
    //   message < 2
    // ) {
    //   alert("Nama, Email dan Pesan tidak boleh kosong");
    // }

    emailjs.init("E5GOTx9IEyAJfBFnl");

    emailjs
      .send("service_21xpodn", "template_g3p83sp", {
        from_name: fullName,
        message: message,
        email: email,
      })
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Message failed to send!");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="">
      <div className="p-10 h-screen grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let&apos;s talk!
            </h2>
          </div>
          <img
            src="assets/svg/doodle.svg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="border w-full p-3 rounded dark:bg-gray-800"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border w-full p-3 rounded dark:bg-gray-800"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="border w-full p-3 rounded dark:bg-gray-800"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-400 w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            {loading ? "Loading..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
