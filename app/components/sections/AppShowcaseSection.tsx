import Image from "next/image";
import Link from "next/link";

// Verified Local Businesses icon
const VerifiedIcon = () => (
  <svg width="22.5" height="20" viewBox="0 0 23 20" fill="white">
    <path d="M11.25 0L13.5 2.5H18.75V7.5L21.25 10L18.75 12.5V17.5H13.5L11.25 20L9 17.5H3.75V12.5L1.25 10L3.75 7.5V2.5H9L11.25 0ZM9.75 13.75L16.5 7L15.25 5.75L9.75 11.25L7.25 8.75L6 10L9.75 13.75Z" />
  </svg>
);

// Secure Payment icon
const SecureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
    <path d="M10 0L2 3.5V9.16667C2 14.2917 5.44 19.0667 10 20C14.56 19.0667 18 14.2917 18 9.16667V3.5L10 0ZM8.5 14.1667L4.75 10.4167L6.175 9L8.5 11.3333L13.825 6L15.25 7.41667L8.5 14.1667Z" />
  </svg>
);

// Community Rated icon
const CommunityIcon = () => (
  <svg width="22.5" height="20" viewBox="0 0 23 20" fill="white">
    <path d="M11.25 0L14.5 6.5L22.5 7.5L16.875 12.5L18.25 20L11.25 16.5L4.25 20L5.625 12.5L0 7.5L8 6.5L11.25 0Z" />
  </svg>
);

export default function AppShowcaseSection() {
  return (
    <section className="bg-white px-0 py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        {/* Main Content - Two feature blocks */}
        <div className="flex flex-col gap-[80px]">
          {/* Feature 1 - Single hub */}
          <div className="flex gap-[48px] items-center justify-center">
            {/* Left - Image */}
            <div className="flex-1 h-[384px] rounded-[16px] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#90ee90] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-[14px]">
                  Shopping Dashboard Image
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 flex flex-col gap-[16px]">
              <h3 className="font-bold text-[30px] leading-[36px] text-[#1e293b]">
                A single hub for all your local shopping
              </h3>

              <p className="font-normal text-[18px] leading-[28px] text-[#4b5563]">
                Connect with your favorite local stores, manage orders, and
                discover new products seamlessly. Aulax brings the entire
                marketplace to your fingertips, making every shopping trip
                simple and enjoyable.
              </p>

              <div className="flex items-center gap-[20.5px] pt-[16px]">
                <Link
                  href="#"
                  className="inline-block bg-[#90ee90] text-[#1e293b] font-bold text-[16px] leading-[24px] px-[24px] py-[10px] rounded-full hover:bg-[#7de47d] transition-colors"
                >
                  Open an account
                </Link>
                <Link
                  href="#"
                  className="inline-block font-bold text-[16px] leading-[24px] text-[#1e293b] hover:underline"
                >
                  Explore features
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2 - Recommendations */}
          <div className="relative h-[384px]">
            {/* Left - Content */}
            <div className="absolute left-0 top-[96px] w-[calc(50%-24px)] flex flex-col gap-[16px]">
              <h3 className="font-bold text-[30px] leading-[36px] text-[#1e293b]">
                Get recommendations tailored for you
              </h3>

              <p className="font-normal text-[18px] leading-[28px] text-[#4b5563]">
                Our smart engine learns your preferences to suggest products and
                businesses you&apos;ll love. Enjoy a truly personalized
                experience that helps you find hidden gems in your community.
              </p>

              <div className="pt-[6px]">
                <Link
                  href="#"
                  className="inline-block bg-[#90ee90] text-[#1e293b] font-bold text-[16px] leading-[24px] px-[24px] py-[10px] rounded-full hover:bg-[#7de47d] transition-colors"
                >
                  Discover your feed
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="absolute right-0 top-0 w-[calc(50%-24px)] h-[384px] rounded-[16px] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#cffafe] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-[14px]">
                  Person Using App Image
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-[32px] items-start justify-center mt-[80px]">
          {/* Verified Local Businesses */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[#006a4e] flex items-center justify-center">
              <VerifiedIcon />
            </div>
            <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b] text-center mt-[16px]">
              Verified Local Businesses
            </h4>
            <p className="font-normal text-[16px] leading-[24px] text-[#4b5563] text-center mt-[4px]">
              We partner with trusted local sellers.
            </p>
          </div>

          {/* Secure Payment Network */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[#006a4e] flex items-center justify-center">
              <SecureIcon />
            </div>
            <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b] text-center mt-[16px]">
              Secure Payment Network
            </h4>
            <p className="font-normal text-[16px] leading-[24px] text-[#4b5563] text-center mt-[4px]">
              Your transactions are encrypted and safe.
            </p>
          </div>

          {/* Community Rated */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[#006a4e] flex items-center justify-center">
              <CommunityIcon />
            </div>
            <h4 className="font-bold text-[16px] leading-[24px] text-[#1e293b] text-center mt-[16px]">
              Community Rated
            </h4>
            <p className="font-normal text-[16px] leading-[24px] text-[#4b5563] text-center mt-[4px]">
              Read reviews from shoppers like you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
