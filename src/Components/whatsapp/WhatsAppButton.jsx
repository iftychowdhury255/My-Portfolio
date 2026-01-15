import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => {
  const phoneNumber = "8801874679300"; // 🔁 Replace with your full WhatsApp number (with country code)
  const message = "Hello! I visited your portfolio and would like to connect.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
     <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
