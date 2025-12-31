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

export default function HeroSection() {
  return (
    <section className="bg-white relative pt-[72px]">
      {/* Main Content Container */}
      <div className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px]">
        <div className="max-w-[1280px] mx-auto">
          {/* Hero Content */}
          <div className="px-0 md:px-[24px]">
            {/* Heading */}
            <div className="flex flex-col items-center gap-[16px] md:gap-[24px] mb-[32px] md:mb-[48px]">
              <div className="max-w-[896px] text-center">
                <h1 className="font-extrabold text-[36px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[52px] lg:leading-[60px] text-[#1e293b]">
                  Connecting You to the Local
                  <br className="hidden sm:block" />
                  Marketplace
                </h1>
              </div>

              <div className="max-w-[672px] text-center">
                <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563]">
                  Explore your local market with excitement! Aulax makes it easy
                  and fun to discover nearby shops and amazing deals at your
                  favourite stores.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-[8px] md:pt-[16px]">
                <Link
                  href="#contact"
                  className="inline-block bg-[#90ee90] px-[24px] md:px-[32px] py-[10px] md:py-[12px] rounded-full font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1e293b] text-center hover:bg-[#7de87d] transition-colors"
                >
                  Let&apos;s talk now!
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-[12px] md:rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/hero-market.jpg"
                alt="A vibrant, multicultural group of friends shopping at a bustling outdoor local market"
                fill
                className="object-cover"
                priority
              />

              {/* App Store Badges */}
              <div className="absolute bottom-[16px] md:bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-[8px] sm:gap-0">
                {/* App Store */}
                <Link
                  href="#"
                  className="flex items-center bg-black px-[12px] md:px-[16px] py-[6px] md:py-[8px] rounded-[8px]"
                >
                  <div className="w-[14px] md:w-[18px] h-[18px] md:h-[24px]">
                    <AppleIcon />
                  </div>
                  <div className="ml-[6px] md:ml-[8px]">
                    <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white">
                      Download on the
                    </p>
                    <p className="font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-white">
                      App Store
                    </p>
                  </div>
                </Link>

                {/* Google Play */}
                <Link
                  href="#"
                  className="flex items-center bg-black px-[12px] md:px-[16px] py-[6px] md:py-[8px] rounded-[8px] sm:ml-[16px]"
                >
                  <div className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]">
                    <GooglePlayIcon />
                  </div>
                  <div className="ml-[6px] md:ml-[8px]">
                    <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white">
                      GET IT ON
                    </p>
                    <p className="font-semibold text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-white">
                      Google Play
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Brand Logos Section */}
            <div className="mt-[32px] md:mt-[64px]">
              <p className="text-center font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] uppercase tracking-[0.35px] mb-[16px] md:mb-[32px]">
                Trusted by leading UK businesses
              </p>

              <div className="flex flex-wrap items-center justify-center gap-[24px] md:gap-[48px] opacity-60 mix-blend-saturation">
                {/* Tesco */}
                <div className="flex items-center h-[32px] md:h-[48px]">
                  <div className="w-[20px] md:w-[27px] h-[26px] md:h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[8px] md:ml-[12px] font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#374151]">
                    Tesco
                  </span>
                </div>

                {/* Sainsbury's */}
                <div className="flex items-center h-[32px] md:h-[48px]">
                  <div className="w-[30px] md:w-[40.5px] h-[26px] md:h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[8px] md:ml-[12px] font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#374151]">
                    Sainsbury&apos;s
                  </span>
                </div>

                {/* Waitrose - Hidden on mobile */}
                <div className="hidden sm:flex items-center h-[32px] md:h-[48px]">
                  <div className="w-[30px] md:w-[40.5px] h-[26px] md:h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[8px] md:ml-[12px] font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#374151]">
                    Waitrose
                  </span>
                </div>

                {/* Co-op - Hidden on mobile */}
                <div className="hidden md:flex items-center h-[48px]">
                  <div className="w-[45px] h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Co-op
                  </span>
                </div>

                {/* Morrisons - Hidden on mobile and tablet */}
                <div className="hidden lg:flex items-center h-[48px]">
                  <div className="w-[40.5px] h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Morrisons
                  </span>
                </div>

                {/* Boots - Hidden on mobile and tablet */}
                <div className="hidden lg:flex items-center h-[48px]">
                  <div className="w-[40.5px] h-[36px] bg-[#374151] rounded" />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Boots
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
