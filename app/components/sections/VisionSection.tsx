import Image from "next/image";
import Link from "next/link";

export default function VisionSection() {
  return (
    <section
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(151deg, rgba(161, 255, 194, 0.20) 1.44%, rgba(207, 250, 254, 0.30) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Vision Content */}
        <div className="flex flex-col gap-[48px] md:gap-[64px]">
          {/* Top Section - Badge and Header */}
          <div className="flex flex-col items-center gap-[16px] md:gap-[24px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-[8px] bg-[rgba(144,238,144,0.3)] px-[12px] py-[6px] rounded-full">
              <span className="font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#006a4e]">
                Our Vision
              </span>
            </div>

            {/* Heading */}
            <div className="max-w-[896px] text-center">
              <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b]">
                Empowering Local Commerce
                <br className="hidden sm:block" />
                with Technology
              </h2>
            </div>
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[64px]">
            {/* Left Side - Stats */}
            <div className="flex flex-col gap-[24px] md:gap-[32px] w-full lg:w-auto lg:flex-1 order-2 lg:order-1">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-[16px] md:gap-[24px]">
                {/* Stat 1 */}
                <div className="bg-white rounded-[16px] md:rounded-[24px] p-[16px] md:p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                  <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
                    1,000+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Local Businesses
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-[16px] md:rounded-[24px] p-[16px] md:p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                  <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
                    50K+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Active Users
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-[16px] md:rounded-[24px] p-[16px] md:p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                  <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
                    £2M+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Savings for Shoppers
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-[16px] md:rounded-[24px] p-[16px] md:p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                  <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
                    10+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    UK Cities
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Decorations */}
            <div className="relative w-full lg:w-[580px] aspect-[4/3] order-1 lg:order-2">
              {/* Background Blur Decorations */}
              <div
                className="absolute -top-[40px] md:-top-[80px] -right-[40px] md:-right-[80px] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(144, 238, 144, 0.5) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute -bottom-[30px] md:-bottom-[60px] -left-[30px] md:-left-[60px] w-[80px] md:w-[150px] h-[80px] md:h-[150px] rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(207, 250, 254, 0.8) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Main Image */}
              <div className="relative w-full h-full rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/vision-local-shop.jpg"
                  alt="A warm, inviting local shop interior with wooden shelves displaying products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="flex flex-col items-center gap-[16px] md:gap-[24px]">
            <p className="text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563] max-w-[600px]">
              Join the movement to support local businesses and create a more
              sustainable shopping experience for everyone.
            </p>
            <Link
              href="#partner"
              className="inline-flex items-center gap-[8px] bg-[#006a4e] text-white px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-full font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] hover:bg-[#005540] transition-colors"
            >
              Become a Partner
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
