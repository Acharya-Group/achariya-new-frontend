"use client";
import React, { useState } from "react";
import SubHeading from "../ui/SubHeading";
import Button from "../ui/Button";
import useContact, { CreateContactInput } from "@/hooks/contactData";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ContactForm = () => {
    const pathname = usePathname();
  const { createContact } = useContact();

  const [formData, setFormData] = useState<CreateContactInput>({
    name: "",
    number: "",
    district: "",
    state: "",
    message: "",
    status: "pending",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simple validation
    if (!formData.name || !formData.number || !formData.district || !formData.state || !formData.message) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      await createContact.mutateAsync(formData);
      setSuccess(true);
      setFormData({
        name: "",
        number: "",
        district: "",
        state: "",
        message: "",
        status: "pending",
      });
    } catch (err) {
      console.error(err);
      setError("Error submitting contact. Please try again.");
      toast.error("Failed to submit contact.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={` ${pathname === "/"?"py-10 overflow-hidden":""} relative overflow-hidden}`}>

  {pathname === "/" ? (
  <>
    <Image
      className="absolute hover:scale-75 hover:animate-pulse transition-all flex top-[-10px] lg:top-0 end-[-50px] lg:end-[-50px] animate-spin lg:h-[100px] lg:w-[100px] w-[50px] h-[50px]"
      src="/images/icons/red-circel.png"
      alt="Decorative Dots"
      width={100}
      height={100}
    />
    <Image
      className="absolute hover:scale-75 hover:animate-pulse transition-all flex bottom-[-10px] lg:bottom-0 start-[-50px] lg:start-[-50px] lg:h-[100px] lg:w-[100px] w-[50px] h-[50px] animate-spin"
      src="/images/icons/red-circel.png"
      alt="Decorative Dots"
      width={100}
      height={100}
    />
  </>
) : null}

        
      <div className="container mx-auto px-4 max-w-5xl pb-12">
        <SubHeading content="Get in Touch" />
          <p className="text-center text-gray-500 mb-0">
                Reach out to us and we will respond as soon as possible.
              </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Phone No"
              value={formData.number}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="border border-gray-300 rounded px-4 py-2 w-full h-32 focus:outline-none focus:ring-2"
            required
          />

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
              <p className="font-medium">{error}</p>
            </div>
          )}

          <div className="text-center">
            <Button
              type="submit"
              content={isSubmitting ? "Submitting..." : "Submit"}
              className="px-6 py-2"
              
            />
          </div>
        </form>

        {success && (
          <div className="fixed inset-0 flex items-center justify-center overflow-hidden backdrop-blur-2xl bg-opacity-30 z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4 max-w-md">
              <h3 className="text-2xl font-bold text-green-600">✅ Success!</h3>
              <p>Your message has been sent successfully.</p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
