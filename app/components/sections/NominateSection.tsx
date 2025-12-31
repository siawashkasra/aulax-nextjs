import Link from "next/link";

// Icons
const StoreIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const GiftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </svg>
);

export default function NominateSection() {
  return (
    <section
      id="nominate"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(151deg, rgba(161, 255, 194, 0.20) 1.44%, rgba(207, 250, 254, 0.30) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[48px] lg:gap-[64px]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-[24px] md:gap-[32px]">
            {/* Header */}
            <div className="flex flex-col gap-[12px] md:gap-[16px]">
              <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b]">
                Know a Great Local Shop?
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563] max-w-[600px]">
                Help your favourite local businesses get discovered. Nominate
                them to join Aulax and we&apos;ll reach out to bring them on
                board.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              {/* Feature 1 */}
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-[12px] md:rounded-[16px] bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <StoreIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1e293b]">
                    Support Local Shops
                  </h4>
                  <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
                    Help your community&apos;s best businesses get the
                    visibility they deserve.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-[12px] md:rounded-[16px] bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <HeartIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1e293b]">
                    Share the Love
                  </h4>
                  <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
                    Your recommendations help fellow shoppers discover amazing
                    local finds.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-[12px] md:gap-[16px]">
                <div className="flex-shrink-0 w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-[12px] md:rounded-[16px] bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
                  <GiftIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#1e293b]">
                    Earn Rewards
                  </h4>
                  <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
                    Get rewarded when businesses you nominate join the Aulax
                    platform.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="#nominate-form"
                className="inline-flex items-center gap-[8px] bg-[#006a4e] text-white font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-full hover:bg-[#005540] transition-colors"
              >
                Nominate a Business
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

          {/* Right Side - Stats Card */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="bg-white rounded-[16px] md:rounded-[24px] p-[24px] md:p-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-[24px] md:gap-[32px]">
                {/* Stat 1 */}
                <div className="text-center">
                  <p className="font-bold text-[36px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#006a4e]">
                    500+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Local Shops Nominated
                  </p>
                </div>

                <div className="h-[1px] bg-[#e5e7eb]" />

                {/* Stat 2 */}
                <div className="text-center">
                  <p className="font-bold text-[36px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#006a4e]">
                    350+
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Successfully Onboarded
                  </p>
                </div>

                <div className="h-[1px] bg-[#e5e7eb]" />

                {/* Stat 3 */}
                <div className="text-center">
                  <p className="font-bold text-[36px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#006a4e]">
                    70%
                  </p>
                  <p className="font-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
                    Conversion Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
