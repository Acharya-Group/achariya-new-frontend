"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useFeedbackComplaint, { CreateFeedbackInput } from "@/hooks/feedbackComplaint";

const FeedbackComplaintForm: React.FC = () => {
  const { createFeedback } = useFeedbackComplaint();

  const [formData, setFormData] = useState<CreateFeedbackInput>({
    name: "",
    number: "",
    district: "",
    state: "",
    formType: "Complaint",
    subject: "",
    message: "",
    status: "pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createFeedback.mutateAsync(formData);
  };

  const {
  isError,
  isSuccess,
  error,
} = createFeedback;


useEffect(() => {
  if (isError) {
    toast.error(error?.message || "Failed to submit form");
  }

  if (isSuccess) {
    toast.success("🎉 Form submitted successfully!");
    setFormData({
      name: "",
      number: "",
      district: "",
      state: "",
      formType: "Complaint",
      subject: "",
      message: "",
      status: "pending",
    });
  }
}, [isError, isSuccess, error?.message]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-primary font-bold text-center mb-6">
        Submit Feedback / Complaint
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="tel"
          name="number"
          placeholder="Phone No"
          value={formData.number}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <select
          name="formType"
          value={formData.formType}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="Complaint">Complaint</option>
          <option value="Feedback">Feedback</option>
        </select>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg md:col-span-2"
          required
        />

        <button
          type="submit"
          disabled={createFeedback.isPending}
          className="md:col-span-2 px-6 py-3 rounded-lg text-white font-medium w-full
          bg-gradient-to-r from-[#261b7d] to-[#7a0706]
          hover:from-[#7a0706] hover:to-[#261b7d]
          disabled:opacity-50 transition"
        >
          {createFeedback.isPending ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackComplaintForm;
