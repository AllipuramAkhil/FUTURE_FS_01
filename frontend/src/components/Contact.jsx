import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/api/contact",
        formData
      );

      console.log(response.data);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Backend Connected But Error Occurred");
    }
  };

  return (
    <section
      id="contact"
      className="px-10 py-24 bg-slate-900"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl flex flex-col gap-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-gray-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-gray-700"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-gray-700"
          required
        />

        <button
          type="submit"
          className="bg-cyan-500 py-4 rounded-xl text-lg hover:bg-cyan-600 transition"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;