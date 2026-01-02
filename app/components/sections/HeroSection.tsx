import Image from "next/image";
import Link from "next/link";

// Apple icon - matches Figma SVG exactly
const AppleIcon = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="white">
    <path d="M14.94 12.66c-.02-2.32 1.89-3.43 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.43-.14-2.79.84-3.52.84-.73 0-1.85-.82-3.04-.8-1.56.02-3 .91-3.81 2.31-1.62 2.82-.41 7 1.17 9.29.77 1.12 1.69 2.37 2.9 2.33 1.16-.05 1.6-.75 3.01-.75 1.4 0 1.8.75 3.02.73 1.25-.02 2.04-1.14 2.8-2.26.88-1.29 1.25-2.55 1.27-2.61-.03-.01-2.44-.94-2.46-3.72l.04-.05zM12.58 5.18c.64-.78 1.07-1.85.95-2.93-.92.04-2.03.61-2.69 1.38-.59.69-1.11 1.78-.97 2.83 1.02.08 2.07-.52 2.71-1.28z" />
  </svg>
);

// Google Play icon - matches Figma SVG exactly
const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" fill="white">
    <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" />
    <path d="M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32z" />
    <path d="M84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95z" />
    <path d="M449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="bg-white pt-[72px]">
      {/* Main Content Container - matches Figma px-[80px] */}
      <div className="relative px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          {/* Hero Content - Inner container with px-[24px] */}
          <div className="px-[24px]">
            {/* Heading Container - top padding 96px, gap 24px between elements */}
            <div className="flex flex-col items-center gap-[24px] pt-[96px]">
              {/* Main Heading - max-w-896px */}
              <div className="max-w-[896px] text-center">
                <h1 className="font-extrabold text-[60px] leading-[60px] text-[#1e293b]">
                  Connecting You to the Local
                  <br />
                  Marketplace
                </h1>
              </div>

              {/* Subtitle - max-w-672px */}
              <div className="max-w-[672px] text-center">
                <p className="font-normal text-[18px] leading-[28px] text-[#4b5563]">
                  Explore your local market with excitement! Aulax makes it easy and fun to
                  discover nearby shops and amazing deals at your favourite stores.
                </p>
              </div>

              {/* CTA Button Container - pt-16px */}
              <div className="pt-[16px]">
                <Link
                  href="#contact"
                  className="inline-block bg-[#90ee90] px-[32px] py-[12px] rounded-full font-bold text-[18px] leading-[28px] text-[#1e293b] text-center hover:bg-[#7de87d] transition-colors"
                >
                  Let&apos;s talk now!
                </Link>
              </div>
            </div>

            {/* Hero Image Container - mt calculated to position at 436px from section top */}
            <div className="mt-[48px]">
              <div className="relative w-full h-[500px] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/A vibrant, multicultural group of friends shopping at a bustling outdoor local market, smiling and interacting with vendors, cinematic style.png"
                  alt="A vibrant, multicultural group of friends shopping at a bustling outdoor local market"
                  fill
                  className="object-cover"
                  priority
                />

                {/* App Store Badges - positioned at bottom-32px, centered */}
                <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex items-center">
                  {/* App Store */}
                  <Link
                    href="#"
                    className="flex items-center bg-black px-[16px] py-[8px] rounded-[8px] hover:bg-[#333] transition-colors"
                  >
                    <div className="w-[18px] h-[24px]">
                      <AppleIcon />
                    </div>
                    <div className="ml-[8px]">
                      <p className="font-normal text-[12px] leading-[16px] text-white">
                        Download on the
                      </p>
                      <p className="font-semibold text-[18px] leading-[28px] text-white">
                        App Store
                      </p>
                    </div>
                  </Link>

                  {/* Google Play - ml-16px gap */}
                  <Link
                    href="#"
                    className="flex items-center bg-black px-[16px] py-[8px] rounded-[8px] ml-[16px] hover:bg-[#333] transition-colors"
                  >
                    <div className="w-[20px] h-[20px]">
                      <GooglePlayIcon />
                    </div>
                    <div className="ml-[8px]">
                      <p className="font-normal text-[12px] leading-[16px] text-white">
                        GET IT ON
                      </p>
                      <p className="font-semibold text-[18px] leading-[28px] text-white">
                        Google Play
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Brand Logos Section - mt-64px, gap-32px between text and logos */}
            <div className="mt-[64px] pb-[96px]">
              <p className="text-center font-semibold text-[14px] leading-[20px] text-[#6b7280] uppercase tracking-[0.35px] mb-[32px]">
                Trusted by leading UK businesses
              </p>

              {/* Brand logos container - gap-48px, opacity-60, grayscale */}
              <div className="flex items-center justify-center gap-[48px] opacity-60 grayscale">
                {/* Tesco */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/tesco.svg"
                    alt="Tesco"
                    width={27}
                    height={36}
                    className="object-contain"
                  />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Tesco
                  </span>
                </div>

                {/* Sainsbury's */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/sainsbury's.svg"
                    alt="Sainsbury's"
                    width={40}
                    height={36}
                    className="object-contain"
                  />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Sainsbury&apos;s
                  </span>
                </div>

                {/* Waitrose */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/waitrose.svg"
                    alt="Waitrose"
                    width={40}
                    height={36}
                    className="object-contain"
                  />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Waitrose
                  </span>
                </div>

                {/* Co-op */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/co-up.svg"
                    alt="Co-op"
                    width={45}
                    height={36}
                    className="object-contain"
                  />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Co-op
                  </span>
                </div>

                {/* Morrisons */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/morrisons.svg"
                    alt="Morrisons"
                    width={40}
                    height={36}
                    className="object-contain"
                  />
                  <span className="ml-[12px] font-bold text-[24px] leading-[32px] text-[#374151]">
                    Morrisons
                  </span>
                </div>

                {/* Boots */}
                <div className="flex items-center h-[48px]">
                  <Image
                    src="/icons/SVG (6).svg"
                    alt="Boots"
                    width={40}
                    height={36}
                    className="object-contain"
                  />
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
