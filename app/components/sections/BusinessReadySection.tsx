import Link from "next/link";

export default function BusinessReadySection() {
  return (
    <section className="w-full bg-[#eaffe2] flex flex-col items-start px-[80px] py-[96px] font-['Inter']">
      <div className="w-full flex items-center justify-center px-[24px] gap-[48px] max-w-[1280px] mx-auto">
        {/* Image Container */}
        <div className="flex-1 flex items-start justify-center">
          <img
            src="/images/business-illustration.png"
            alt="Various business types illustration"
            className="self-stretch w-[448px] max-w-[448px] max-h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col items-start gap-[16px]">
          {/* Heading */}
          <div className="self-stretch flex flex-col items-start">
            <b className="w-[572.6px] relative text-[36px] leading-[40px] text-[#1e293b] flex items-center">
              Ready for businesses of all sizes
            </b>
          </div>

          {/* Description */}
          <div className="self-stretch flex flex-col items-start pb-[16px]">
            <div className="w-[581.7px] relative text-[18px] leading-[28px] text-[#374151] flex items-center">
              Connect with more customers in your area and grow your business.
              <br />
              Join hundreds of local entrepreneurs who use Aulax to manage their
              <br />
              presence and serve their community with care.
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#"
            className="rounded-full bg-[#1e293b] flex items-start px-[32px] py-[12px] text-[16px] text-white hover:bg-[#334155] transition-colors"
          >
            <b className="h-[24px] w-[182.6px] relative leading-[24px] flex items-center flex-shrink-0">
              Explore Aulax Business
            </b>
          </Link>
        </div>
      </div>
    </section>
  );
}

