import Link from "next/link";

// Checkmark icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.667 5L7.5 14.167 3.333 10"
      stroke="#006a4e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow icon
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function NominateSection() {
  return (
    <section className="px-[80px] py-[96px] bg-white">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="flex gap-[64px] items-center justify-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-[24px]">
            {/* Heading */}
            <h2 className="font-bold text-[48px] leading-[48px] text-[#1e293b]">
              Know a Great Local
              <br />
              Business?
            </h2>

            {/* Description */}
            <p className="font-normal text-[20px] leading-[32.5px] text-[#374151] max-w-[580px]">
              Help your favourite local businesses get discovered. Nominate them
              to join Aulax and we&apos;ll reach out to bring them on board.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start">
                <div className="pt-[4px]">
                  <CheckIcon />
                </div>
                <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                  Support Local Shops
                </span>
              </div>
              <div className="flex items-start">
                <div className="pt-[4px]">
                  <CheckIcon />
                </div>
                <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                  Share the Love
                </span>
              </div>
              <div className="flex items-start">
                <div className="pt-[4px]">
                  <CheckIcon />
                </div>
                <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                  Earn Rewards
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="#nominate-form"
                className="inline-flex items-center gap-[8px] bg-[#006a4e] text-white font-bold text-[18px] leading-[28px] px-[32px] py-[16px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#005a42] transition-colors"
              >
                Nominate a Business
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="flex-1">
            <div
              className="rounded-[24px] p-[48px] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #006a4e 0%, #1e293b 100%)",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-[-64px] right-[-64px] w-[192px] h-[192px] rounded-full bg-[rgba(144,238,144,0.2)]" />
              <div className="absolute bottom-[-48px] left-[-48px] w-[128px] h-[128px] rounded-full bg-[rgba(144,238,144,0.2)]" />

              {/* Stats Content */}
              <div className="relative z-10 flex flex-col gap-[32px]">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-[24px]">
                  {/* Stat 1 */}
                  <div className="flex flex-col gap-[8px] items-center">
                    <span className="font-bold text-[48px] leading-[48px] text-[#90ee90]">
                      500+
                    </span>
                    <span className="font-normal text-[14px] leading-[20px] text-[#d1d5db] text-center">
                      Local Shops
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col gap-[8px] items-center">
                    <span className="font-bold text-[48px] leading-[48px] text-[#90ee90]">
                      2,000+
                    </span>
                    <span className="font-normal text-[14px] leading-[20px] text-[#d1d5db] text-center">
                      Nominations
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col gap-[8px] items-center">
                    <span className="font-bold text-[48px] leading-[48px] text-[#90ee90]">
                      85%
                    </span>
                    <span className="font-normal text-[14px] leading-[20px] text-[#d1d5db] text-center">
                      Success Rate
                    </span>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="bg-[rgba(255,255,255,0.1)] rounded-[16px] p-[16px]">
                  <p className="font-normal text-[16px] leading-[24px] text-[#e5e7eb] text-center">
                    Help us grow the Aulax community by nominating your favourite local businesses!
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
