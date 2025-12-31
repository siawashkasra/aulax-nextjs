import Image from "next/image";
import Link from "next/link";

// Chevron down icon
const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#1f2937">
    <path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Verified checkmark icon
const VerifiedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#006a4e">
    <path d="M5.25 7l1.75 1.75 3.5-3.5" stroke="#006a4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="7" cy="7" r="6" stroke="#006a4e" strokeWidth="1" fill="none" />
  </svg>
);

// Lightning/instant icon
const InstantIcon = () => (
  <svg width="12.25" height="14" viewBox="0 0 13 14" fill="#006a4e">
    <path d="M7 0L0 8h6v6l7-8H7V0z" fill="#006a4e" />
  </svg>
);

export default function ConvenientShoppingSection() {
  return (
    <section className="px-[80px] py-[96px] bg-[#eaffe2]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="flex gap-[48px] items-center justify-center">
          {/* Left - Text Content */}
          <div className="flex-1 flex flex-col gap-[16px]">
            <h2 className="font-bold text-[36px] leading-[40px] text-[#1e293b]">
              Convenient, personalized shopping
            </h2>

            <div className="pb-[16px]">
              <p className="font-normal text-[18px] leading-[28px] text-[#374151]">
                Use our platform to find exactly what you&apos;re looking for from
                local sellers. Whether you need fresh produce, handmade crafts,
                or unique services, we connect you in seconds.
              </p>
            </div>

            <Link
              href="#"
              className="inline-block bg-[#1e293b] text-white font-bold text-[16px] leading-[24px] px-[32px] py-[12px] rounded-full w-fit hover:bg-[#334155] transition-colors"
            >
              Learn how to shop
            </Link>
          </div>

          {/* Right - Search Card */}
          <div className="flex-1 bg-white rounded-[16px] p-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            {/* Search Query Section */}
            <div className="border-b border-[#e5e7eb] pb-[17px] flex flex-col gap-[8.5px]">
              <span className="font-medium text-[14px] leading-[20px] text-[#6b7280]">
                You&apos;re looking for
              </span>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[24px] leading-[32px] text-[#1f2937]">
                  Artisanal Bread
                </span>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-red-100 flex items-center justify-center">
                    <span className="text-[20px]">🍁</span>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] text-[#1f2937]">
                    CAD
                  </span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="pt-[16px] flex flex-col gap-[8.5px]">
              <span className="font-medium text-[14px] leading-[20px] text-[#6b7280]">
                Your location
              </span>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[24px] leading-[32px] text-[#1f2937]">
                  Toronto, ON
                </span>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                    <span className="text-[20px]">📍</span>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] text-[#1f2937]">
                    Local
                  </span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Features Row */}
            <div className="flex items-center justify-between py-[15.5px]">
              <div className="flex items-center gap-[4px]">
                <VerifiedIcon />
                <span className="font-normal text-[14px] leading-[20px] text-[#4b5563]">
                  Verified sellers
                </span>
              </div>
              <div className="flex items-center gap-[4px]">
                <InstantIcon />
                <span className="font-normal text-[14px] leading-[20px] text-[#4b5563]">
                  Instant results
                </span>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-[#90ee90] text-[#1e293b] font-bold text-[18px] leading-[28px] py-[16px] rounded-full hover:bg-[#7de47d] transition-colors">
              Find Businesses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

