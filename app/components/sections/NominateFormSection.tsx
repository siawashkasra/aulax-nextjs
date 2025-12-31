"use client";

import { useState } from "react";

// Icons
const CheckCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
    <path d="M7 10l2 2 4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10" cy="10" r="8" />
    <polyline points="10 6 10 10 13 13" />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.5 14.5l-2-2" />
    <path d="M8 11l-3.5 3.5" />
    <path d="M6.5 12.5l-3 3" />
    <path d="M10.5 8.5l4-4c1.5-1.5 3-1 3.5-.5s1 2-.5 3.5l-4 4" />
    <path d="M13.5 10.5l2 2" />
  </svg>
);

const GiftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 10 16 18 4 18 4 10" />
    <rect x="2" y="6" width="16" height="4" />
    <line x1="10" y1="18" x2="10" y2="6" />
    <path d="M10 6H6.5a2.5 2.5 0 010-5C9 1 10 6 10 6z" />
    <path d="M10 6h3.5a2.5 2.5 0 000-5C11 1 10 6 10 6z" />
  </svg>
);

export default function NominateFormSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    location: "",
    yourName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="nominate-form"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[48px] lg:gap-[64px]">
          {/* Form */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-[24px] md:mb-[32px]">
              <h2 className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#1e293b] mb-[8px] md:mb-[12px]">
                Nominate a Business
              </h2>
              <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
                Fill in the details below and we&apos;ll reach out to help them
                join Aulax.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] md:gap-[20px]">
              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Joe's Coffee Shop"
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent transition-shadow"
                />
              </div>

              {/* Business Type */}
              <div>
                <label
                  htmlFor="businessType"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] bg-white focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent transition-shadow"
                >
                  <option value="">Select a category</option>
                  <option value="cafe">Café / Coffee Shop</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="retail">Retail Shop</option>
                  <option value="bakery">Bakery</option>
                  <option value="grocery">Grocery / Convenience</option>
                  <option value="boutique">Fashion Boutique</option>
                  <option value="salon">Hair / Beauty Salon</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 123 High Street, London"
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent transition-shadow"
                />
              </div>

              {/* Your Name */}
              <div>
                <label
                  htmlFor="yourName"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent transition-shadow"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-[6px] md:mb-[8px]"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] border border-[#d1d5db] rounded-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent transition-shadow"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#006a4e] text-white font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[24px] py-[12px] md:py-[14px] rounded-full hover:bg-[#005540] transition-colors mt-[8px]"
              >
                Submit Nomination
              </button>
            </form>
          </div>

          {/* Right Side - Info Cards */}
          <div className="w-full lg:w-[400px] flex flex-col gap-[16px] md:gap-[24px]">
            {/* Card 1 */}
            <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px]">
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-full bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <ClockIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1e293b]">
                    Quick Response
                  </h4>
                  <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] mt-[4px]">
                    We&apos;ll reach out to the business within 48 hours of
                    receiving your nomination.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px]">
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-full bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <RocketIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1e293b]">
                    Easy Onboarding
                  </h4>
                  <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] mt-[4px]">
                    We make it simple for businesses to join with dedicated
                    support throughout the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px]">
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-full bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <GiftIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1e293b]">
                    Rewards for You
                  </h4>
                  <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] mt-[4px]">
                    Earn £10 in Aulax credits when a business you nominate
                    successfully joins the platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="flex items-center gap-[8px] md:gap-[12px] px-[12px] md:px-[16px] py-[10px] md:py-[12px] bg-[rgba(144,238,144,0.2)] rounded-[8px] md:rounded-[12px]">
              <CheckCircleIcon />
              <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#006a4e]">
                All nominations are verified before outreach
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
