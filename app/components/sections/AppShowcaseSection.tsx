import Image from "next/image";
import Link from "next/link";

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

// Play button icon
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function AppShowcaseSection() {
  return (
    <section
      className="px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[64px] lg:py-[96px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] mb-[48px] md:mb-[64px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-[8px] bg-[rgba(144,238,144,0.2)] px-[12px] py-[6px] rounded-full">
            <span className="font-semibold text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#90ee90]">
              See It in Action
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[672px] text-center">
            <h2 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[48px] text-white">
              Experience the Aulax App
            </h2>
          </div>

          <p className="text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#d1d5db] max-w-[600px]">
            Watch how easy it is to discover local shops, find deals, and
            support your community—all from your phone.
          </p>
        </div>

        {/* Video/Image Showcase */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/app-showcase.jpg"
              alt="Aulax app showcase"
              fill
              className="object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button className="w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full bg-[#006a4e] flex items-center justify-center hover:bg-[#005540] transition-colors shadow-lg">
                <PlayIcon />
              </button>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[120px] bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Phone Mockups - Hidden on mobile */}
          <div className="hidden md:block absolute -left-[60px] lg:-left-[100px] bottom-[-40px] lg:bottom-[-60px] w-[140px] lg:w-[200px] h-[280px] lg:h-[400px] transform rotate-[-8deg]">
            <div className="relative w-full h-full rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] border-[4px] lg:border-[6px] border-[#374151]">
              <Image
                src="/images/phone-mockup-1.jpg"
                alt="Aulax app screen 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block absolute -right-[60px] lg:-right-[100px] bottom-[-40px] lg:bottom-[-60px] w-[140px] lg:w-[200px] h-[280px] lg:h-[400px] transform rotate-[8deg]">
            <div className="relative w-full h-full rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] border-[4px] lg:border-[6px] border-[#374151]">
              <Image
                src="/images/phone-mockup-2.jpg"
                alt="Aulax app screen 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-[48px] md:mt-[80px] lg:mt-[120px] flex flex-col items-center gap-[24px] md:gap-[32px]">
          <div className="text-center">
            <h3 className="font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] text-white mb-[8px] md:mb-[12px]">
              Ready to Get Started?
            </h3>
            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#d1d5db]">
              Download the app and start exploring your local marketplace today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[12px] sm:gap-[16px]">
            {/* App Store */}
            <Link
              href="#"
              className="flex items-center bg-white/10 backdrop-blur-sm px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] md:rounded-[12px] border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-[18px] h-[24px]">
                <AppleIcon />
              </div>
              <div className="ml-[10px] md:ml-[12px]">
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white/80">
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
              className="flex items-center bg-white/10 backdrop-blur-sm px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] md:rounded-[12px] border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-[20px] h-[20px]">
                <GooglePlayIcon />
              </div>
              <div className="ml-[10px] md:ml-[12px]">
                <p className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] text-white/80">
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
