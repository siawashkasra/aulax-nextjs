import Image from "next/image";
import Link from "next/link";

// Checkmark Icon - matches Figma exactly
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

// Feature icons
const ShopIcon = () => (
  <svg width="37.5" height="30" viewBox="0 0 38 30" fill="white">
    <path d="M34 10V28C34 29.1 33.1 30 32 30H6C4.9 30 4 29.1 4 28V10" />
    <path d="M38 0H0V10C0 12.21 1.79 14 4 14C6.21 14 8 12.21 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 12.21 17.79 14 20 14C22.21 14 24 12.21 24 10C24 12.21 25.79 14 28 14C30.21 14 32 12.21 32 10C32 12.21 33.79 14 36 14C38.21 14 40 12.21 40 10V0H38Z" />
  </svg>
);

const OffersIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
    <path d="M15 0L0 15L15 30L30 15L15 0ZM15 3L27 15L15 27L3 15L15 3Z" />
    <circle cx="15" cy="15" r="6" />
  </svg>
);

const MapIcon = () => (
  <svg width="33.75" height="30" viewBox="0 0 34 30" fill="white">
    <path d="M0 2.5V27.5L11.25 22.5L22.5 27.5L33.75 22.5V-2.5L22.5 2.5L11.25 -2.5L0 2.5ZM22.5 22.5L11.25 17.5V2.5L22.5 7.5V22.5Z" />
  </svg>
);

const RewardsIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
    <path d="M15 0L19.5 10.5L30 12L22.5 19.5L24 30L15 24.5L6 30L7.5 19.5L0 12L10.5 10.5L15 0Z" />
  </svg>
);

const LeafIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="#1e293b">
    <path d="M27 3C27 3 24 0 15 0C6 0 3 6 3 15C3 24 9 27 9 27C9 27 6 18 15 15C24 12 27 3 27 3Z" />
    <path d="M3 27L15 15" stroke="#1e293b" strokeWidth="2" />
  </svg>
);

export default function WhyAulaxSection() {
  return (
    <section
      id="why-aulax"
      className="bg-white px-[80px] py-[96px]"
    >
      <div className="max-w-[1280px] mx-auto px-[24px]">
        {/* Header Section */}
        <div className="relative h-[152px] mb-[64px]">
          {/* Why Aulax? Badge - centered */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="bg-[rgba(144,238,144,0.3)] px-[16px] py-[8px] rounded-full">
              <span className="font-semibold text-[14px] leading-[20px] text-[#1e293b] text-center">
                Why Aulax?
              </span>
            </div>
          </div>

          {/* User Benefits Heading - centered */}
          <div className="absolute top-[60px] left-0 right-0 flex justify-center">
            <h2 className="font-bold text-[48px] leading-[48px] text-[#1e293b] text-center">
              User Benefits
            </h2>
          </div>

          {/* Subtitle - centered */}
          <div className="absolute top-[124px] left-[232px] right-[232px] flex justify-center">
            <p className="font-normal text-[18px] leading-[28px] text-[#4b5563] text-center">
              Experience smarter, faster, and more personalized local shopping
            </p>
          </div>
        </div>

        {/* Feature Cards Container */}
        <div className="flex flex-col gap-[128px]">
          {/* Feature 1 - Shop Smarter, Faster (Image Left) */}
          <div className="flex gap-[64px] items-center justify-center">
            {/* Image */}
            <div className="flex-1 h-[500px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/shop-smarter.jpg"
                  alt="Person checking product availability on smartphone in a local store aisle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Icon */}
              <div className="w-[64px] h-[64px] bg-[#006a4e] rounded-[16px] flex items-center justify-center">
                <ShopIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-[36px] leading-[40px] text-[#1e293b]">
                Shop Smarter, Faster
              </h3>

              {/* Description */}
              <p className="font-normal text-[20px] leading-[32.5px] text-[#374151]">
                Check stock before you go and order ahead so your items
                are ready when you arrive. No more wasted trips or waiting in
                line just grab and go!
              </p>

              {/* List */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Real-time inventory checking
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Order ahead for quick pickup
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Skip the lines and save time
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Offers Just for You (Image Right) */}
          <div className="flex gap-[64px] items-center justify-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Icon */}
              <div className="w-[64px] h-[64px] bg-[#006a4e] rounded-[16px] flex items-center justify-center">
                <OffersIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-[36px] leading-[40px] text-[#1e293b]">
                Exclusive Offers
              </h3>

              {/* Description */}
              <p className="font-normal text-[20px] leading-[32.5px] text-[#374151]">
                Get personalized deals and rewards from your favorite local
                shops. The more you shop, the better the offers—tailored to
                what you love!
              </p>

              {/* List */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Exclusive personalized discounts
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Loyalty rewards that grow with you
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Flash deals from favorite stores
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 h-[500px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/offers.jpg"
                  alt="Mobile phone screen displaying personalized shopping offers and deals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Discover Local Gems (Image Left) */}
          <div className="flex gap-[64px] items-center justify-center">
            {/* Image */}
            <div className="flex-1 h-[500px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/discover-gems.jpg"
                  alt="Overhead view of a neighborhood map with colorful pins marking local shops"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Icon */}
              <div className="w-[64px] h-[64px] bg-[#006a4e] rounded-[16px] flex items-center justify-center">
                <MapIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-[36px] leading-[40px] text-[#1e293b]">
                Discover Local Gems
              </h3>

              {/* Description */}
              <p className="font-normal text-[20px] leading-[32.5px] text-[#374151]">
                Find hidden treasures in your neighborhood with real insights
                from your community. Explore new shops, read authentic
                reviews, and support local businesses you&apos;ll love.
              </p>

              {/* List */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Discover hidden neighborhood shops
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Read authentic community reviews
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Support local businesses easily
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Earn Rewards Every Time (Image Right) */}
          <div className="flex gap-[64px] items-center justify-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Icon */}
              <div className="w-[64px] h-[64px] bg-[#006a4e] rounded-[16px] flex items-center justify-center">
                <RewardsIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-[36px] leading-[40px] text-[#1e293b]">
                Earn Rewards
              </h3>

              {/* Description */}
              <p className="font-normal text-[20px] leading-[32.5px] text-[#374151]">
                Collect cashback and loyalty rewards with every purchase.
                Track your earnings, redeem them at participating stores, and
                make every shopping trip more rewarding.
              </p>

              {/* List */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Cashback on every purchase
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Track all your rewards in one place
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-[4px]">
                    <CheckIcon />
                  </div>
                  <span className="ml-[12px] font-normal text-[18px] leading-[28px] text-[#374151]">
                    Redeem at participating stores
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 h-[500px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/earn-rewards.jpg"
                  alt="Digital wallet interface showing cashback rewards and points accumulation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sustainability Banner */}
          <div
            className="relative rounded-[24px] overflow-hidden px-[168px] py-[64px]"
            style={{
              background: "linear-gradient(to right, #006a4e, #1e293b)",
            }}
          >
            {/* Top-right decoration */}
            <div className="absolute -top-[128px] -right-[128px] w-[256px] h-[256px] rounded-full bg-[rgba(144,238,144,0.2)]" />
            {/* Bottom-left decoration */}
            <div className="absolute -bottom-[96px] -left-[96px] w-[192px] h-[192px] rounded-full bg-[rgba(144,238,144,0.2)]" />

            {/* Content */}
            <div className="relative flex flex-col gap-[24px] items-center max-w-[896px] mx-auto">
              {/* Icon */}
              <div className="w-[64px] h-[64px] bg-[#90ee90] rounded-[16px] flex items-center justify-center">
                <LeafIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-[36px] leading-[40px] text-white text-center">
                Shop Sustainably
              </h3>

              {/* Description */}
              <p className="font-normal text-[20px] leading-[32.5px] text-[#e5e7eb] text-center">
                Make eco-friendly choices with digital receipts and sustainability tracking. See the positive
                impact of supporting local businesses and help reduce waste in your community.
              </p>

              {/* Stats */}
              <div className="flex gap-[32px] items-start justify-center pt-[8px]">
                <div className="flex flex-col gap-[8px] items-center w-[234.66px]">
                  <span className="font-bold text-[48px] leading-[48px] text-[#90ee90] text-center">
                    100%
                  </span>
                  <span className="font-normal text-[16px] leading-[24px] text-[#d1d5db] text-center">
                    Digital Receipts
                  </span>
                </div>
                <div className="flex flex-col gap-[8px] items-center w-[234.67px]">
                  <span className="font-bold text-[48px] leading-[48px] text-[#90ee90] text-center">
                    85%
                  </span>
                  <span className="font-normal text-[16px] leading-[24px] text-[#d1d5db] text-center">
                    Waste Reduction
                  </span>
                </div>
                <div className="flex flex-col gap-[8px] items-center w-[234.67px]">
                  <span className="font-bold text-[48px] leading-[48px] text-[#90ee90] text-center">
                    Local
                  </span>
                  <span className="font-normal text-[16px] leading-[24px] text-[#d1d5db] text-center">
                    Community Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA Section */}
        <div className="flex flex-col gap-[24px] items-start pt-[16px] mt-[64px]">
          {/* Heading */}
          <div className="w-full flex justify-center">
            <h3 className="font-bold text-[30px] leading-[36px] text-[#1e293b] text-center">
              Ready to experience the future of local shopping?
            </h3>
          </div>

          {/* Buttons */}
          <div className="w-full flex items-center justify-center">
            <Link
              href="#download"
              className="bg-[#90ee90] px-[32px] py-[16px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#7de87d] transition-colors"
            >
              <span className="font-bold text-[18px] leading-[28px] text-[#1e293b] text-center">
                Download Aulax Now
              </span>
            </Link>
            <div className="ml-[16px]">
              <Link
                href="#learn-more"
                className="border-2 border-[#1e293b] px-[34px] py-[18px] rounded-full hover:bg-[#f1f5f9] transition-colors"
              >
                <span className="font-bold text-[18px] leading-[28px] text-[#1e293b] text-center">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
