"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");

    // Simulate API call with timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData(initialFormData);
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {formStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-lg text-gray-600 mb-6">
            Your message has been sent successfully. Our team will get back to you shortly.
          </p>
          <Button
            variant="outline"
            onClick={() => setFormStatus("idle")}
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 outline-none transition-colors duration-300`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 outline-none transition-colors duration-300`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 outline-none transition-colors duration-300`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-gray-700 font-medium mb-2"
            >
              Service Required
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 outline-none transition-colors duration-300"
            >
              <option value="">Select a service</option>
              <option value="Civil & Criminal Litigation">Civil & Criminal Litigation</option>
              <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
              <option value="Banking & Finance Law">Banking & Finance Law</option>
              <option value="Real Estate & Property Law">Real Estate & Property Law</option>
              <option value="Arbitration & Mediation">Arbitration & Mediation</option>
              <option value="Family Law & Divorce">Family Law & Divorce</option>
              <option value="Employment & Labor Laws">Employment & Labor Laws</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:border-primary focus:ring} focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 outline-none transition-colors duration-300 resize-none`}
              placeholder="Please describe your legal concern"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={formStatus === "submitting"}
              loading={formStatus === "submitting"}
              fullWidth
            >
              {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
            </Button>

            {formStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-red-500"
              >
                There was an error submitting your form. Please try again.
              </motion.p>
            )}

            <p className="mt-4 text-sm text-gray-500">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;