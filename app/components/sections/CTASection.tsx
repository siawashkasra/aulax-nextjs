import Link from "next/link";

// Apple icon
const AppleIcon = () => (
  <svg width="22.5" height="30" viewBox="0 0 23 30" fill="white">
    <path d="M18.71 15.825c-.03-2.9 2.36-4.29 2.47-4.36-1.35-1.98-3.45-2.25-4.2-2.28-1.79-.18-3.49 1.05-4.4 1.05-.91 0-2.31-1.02-3.8-1-1.95.03-3.75 1.14-4.76 2.89-2.03 3.52-.52 8.75 1.46 11.61.97 1.4 2.11 2.97 3.63 2.91 1.45-.06 2-1 3.76-.94 1.75 0 2.25.94 3.77.91 1.57-.03 2.55-1.42 3.5-2.83 1.1-1.61 1.56-3.18 1.59-3.26-.03-.02-3.05-1.17-3.08-4.65l.06-.05zm-2.95-8.49c.8-.97 1.34-2.31 1.19-3.66-1.15.05-2.54.76-3.36 1.72-.74.86-1.39 2.22-1.21 3.54 1.28.1 2.59-.64 3.38-1.6z" />
  </svg>
);

// Google Play icon
const GooglePlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M3.61 1.49c-.34.35-.51.87-.51 1.53v18.01c0 .66.17 1.18.51 1.53l.08.07 10.08-10.08v-.24L3.69 1.42l-.08.07z" />
    <path d="M17.33 15.86l-3.36-3.36v-.24l3.36-3.36.07.04 3.98 2.26c1.14.65 1.14 1.71 0 2.36l-3.98 2.26-.07.04z" />
    <path d="M17.4 15.82L13.97 12.39 3.61 22.56c.37.39 1 .43 1.7.05l11.91-6.78.18-.01z" />
    <path d="M17.4 8.94L5.31 2.15c-.7-.39-1.33-.34-1.7.05l10.36 10.36 3.43-3.62z" />
  </svg>
);

export default function CTASection() {
  return (
    <section className="px-[80px] py-[96px] bg-[#f9fafb]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div
          className="rounded-[24px] p-[64px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006a4e 0%, #1e293b 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-[-128px] right-[-128px] w-[256px] h-[256px] rounded-full bg-[rgba(144,238,144,0.2)]" />
          <div className="absolute bottom-[-96px] left-[-96px] w-[192px] h-[192px] rounded-full bg-[rgba(144,238,144,0.2)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-[24px] max-w-[896px] mx-auto text-center">
            {/* Heading */}
            <h2 className="font-bold text-[48px] leading-[48px] text-white">
              Connecting You to the Local
              <br />
              Marketplace
            </h2>

            {/* Description */}
            <p className="font-normal text-[18px] leading-[28px] text-[#e5e7eb] max-w-[672px]">
              Explore your local market with excitement! Aulax makes it easy and fun to
              discover nearby shops and amazing deals at your favourite stores.
            </p>

            {/* App Store Buttons */}
            <div className="flex items-center justify-center gap-[16px] pt-[8px]">
              {/* App Store */}
              <Link
                href="#"
                className="flex items-center bg-black px-[24px] py-[12px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors"
              >
                <AppleIcon />
                <div className="ml-[12px]">
                  <p className="font-normal text-[12px] leading-[16px] text-white/80 text-left">
                    Download on the
                  </p>
                  <p className="font-semibold text-[18px] leading-[28px] text-white text-left">
                    App Store
                  </p>
                </div>
              </Link>

              {/* Google Play */}
              <Link
                href="#"
                className="flex items-center bg-black px-[24px] py-[12px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors"
              >
                <GooglePlayIcon />
                <div className="ml-[12px]">
                  <p className="font-normal text-[12px] leading-[16px] text-white/80 text-left">
                    GET IT ON
                  </p>
                  <p className="font-semibold text-[18px] leading-[28px] text-white text-left">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
