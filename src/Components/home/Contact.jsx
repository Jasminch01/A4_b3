import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "General Inquiry", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can send formData to the backend here using Axios or fetch
  };

  return (
    <section className="contact-section p-10 my-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Love to here from you</h2>
        <h2 className="text-4xl font-bold">Get in touch</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex gap-5">
          {/* Full Name */}
          <div className="w-full">
            <label className="block text-lg font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="block text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100"
              placeholder="johndoe@example.com"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          {/* Phone Number */}
          <div className="w-full">
            <label className="block text-lg font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100"
              placeholder="123-456-7890"
            />
          </div>

          {/* Inquiry Type */}
          <div className="w-full">
            <label className="block text-lg font-semibold">Inquiry Type</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Status">Order Status</option>
              <option value="Returns">Returns</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-lg font-semibold">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100"
            placeholder="Type your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="">
          <button
            type="submit"
            className="bg-black text-white py-3 px-5 flex items-center gap-1"
          >
            Just Send <MdArrowOutward />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
