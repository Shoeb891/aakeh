"use client";

import Link from "next/link";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: "phone" | "email";
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "phone",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      title: "Phone",
      detail: "040-24418929",
      action: "tel:04024418929",
      desc: "Call us during working hours",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Email",
      detail: "info@aakeyehospital.com",
      action: "mailto:info@aakeyehospital.com",
      desc: "Send us an email anytime",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Address",
      detail: "Darulshifa, Hyderabad - 500024",
      action:
        "https://maps.google.com/?q=Abid+Ali+Khan+Eye+Hospital+Darulshifa+Hyderabad",
      desc: "Get directions on Google Maps",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "How do I schedule an appointment?",
      a: "You can schedule an appointment by calling us during working hours or by visiting the hospital directly.",
    },
    {
      q: "Do you accept insurance?",
      a: "We accept multiple insurance providers. Please call us to confirm your coverage.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Please bring a valid ID, previous eye records, prescriptions, and insurance card if applicable.",
    },
    {
      q: "Do you offer emergency services?",
      a: "For emergencies outside regular hours, please call our emergency contact number.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* CONTACT METHODS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#241773] mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            We&apos;re here to answer your questions and provide the care you need
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                target={method.title === "Address" ? "_blank" : undefined}
                rel={method.title === "Address" ? "noopener noreferrer" : undefined}
                className="rounded-xl border p-8 shadow hover:shadow-xl transition text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#e0f2fe] text-[#241773]">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#241773]">
                  {method.title}
                </h3>
                <p className="text-lg text-[#6a1b9a]">{method.detail}</p>
                <p className="text-sm text-gray-600 mt-2">{method.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#241773] mb-6">
            Send Us a Message
          </h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
              ✓ Message sent successfully!
            </div>
          )}

          <div className="space-y-6">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            >
              <option value="">Select subject</option>
              <option value="appointment">Appointment</option>
              <option value="consultation">Consultation</option>
              <option value="billing">Billing</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#8e24aa] text-white py-3 rounded font-semibold hover:bg-[#7a1f8e]"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#241773] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="p-6 border rounded bg-white">
                <summary className="font-semibold cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#241773] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Schedule Your Appointment?
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="tel:04024418929"
            className="bg-white text-[#241773] px-6 py-3 rounded font-semibold"
          >
            Call Now
          </a>
          <Link
            href="/"
            className="border border-white px-6 py-3 rounded font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
