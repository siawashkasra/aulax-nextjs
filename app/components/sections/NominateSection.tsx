import Link from "next/link";
import Image from "next/image";

// Icon for Quick & Easy Process (clipboard/form icon)
const ClipboardIcon = () => (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none">
    <rect x="8" y="4" width="24" height="32" rx="4" stroke="#006a4e" strokeWidth="2" fill="none" />
    <path d="M14 0h12v8H14V0z" fill="#006a4e" />
    <rect x="14" y="2" width="12" height="6" rx="2" fill="#90ee90" />
    <path d="M14 16h12M14 22h12M14 28h8" stroke="#006a4e" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Icon for We Handle the Rest (handshake/team icon)
const HandshakeIcon = () => (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none">
    <path d="M4 20L12 12L20 20L28 12L36 20" stroke="#006a4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 28c0-4 4-8 12-8s12 4 12 8" stroke="#006a4e" strokeWidth="2" fill="none" />
    <circle cx="20" cy="16" r="6" fill="#90ee90" />
  </svg>
);

// Icon for Get Rewarded (gift/star icon)
const RewardIcon = () => (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none">
    <path d="M20 4L23.5 13H33L25.5 19L28.5 28L20 22L11.5 28L14.5 19L7 13H16.5L20 4Z" fill="#90ee90" stroke="#006a4e" strokeWidth="2" />
    <circle cx="20" cy="36" r="6" stroke="#006a4e" strokeWidth="2" fill="none" />
  </svg>
);

// Shop icon for Local Shops stat
const ShopIcon = () => (
  <svg width="27" height="24" viewBox="0 0 27 24" fill="#006a4e">
    <path d="M24.75 8V22H2.25V8M0 0H27V8C27 9.66 25.66 11 24 11C22.34 11 21 9.66 21 8C21 9.66 19.66 11 18 11C16.34 11 15 9.66 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 9.66 7.66 11 6 11C4.34 11 3 9.66 3 8C3 9.66 1.66 11 0 11V0Z" />
  </svg>
);

// Community icon for Community Nominations stat
const CommunityIcon = () => (
  <svg width="30" height="24" viewBox="0 0 30 24" fill="#006a4e">
    <circle cx="15" cy="8" r="5" />
    <circle cx="6" cy="10" r="4" />
    <circle cx="24" cy="10" r="4" />
    <path d="M15 14c-5 0-9 3-9 6v4h18v-4c0-3-4-6-9-6z" />
    <path d="M6 15c-3 0-6 2-6 4v5h6v-5c0-1.5.5-2.8 1.5-4H6z" />
    <path d="M24 15c3 0 6 2 6 4v5h-6v-5c0-1.5-.5-2.8-1.5-4H24z" />
  </svg>
);

// Success icon for Success Rate stat
const SuccessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#006a4e">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#006a4e" strokeWidth="2" />
    <path d="M8 12l3 3 5-6" stroke="#006a4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function NominateSection() {
  return (
    <section
      className="w-full px-[80px] py-[96px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(161, 255, 194, 0.3) 0%, rgba(207, 250, 254, 0.4) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="flex items-center justify-center gap-[48px]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start gap-[24px]">
            {/* Badge */}
            <div className="bg-[rgba(144,238,144,0.4)] px-[16px] py-[8px] rounded-full">
              <span className="font-semibold text-[14px] leading-[20px] text-[#1e293b]">
                Help Us Grow
              </span>
            </div>

            {/* Heading */}
            <div className="w-full">
              <h2 className="font-bold text-[48px] leading-[48px] text-[#1e293b]">
                Know a Great Local
                <br />
                Business?
              </h2>
            </div>

            {/* Description */}
            <div className="w-full">
              <p className="text-[18px] leading-[29.25px] text-[#374151] max-w-[458px]">
                Help us bring your favorite local shops onto Aulax! Nominate
                businesses you love and want to see on our platform. Together,
                we can build a stronger local marketplace.
              </p>
            </div>

            {/* Feature Items */}
            <div className="w-full flex flex-col gap-[16px] pt-[8px]">
              {/* Feature 1 - Quick & Easy Process */}
              <div className="flex items-start">
                <div className="w-[40px] h-[44px] flex-shrink-0">
                  <ClipboardIcon />
                </div>
                <div className="flex flex-col gap-[4px] pl-[16px]">
                  <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b]">
                    Quick &amp; Easy Process
                  </h4>
                  <p className="text-[16px] leading-[24px] text-[#4b5563]">
                    Just share the business name and location
                  </p>
                </div>
              </div>

              {/* Feature 2 - We Handle the Rest */}
              <div className="flex items-start">
                <div className="w-[40px] h-[44px] flex-shrink-0">
                  <HandshakeIcon />
                </div>
                <div className="flex flex-col gap-[4px] pl-[16px]">
                  <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b]">
                    We Handle the Rest
                  </h4>
                  <p className="text-[16px] leading-[24px] text-[#4b5563]">
                    Our team reaches out and onboards them
                  </p>
                </div>
              </div>

              {/* Feature 3 - Get Rewarded */}
              <div className="flex items-start">
                <div className="w-[40px] h-[44px] flex-shrink-0">
                  <RewardIcon />
                </div>
                <div className="flex flex-col gap-[4px] pl-[16px]">
                  <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b]">
                    Get Rewarded
                  </h4>
                  <p className="text-[16px] leading-[24px] text-[#4b5563]">
                    Earn bonus rewards when they join
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-[16px]">
              <Link
                href="#nominate-form"
                className="inline-flex items-center bg-[#1e293b] text-white font-bold text-[18px] leading-[28px] px-[32px] py-[16px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#334155] transition-colors"
              >
                Nominate a Business
              </Link>
            </div>
          </div>

          {/* Right Side - White Card with Image and Stats */}
          <div className="flex-[0.87] bg-white rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden p-[32px] flex flex-col gap-[24px]">
            {/* Image Container */}
            <div className="w-full h-[256px] rounded-[16px] overflow-hidden bg-gray-100 relative">
              <Image
                src="/images/nominate-business.jpg"
                alt="Friendly local business owner"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col gap-[16px]">
              {/* Stat 1 - Local Shops */}
              <div className="w-full bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center">
                  <ShopIcon />
                  <span className="font-semibold text-[16px] leading-[24px] text-[#1e293b] pl-[12px]">
                    Local Shops
                  </span>
                </div>
                <span className="text-[14px] leading-[20px] text-[#4b5563]">
                  500+ Onboarded
                </span>
              </div>

              {/* Stat 2 - Community Nominations */}
              <div className="w-full bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center">
                  <CommunityIcon />
                  <span className="font-semibold text-[16px] leading-[24px] text-[#1e293b] pl-[12px]">
                    Community Nominations
                  </span>
                </div>
                <span className="text-[14px] leading-[20px] text-[#4b5563]">
                  1,200+ Received
                </span>
              </div>

              {/* Stat 3 - Success Rate */}
              <div className="w-full bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center">
                  <SuccessIcon />
                  <span className="font-semibold text-[16px] leading-[24px] text-[#1e293b] pl-[12px]">
                    Success Rate
                  </span>
                </div>
                <span className="text-[14px] leading-[20px] text-[#4b5563]">
                  92% Join
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
