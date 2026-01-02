import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-white flex flex-col items-start px-[104px] py-[96px] text-center font-['Inter']">
      <div className="self-stretch rounded-[24px] bg-[#1e293b] overflow-hidden flex flex-col items-center p-[64px] relative isolate gap-[16px]">
        {/* Heading */}
        <div className="self-stretch flex flex-col items-center z-0 flex-shrink-0">
          <b className="w-[582.3px] h-[40px] relative text-[36px] leading-[40px] text-[#90ee90] flex items-center justify-center flex-shrink-0">
            Meet the future of local shopping
          </b>
        </div>

        {/* Description */}
        <div className="w-[672px] flex flex-col items-center pb-[16px] max-w-[672px] z-[1] flex-shrink-0">
          <div className="w-[643px] h-[56px] relative text-[18px] leading-[28px] text-[#e5e7eb] flex items-center justify-center flex-shrink-0">
            We're building the best way to discover and support local businesses. More
            <br />
            convenience, more connection. Full speed.
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="rounded-full bg-[#90ee90] flex items-start justify-center px-[32px] py-[12px] z-[2] flex-shrink-0 hover:bg-[#7ed67e] transition-colors"
        >
          <b className="h-[28px] w-[229px] relative text-[18px] leading-[28px] text-[#1e293b] flex items-center justify-center flex-shrink-0">
            Learn about our mission
          </b>
        </Link>

        {/* Decorative Overlay - Top Right */}
        <div className="w-[192px] h-[192px] absolute top-[-64px] right-[-64px] rounded-full bg-[rgba(144,238,144,0.2)] z-[3] flex-shrink-0" />

        {/* Decorative Overlay - Bottom Left */}
        <div className="w-[256px] h-[256px] absolute bottom-[-96px] left-[-64px] rounded-full bg-[rgba(144,238,144,0.2)] z-[4] flex-shrink-0" />
      </div>
    </section>
  );
}
