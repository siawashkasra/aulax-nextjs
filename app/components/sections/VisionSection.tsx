import Image from "next/image";
import Link from "next/link";

export default function VisionSection() {
  return (
    <section
      className="px-[104px] py-[96px] relative"
      style={{
        backgroundImage:
          "linear-gradient(151.19deg, rgba(161, 255, 194, 0.2) 0%, rgba(207, 250, 254, 0.3) 100%)",
      }}
    >
      {/* Main Container - two columns with gap-64px */}
      <div className="flex gap-[64px] items-center justify-center w-full">
        {/* Left Column - Content */}
        <div className="flex-1 relative h-[563.5px]">
          {/* Our Vision Badge */}
          <div className="absolute top-0 left-0">
            <div className="bg-[rgba(144,238,144,0.3)] px-[16px] py-[8px] rounded-full">
              <span className="font-semibold text-[14px] leading-[20px] text-[#1e293b]">
                Our Vision
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="absolute top-[60px] left-0">
            <h2 className="font-bold text-[48px] leading-[48px] text-[#1e293b]">
              Revolutionising the local
              <br />
              marketplace
            </h2>
          </div>

          {/* First Paragraph */}
          <div className="absolute top-[180px] left-0">
            <p className="font-normal text-[18px] leading-[29.25px] text-[#374151] max-w-[577px]">
              Aulax is redefining the local marketplace through a ubiquitous
              connected experience that bridges people and businesses, creating
              more convenient and personalised shopping journeys.
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="absolute top-[283.75px] left-0">
            <p className="font-normal text-[18px] leading-[29.25px] text-[#374151] max-w-[553px]">
              It empowers shoppers to find the right value while enabling local
              businesses to understand and serve their customers with greater
              care and personalisation.
            </p>
          </div>

          {/* Become a Partner Button */}
          <div className="absolute top-[411.5px] left-0">
            <Link
              href="#partner"
              className="inline-block bg-[#1e293b] px-[32px] py-[16px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#334155] transition-colors"
            >
              <span className="font-bold text-[18px] leading-[28px] text-white">
                Become a Partner
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="absolute top-[503.5px] left-0 flex gap-[24px] items-start justify-center">
            {/* Stat 1 - Local Businesses */}
            <div className="flex flex-col gap-[4px] w-[178.66px]">
              <span className="font-bold text-[30px] leading-[36px] text-[#006a4e]">
                100+
              </span>
              <span className="font-normal text-[14px] leading-[20px] text-[#4b5563]">
                Local Businesses
              </span>
            </div>

            {/* Stat 2 - Active Shoppers */}
            <div className="flex flex-col gap-[4px] w-[178.67px]">
              <span className="font-bold text-[30px] leading-[36px] text-[#006a4e]">
                150+
              </span>
              <span className="font-normal text-[14px] leading-[20px] text-[#4b5563]">
                Active Shoppers
              </span>
            </div>

            {/* Stat 3 - Satisfaction Rate */}
            <div className="flex flex-col gap-[4px] w-[178.67px]">
              <span className="font-bold text-[30px] leading-[36px] text-[#006a4e]">
                99%
              </span>
              <span className="font-normal text-[14px] leading-[20px] text-[#4b5563]">
                Satisfaction Rate
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 relative">
          {/* Main Image Container */}
          <div className="relative w-full h-[600px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/vision-section.png"
              alt="Our Vision - Revolutionising the local marketplace"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right blur decoration */}
          <div
            className="absolute -bottom-[24px] -right-[24px] w-[128px] h-[128px] rounded-[24px] bg-[#90ee90] opacity-50"
            style={{ filter: "blur(20px)" }}
          />

          {/* Top-left blur decoration */}
          <div
            className="absolute -top-[24px] -left-[24px] w-[160px] h-[160px] rounded-full bg-[#cffafe] opacity-40"
            style={{ filter: "blur(20px)" }}
          />
        </div>
      </div>
    </section>
  );
}
