"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Star icon for ratings
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill={filled ? "#fbbf24" : "none"}
    stroke="#fbbf24"
    strokeWidth="1.5"
  >
    <path d="M8 1l1.79 3.63 4.01.58-2.9 2.83.68 3.99L8 10.27l-3.58 1.88.68-3.99-2.9-2.83 4.01-.58L8 1z" />
  </svg>
);

// Quote icon
const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="#e5e7eb">
    <path d="M10 8c-3.3 0-6 2.7-6 6 0 5 4 10 10 14l2-3c-4-3-6-6-6-9h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4zm14 0c-3.3 0-6 2.7-6 6 0 5 4 10 10 14l2-3c-4-3-6-6-6-9h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4z" />
  </svg>
);

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  business: string;
  rating: number;
  imageSrc: string;
}

function TestimonialCard({
  quote,
  name,
  role,
  business,
  rating,
  imageSrc,
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-[20px] md:p-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-[16px] md:gap-[20px]">
        {/* Quote icon */}
        <div className="opacity-30">
          <QuoteIcon />
        </div>

        {/* Quote */}
        <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#374151]">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Rating */}
        <div className="flex gap-[2px]">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= rating} />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-[10px] md:gap-[12px]">
          <div className="relative w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-full overflow-hidden">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1e293b]">
              {name}
            </p>
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280]">
              {role}, {business}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartnershipSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    message: "",
  });

  const testimonials: TestimonialProps[] = [
    {
      quote:
        "Aulax has transformed how we connect with local customers. Our foot traffic increased by 40% in just three months.",
      name: "Sarah Mitchell",
      role: "Owner",
      business: "The Corner Bakery",
      rating: 5,
      imageSrc: "/images/testimonial-sarah.jpg",
    },
    {
      quote:
        "The analytics dashboard helps us understand our customers better. We've been able to tailor our offerings perfectly.",
      name: "James Chen",
      role: "Manager",
      business: "Green Grocers",
      rating: 5,
      imageSrc: "/images/testimonial-james.jpg",
    },
    {
      quote:
        "Easy to use and the support team is fantastic. It's exactly what small businesses like ours needed.",
      name: "Emma Thompson",
      role: "Co-founder",
      business: "Vintage Finds",
      rating: 5,
      imageSrc: "/images/testimonial-emma.jpg",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
  };

  return (
    <section
      id="partner"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] bg-[#f9fafb]"
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] mb-[48px] md:mb-[64px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-[8px] bg-[rgba(144,238,144,0.3)] px-[12px] py-[6px] rounded-full">
            <span className="font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#006a4e]">
              Partner with Us
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[672px] text-center">
            <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b]">
              Grow Your Business with Aulax
            </h2>
          </div>

          <p className="text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563] max-w-[600px]">
            Join hundreds of local businesses already thriving on our platform.
            Get discovered by new customers and boost your sales.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] mb-[48px] md:mb-[64px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[48px] lg:gap-[64px]">
          {/* Form */}
          <div className="flex-1 bg-white rounded-[16px] md:rounded-[24px] p-[24px] md:p-[32px] lg:p-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
            <h3 className="font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] text-[#1e293b] mb-[16px] md:mb-[24px]">
              Book a Meeting
            </h3>
            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] mb-[20px] md:mb-[32px]">
              Fill out the form and our partnership team will get in touch
              within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] md:gap-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] md:gap-[20px]">
                {/* Name */}
                <div>
                  <label
                    htmlFor="partner-name"
                    className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="partner-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="partner-email"
                    className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="partner-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@business.com"
                    className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] md:gap-[20px]">
                {/* Business Name */}
                <div>
                  <label
                    htmlFor="partner-business"
                    className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="partner-business"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    placeholder="Your business name"
                    className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="partner-phone"
                    className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="partner-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 (0) 1234 567890"
                    className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="partner-message"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Message
                </label>
                <textarea
                  id="partner-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your business..."
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#006a4e] text-white font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[24px] py-[12px] md:py-[14px] rounded-full hover:bg-[#005540] transition-colors"
              >
                Schedule a Meeting
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="w-full lg:w-[400px] flex flex-col gap-[16px] md:gap-[24px]">
            {/* Benefits Card */}
            <div className="bg-[#006a4e] rounded-[16px] md:rounded-[24px] p-[24px] md:p-[32px] text-white">
              <h4 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-[16px] md:mb-[20px]">
                Why Partner with Aulax?
              </h4>
              <ul className="flex flex-col gap-[12px] md:gap-[16px]">
                <li className="flex items-start gap-[10px] md:gap-[12px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    className="flex-shrink-0 mt-[2px]"
                  >
                    <path d="M16.667 5L7.5 14.167 3.333 10" />
                  </svg>
                  <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                    Reach thousands of local shoppers actively searching for
                    businesses like yours
                  </span>
                </li>
                <li className="flex items-start gap-[10px] md:gap-[12px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    className="flex-shrink-0 mt-[2px]"
                  >
                    <path d="M16.667 5L7.5 14.167 3.333 10" />
                  </svg>
                  <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                    Powerful analytics to understand your customer behaviour
                  </span>
                </li>
                <li className="flex items-start gap-[10px] md:gap-[12px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    className="flex-shrink-0 mt-[2px]"
                  >
                    <path d="M16.667 5L7.5 14.167 3.333 10" />
                  </svg>
                  <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                    No setup fees—only pay for results
                  </span>
                </li>
                <li className="flex items-start gap-[10px] md:gap-[12px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#90ee90"
                    strokeWidth="2"
                    className="flex-shrink-0 mt-[2px]"
                  >
                    <path d="M16.667 5L7.5 14.167 3.333 10" />
                  </svg>
                  <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                    Dedicated support from our partnership team
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-[16px] md:rounded-[24px] p-[20px] md:p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
              <h4 className="font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1e293b] mb-[12px] md:mb-[16px]">
                Prefer to chat?
              </h4>
              <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] mb-[12px] md:mb-[16px]">
                Our partnership team is ready to help you get started.
              </p>
              <Link
                href="mailto:partners@aulax.app"
                className="inline-block font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#006a4e] hover:underline"
              >
                partners@aulax.app
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
