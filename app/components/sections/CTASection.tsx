import Image from "next/image";
import Link from "next/link";

// Apple icon
const AppleIcon = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="white">
    <path d="M14.94 12.66c-.02-2.32 1.89-3.43 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.43-.14-2.79.84-3.52.84-.73 0-1.85-.82-3.04-.8-1.56.02-3 .91-3.81 2.31-1.62 2.82-.41 7 1.17 9.29.77 1.12 1.69 2.37 2.9 2.33 1.16-.05 1.6-.75 3.01-.75 1.4 0 1.8.75 3.02.73 1.25-.02 2.04-1.14 2.8-2.26.88-1.29 1.25-2.55 1.27-2.61-.03-.01-2.44-.94-2.46-3.72l.04-.05zM12.58 5.18c.64-.78 1.07-1.85.95-2.93-.92.04-2.03.61-2.69 1.38-.59.69-1.11 1.78-.97 2.83 1.02.08 2.07-.52 2.71-1.28z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
    <path d="M3.17 1.24c-.28.29-.42.72-.42 1.26v15c0 .54.14.97.42 1.26l.07.06 8.4-8.4v-.2L3.24 1.18l-.07.06z" />
    <path d="M14.44 13.22l-2.8-2.8v-.2l2.8-2.8.06.03 3.32 1.89c.95.54.95 1.42 0 1.96l-3.32 1.89-.06.03z" />
    <path d="M14.5 13.19L11.64 10.33 3.17 18.8c.31.33.83.37 1.42.04l9.91-5.65" />
    <path d="M14.5 7.47L4.59 1.82c-.59-.33-1.11-.29-1.42.04l8.47 8.47 2.86-2.86z" />
  </svg>
);

export default function CTASection() {
  return (
    <section
      id="download"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(151deg, rgba(161, 255, 194, 0.20) 1.44%, rgba(207, 250, 254, 0.30) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[64px]">
          {/* Left - Illustration/Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-[400px] md:max-w-[500px] mx-auto">
              {/* Background decoration */}
              <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(144, 238, 144, 0.3) 0%, transparent 70%)",
                }}
              />

              {/* Main image */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/cta-illustration.png"
                  alt="Aulax app illustration"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-[10%] right-[5%] bg-white rounded-[12px] md:rounded-[16px] p-[10px] md:p-[16px] shadow-lg transform rotate-[6deg]">
                <p className="font-bold text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#006a4e]">
                  50K+
                </p>
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-[#6b7280]">
                  Happy Users
                </p>
              </div>

              <div className="absolute bottom-[15%] left-[5%] bg-white rounded-[12px] md:rounded-[16px] p-[10px] md:p-[16px] shadow-lg transform rotate-[-6deg]">
                <p className="font-bold text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] text-[#006a4e]">
                  4.8★
                </p>
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-[#6b7280]">
                  App Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[20px] md:gap-[24px] text-center lg:text-left">
            <div>
              <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b] mb-[12px] md:mb-[16px]">
                Start Your Local
                <br className="hidden sm:block" />
                Shopping Journey
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563]">
                Download Aulax today and discover the joy of shopping local.
                Support your community while saving time and money.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="flex flex-col gap-[12px] md:gap-[16px]">
              <div className="flex items-center gap-[10px] md:gap-[12px] justify-center lg:justify-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#006a4e"
                  strokeWidth="2"
                >
                  <path d="M16.667 5L7.5 14.167 3.333 10" />
                </svg>
                <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151]">
                  Free to download and use
                </span>
              </div>
              <div className="flex items-center gap-[10px] md:gap-[12px] justify-center lg:justify-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#006a4e"
                  strokeWidth="2"
                >
                  <path d="M16.667 5L7.5 14.167 3.333 10" />
                </svg>
                <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151]">
                  1,000+ local businesses
                </span>
              </div>
              <div className="flex items-center gap-[10px] md:gap-[12px] justify-center lg:justify-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#006a4e"
                  strokeWidth="2"
                >
                  <path d="M16.667 5L7.5 14.167 3.333 10" />
                </svg>
                <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151]">
                  Exclusive deals and rewards
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-[12px] sm:gap-[16px] justify-center lg:justify-start">
              {/* App Store */}
              <Link
                href="#"
                className="flex items-center bg-black px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] md:rounded-[12px] hover:bg-gray-900 transition-colors"
              >
                <div className="w-[18px] h-[24px]">
                  <AppleIcon />
                </div>
                <div className="ml-[10px] md:ml-[12px]">
                  <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white/80">
                    Download on the
                  </p>
                  <p className="font-semibold text-[16px] md:text-[18px] leading-[20px] md:leading-[28px] text-white">
                    App Store
                  </p>
                </div>
              </Link>

              {/* Google Play */}
              <Link
                href="#"
                className="flex items-center bg-black px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] md:rounded-[12px] hover:bg-gray-900 transition-colors"
              >
                <div className="w-[20px] h-[20px]">
                  <GooglePlayIcon />
                </div>
                <div className="ml-[10px] md:ml-[12px]">
                  <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white/80">
                    GET IT ON
                  </p>
                  <p className="font-semibold text-[16px] md:text-[18px] leading-[20px] md:leading-[28px] text-white">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
