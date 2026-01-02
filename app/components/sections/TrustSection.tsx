import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="w-full bg-white flex flex-col items-start px-[104px] py-[96px] font-['Inter']">
      <div className="self-stretch rounded-[24px] bg-[#cffafe] flex items-center justify-center p-[64px] gap-[48px]">
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-start gap-[16px]">
          {/* Heading */}
          <div className="self-stretch flex flex-col items-start">
            <b className="w-[417.9px] relative text-[36px] leading-[40px] text-[#1e293b] flex items-center">
              Your trust is our priority
            </b>
          </div>

          {/* Description */}
          <div className="self-stretch flex flex-col items-start pb-[16px]">
            <div className="w-[525.6px] relative text-[18px] leading-[28px] text-[#374151] flex items-center">
              We are committed to protecting your data and ensuring every
              <br />
              transaction is secure. Our dedicated fraud and security teams
              <br />
              work around the clock to keep your account safe, so you can
              <br />
              shop with complete peace of mind.
            </div>
          </div>

          {/* Learn More Button */}
          <Link
            href="#"
            className="rounded-full bg-[#1e293b] flex items-start px-[32px] py-[12px] text-[16px] text-white hover:bg-[#334155] transition-colors"
          >
            <b className="h-[24px] w-[88.5px] relative leading-[24px] flex items-center flex-shrink-0">
              Learn more
            </b>
          </Link>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-start justify-center">
          <img
            src="/images/your-trust-is-our-priority.png"
            alt="Your trust is our priority"
            className="h-[256px] w-[256px] object-cover max-w-[528px]"
          />
        </div>
      </div>
    </section>
  );
}

