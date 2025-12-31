import Image from "next/image";
import Link from "next/link";

// Checkmark Icon
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#006a4e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16.667 5L7.5 14.167 3.333 10" />
  </svg>
);

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

interface FeatureCardProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft: boolean;
}

function FeatureCard({
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  imageOnLeft,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col ${
        imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-[24px] md:gap-[32px] lg:gap-[48px]`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[12px] md:gap-[16px]">
        <h3 className="font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] text-[#1e293b]">
          {title}
        </h3>
        <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563]">
          {description}
        </p>
        <ul className="flex flex-col gap-[8px] md:gap-[12px]">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-[8px] md:gap-[12px]">
              <span className="flex-shrink-0">
                <CheckIcon />
              </span>
              <span className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhyAulaxSection() {
  const features = [
    {
      title: "Shop Smarter, Faster",
      description:
        "Find exactly what you need from local stores. Search for products, compare prices, and check availability—all in one place.",
      points: [
        "Real-time inventory updates",
        "Price comparison tools",
        "Personalised recommendations",
      ],
      imageSrc: "/images/shop-smarter.jpg",
      imageAlt: "Person shopping with smartphone showing Aulax app",
      imageOnLeft: true,
    },
    {
      title: "Exclusive Deals & Offers",
      description:
        "Unlock exclusive deals from your favourite local shops. Save money while supporting businesses in your community.",
      points: [
        "Daily deals and discounts",
        "Loyalty rewards programme",
        "Flash sales notifications",
      ],
      imageSrc: "/images/exclusive-deals.jpg",
      imageAlt: "Special offers and discount cards",
      imageOnLeft: false,
    },
    {
      title: "Discover Hidden Gems",
      description:
        "Explore unique local businesses you never knew existed. From artisan bakeries to vintage boutiques—find your new favourites.",
      points: [
        "Curated local business guides",
        "User reviews and ratings",
        "Map-based discovery",
      ],
      imageSrc: "/images/hidden-gems.jpg",
      imageAlt: "Charming local boutique storefront",
      imageOnLeft: true,
    },
    {
      title: "Earn Rewards Every Visit",
      description:
        "Get rewarded for shopping local. Earn points with every purchase and redeem them for exclusive perks and discounts.",
      points: [
        "Points-based rewards system",
        "Tiered membership benefits",
        "Exclusive member events",
      ],
      imageSrc: "/images/earn-rewards.jpg",
      imageAlt: "Customer receiving rewards points",
      imageOnLeft: false,
    },
  ];

  return (
    <section
      id="why-aulax"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] mb-[48px] md:mb-[64px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-[8px] bg-[rgba(144,238,144,0.3)] px-[12px] py-[6px] rounded-full">
            <span className="font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#006a4e]">
              Why Aulax?
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[672px] text-center">
            <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b]">
              User Benefits
            </h2>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-[48px] md:gap-[64px] lg:gap-[96px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Sustainability Banner */}
        <div className="mt-[48px] md:mt-[64px] lg:mt-[96px] relative rounded-[16px] md:rounded-[24px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/sustainability-banner.jpg"
              alt="Sustainable local shopping"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#006a4e]/90 to-[#006a4e]/70" />
          </div>

          <div className="relative z-10 p-[24px] md:p-[48px] lg:p-[64px] flex flex-col lg:flex-row items-center gap-[24px] md:gap-[32px]">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-[28px] md:leading-[36px] lg:leading-[40px] text-white mb-[12px] md:mb-[16px]">
                Shop Local, Shop Sustainable
              </h3>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] text-white/90 max-w-[600px]">
                Every local purchase reduces carbon emissions, supports your
                community, and helps create a more sustainable future for
                everyone.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="#download"
                className="inline-block bg-white text-[#006a4e] font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-full hover:bg-gray-100 transition-colors"
              >
                Start Shopping Local
              </Link>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-[48px] md:mt-[64px] lg:mt-[96px] flex flex-col items-center gap-[24px] md:gap-[32px]">
          <div className="text-center">
            <h3 className="font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] text-[#1e293b] mb-[8px] md:mb-[12px]">
              Download Aulax Today
            </h3>
            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
              Join thousands of shoppers discovering their local marketplace
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[12px] sm:gap-[16px]">
            {/* App Store */}
            <Link
              href="#"
              className="flex items-center bg-black px-[16px] py-[10px] md:py-[12px] rounded-[8px] hover:bg-gray-900 transition-colors"
            >
              <div className="w-[18px] h-[24px]">
                <AppleIcon />
              </div>
              <div className="ml-[8px]">
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white">
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
              className="flex items-center bg-black px-[16px] py-[10px] md:py-[12px] rounded-[8px] hover:bg-gray-900 transition-colors"
            >
              <div className="w-[20px] h-[20px]">
                <GooglePlayIcon />
              </div>
              <div className="ml-[8px]">
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white">
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
    </section>
  );
}
