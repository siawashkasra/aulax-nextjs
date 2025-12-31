import Link from "next/link";

// Icons
const EyeIcon = () => (
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
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChartIcon = () => (
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
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const TrendingIcon = () => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const SettingsIcon = () => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
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

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

function FeatureBlock({ icon, title, description, points }: FeatureBlockProps) {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[16px]">
      <div className="w-[44px] md:w-[56px] h-[44px] md:h-[56px] rounded-[12px] md:rounded-[16px] bg-[rgba(144,238,144,0.3)] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#1e293b] mb-[6px] md:mb-[8px]">
          {title}
        </h3>
        <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#4b5563] mb-[12px] md:mb-[16px]">
          {description}
        </p>
        <ul className="flex flex-col gap-[6px] md:gap-[8px]">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-[8px] md:gap-[10px]">
              <span className="flex-shrink-0">
                <CheckIcon />
              </span>
              <span className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#374151]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ForBusinessSection() {
  const features: FeatureBlockProps[] = [
    {
      icon: <EyeIcon />,
      title: "Increase Visibility",
      description:
        "Get discovered by thousands of local shoppers actively searching for businesses like yours.",
      points: [
        "Featured in local searches",
        "Appear in curated collections",
        "Boost with promoted listings",
      ],
    },
    {
      icon: <ChartIcon />,
      title: "Understand Customers",
      description:
        "Gain powerful insights into customer behaviour, preferences, and shopping patterns.",
      points: [
        "Real-time analytics dashboard",
        "Customer demographics",
        "Peak shopping times",
      ],
    },
    {
      icon: <TrendingIcon />,
      title: "Boost Sales",
      description:
        "Drive more foot traffic and increase revenue with targeted promotions and offers.",
      points: [
        "Create flash sales",
        "Loyalty programmes",
        "Exclusive member deals",
      ],
    },
    {
      icon: <SettingsIcon />,
      title: "Simplify Operations",
      description:
        "Manage your business presence effortlessly with our intuitive tools and dashboard.",
      points: [
        "Easy product management",
        "Automated inventory sync",
        "Order management",
      ],
    },
    {
      icon: <HeartIcon />,
      title: "Build Customer Loyalty",
      description:
        "Create lasting relationships with customers through personalised experiences and rewards.",
      points: [
        "Customer messaging",
        "Feedback collection",
        "Repeat customer tracking",
      ],
    },
  ];

  return (
    <section
      id="for-business"
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] mb-[48px] md:mb-[64px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-[8px] bg-[rgba(144,238,144,0.3)] px-[12px] py-[6px] rounded-full">
            <span className="font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#006a4e]">
              For Business Owners
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[672px] text-center">
            <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#1e293b]">
              Everything You Need to Grow
            </h2>
          </div>

          <p className="text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4b5563] max-w-[600px]">
            Powerful tools designed specifically for local businesses to
            thrive in the digital age.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px] lg:gap-[48px] mb-[48px] md:mb-[64px]">
          {features.map((feature, index) => (
            <FeatureBlock key={index} {...feature} />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-[16px] md:rounded-[24px] p-[24px] md:p-[32px] lg:p-[48px]"
          style={{
            background:
              "linear-gradient(135deg, #006a4e 0%, #004d38 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[24px] md:gap-[32px]">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-[28px] md:leading-[36px] lg:leading-[40px] text-white mb-[8px] md:mb-[12px]">
                Ready to Grow Your Business?
              </h3>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] text-white/90">
                Join Aulax today and reach thousands of local shoppers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
              <Link
                href="#partner"
                className="inline-block bg-white text-[#006a4e] font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Get Started Free
              </Link>
              <Link
                href="#contact"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-full hover:bg-white/10 transition-colors text-center"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="mt-[48px] md:mt-[64px] grid grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[24px]">
          {/* Card 1 */}
          <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px] text-center">
            <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
              £0
            </p>
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
              Setup Fee
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px] text-center">
            <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
              24/7
            </p>
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
              Support
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px] text-center">
            <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
              5 min
            </p>
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
              Setup Time
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f9fafb] rounded-[12px] md:rounded-[16px] p-[16px] md:p-[24px] text-center">
            <p className="font-bold text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#006a4e]">
              40%
            </p>
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280] mt-[4px] md:mt-[8px]">
              Avg. Sales Increase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
