import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import platform from "platform";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ success: "", error: "" });
  const [isSending, setIsSending] = useState(false);
  const [userInfo, setUserInfo] = useState({
    user_os: "",
    user_platform: "",
    user_browser: "",
    user_version: "",
    user_ip: "",
    user_country: "",
    user_referrer: ""
  });

  useEffect(() => {
    // Set platform info
    setUserInfo((prev) => ({
      ...prev,
      user_os: platform.os?.toString() || "Unknown",
      user_platform: platform.name || "Unknown",
      user_browser: platform.name || "Unknown",
      user_version: platform.version || "Unknown",
      user_referrer: document.referrer || "None",
      time: new Date().toLocaleString()
    }));

    // Fetch IP and country
    fetch("https://ipinfo.io/json?token=b09cd80b337de5")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo((prev) => ({
          ...prev,
          user_ip: data.ip,
          user_country: data.country
        }));
      })
      .catch((err) => console.error("IP info fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ success: "", error: "Please fill out all fields." });
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_ynetf1k", // Your service ID
        "template_qvumecm", // Your template ID
        {
          ...formData,
          ...userInfo,
          time: new Date().toLocaleString()
        },
        "AUPHn2Nuroq1EVxaM" // Your public key
      )
      .then(() => {
        setFormStatus({ success: "Message sent successfully!", error: "" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setFormStatus({ success: "", error: "Failed to send message. Try again later." });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-zinc-900 p-8 rounded-xl shadow-xl border border-zinc-800"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your Message"
        ></textarea>
      </div>

      {/* Status Message */}
      {formStatus.error && <p className="text-red-500 text-sm">{formStatus.error}</p>}
      {formStatus.success && <p className="text-green-500 text-sm">{formStatus.success}</p>}

      <button
        type="submit"
        disabled={isSending}
        className={`px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg ${
          isSending ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
