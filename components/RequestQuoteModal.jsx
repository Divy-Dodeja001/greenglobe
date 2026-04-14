"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/requestQuoteModal.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phoneNumber: "",
  cargoType: "",
  message: "",
};

export default function RequestQuoteModal({
  isOpen,
  onClose,
  onSubmitForm,
  cargo,
  title = "Let’s plan your next shipment.",
  subtitle = "Share your requirements and our team will connect with you to discuss the most suitable logistics solution.",
}) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const cargoOptions = useMemo(
    () => [
      "Sea Freight",
      "Air Freight",
      "Inland Transportation",
      "Customs Assistance",
      "Packaging & Quality Checks",
    ],
    [],
  );

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      cargoType: cargo ? cargo : "Sea Freight",
    }));
  }, [cargo]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setErrors({});
      setSubmitState({
        loading: false,
        success: "",
        error: "",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.company.trim()) newErrors.company = "Company is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number.";
    }

    if (!formData.cargoType.trim())
      newErrors.cargoType = "Please select cargo type.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitState({
      loading: false,
      success: "",
      error: "",
    });

    if (!validateForm()) return;

    try {
      setSubmitState({
        loading: true,
        success: "",
        error: "",
      });

      if (onSubmitForm) {
        await onSubmitForm(formData);
      } else {
        const res = await fetch("/api/request-quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error("Something went wrong while submitting the form.");
        }
      }

      setSubmitState({
        loading: false,
        success: "Your quote request has been submitted successfully.",
        error: "",
      });

      setFormData(initialForm);

      setTimeout(() => {
        onClose();
      }, 1800);
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error: error?.message || "Submission failed. Please try again.",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="request-quote-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="request-quote-modal-wrap"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-quote-title"
          >
            <div className="request-quote-modal-card">
              <button
                type="button"
                className="request-quote-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="request-quote-header">
                <h2 id="request-quote-title" className="request-quote-title">
                  {title}
                </h2>
                <p className="request-quote-subtitle">{subtitle}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 request-quote-form-grid">
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control request-quote-input ${errors.name ? "is-invalid" : ""}`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className={`form-control request-quote-input ${errors.phoneNumber ? "is-invalid" : ""}`}
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback d-block">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Cargo Type</label>
                    <select
                      name="cargoType"
                      className={`form-select request-quote-input ${errors.cargoType ? "is-invalid" : ""}`}
                      value={formData.cargoType}
                      onChange={handleChange}
                    >
                      {cargoOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.cargoType && (
                      <div className="invalid-feedback d-block">
                        {errors.cargoType}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Company</label>
                    <input
                      type="text"
                      name="company"
                      className={`form-control request-quote-input ${errors.company ? "is-invalid" : ""}`}
                      value={formData.company}
                      onChange={handleChange}
                    />
                    {errors.company && (
                      <div className="invalid-feedback d-block">
                        {errors.company}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control request-quote-input ${errors.email ? "is-invalid" : ""}`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="request-quote-label">Message</label>
                    <textarea
                      name="message"
                      className={`form-control request-quote-input request-quote-textarea ${errors.message ? "is-invalid" : ""}`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="invalid-feedback d-block">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="col-12 d-flex align-items-end">
                    <button
                      type="submit"
                      className="btn request-quote-submit-btn w-100"
                      disabled={submitState.loading}
                    >
                      {submitState.loading
                        ? "Submitting..."
                        : "Request a Quote"}
                    </button>
                  </div>
                </div>

                {(submitState.success || submitState.error) && (
                  <div
                    className={`request-quote-alert mt-3 ${
                      submitState.success
                        ? "request-quote-alert-success"
                        : "request-quote-alert-error"
                    }`}
                  >
                    {submitState.success || submitState.error}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
