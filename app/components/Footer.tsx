import Link from "next/link";

// Social icons as inline SVGs
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="17.5" height="20" viewBox="0 0 18 20" fill="currentColor">
    <path d="M9 1.802c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.047 1.37-.057 4.04-.057zM9 0C6.284 0 5.944.012 4.878.06 1.246.227.228 1.242.06 4.877.012 5.944 0 6.284 0 9s.012 3.057.06 4.123c.167 3.632 1.182 4.65 4.817 4.817.433.02.772.03 1.123.046V18l.002-.002c.002 0 .003 0 .005.002h6.006l.002.002v-.002h.002c.35-.015.689-.025 1.12-.046 3.636-.167 4.65-1.188 4.818-4.82.048-1.065.06-1.405.06-4.122 0-2.717-.012-3.056-.06-4.122C17.773 1.245 16.756.228 13.122.06 12.057.012 11.717 0 9 0z" />
    <path d="M9 4.378a4.622 4.622 0 100 9.244 4.622 4.622 0 000-9.244zM9 12a3 3 0 110-6 3 3 0 010 6z" />
    <circle cx="13.804" cy="4.196" r="1.08" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="17.5" height="20" viewBox="0 0 18 20" fill="currentColor">
    <path d="M18 10.049C18 4.505 13.97.5 8.5.5S-1 4.505-1 10.049c0 4.77 3.44 8.726 7.938 9.451v-6.688H4.898v-2.763h2.04V7.92c0-2.044 1.2-3.173 3.022-3.173.875 0 1.79.159 1.79.159v2.005h-1.008c-.994 0-1.304.626-1.304 1.269v1.53h2.22l-.355 2.763H9.438v6.688C13.936 18.775 18 14.82 18 10.049z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V7.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v6.715zM4.67 6.577c-.856 0-1.548-.697-1.548-1.555 0-.857.692-1.554 1.548-1.554s1.547.697 1.547 1.554c0 .858-.691 1.555-1.547 1.555zm1.336 11.762H3.333V7.75h2.673v10.589zM20 0H0v20h20V0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M19.615 5.184c-.228-.857-.896-1.533-1.744-1.764C16.309 3 10 3 10 3s-6.31 0-7.871.42c-.848.231-1.516.907-1.744 1.764C0 6.768 0 10.066 0 10.066s0 3.298.385 4.882c.228.857.896 1.533 1.744 1.764C3.69 17.132 10 17.132 10 17.132s6.31 0 7.871-.42c.848-.231 1.516-.907 1.744-1.764.385-1.584.385-4.882.385-4.882s0-3.298-.385-4.882zM7.977 13.066V7.066l5.227 3-5.227 3z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 002 13h12a1 1 0 00.966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor">
    <path d="M6 0C2.686 0 0 2.686 0 6c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] pt-[48px] md:pt-[64px] pb-[24px] md:pb-[32px] px-[24px] md:px-[40px] lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto px-0 md:px-[24px]">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[24px] md:gap-[32px] mb-[32px] md:mb-[48px]">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] mb-[12px] md:mb-[16px]">
              Company
            </h4>
            <ul className="flex flex-col gap-[6px] md:gap-[8px]">
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Aulax Products */}
          <div>
            <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] mb-[12px] md:mb-[16px]">
              Aulax Products
            </h4>
            <ul className="flex flex-col gap-[6px] md:gap-[8px]">
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Personal Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Business Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Aulax Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] mb-[12px] md:mb-[16px]">
              Resources
            </h4>
            <ul className="flex flex-col gap-[6px] md:gap-[8px]">
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Service Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] mb-[12px] md:mb-[16px]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-[6px] md:gap-[8px]">
              <li className="flex items-center">
                <span className="text-[#4b5563]">
                  <EmailIcon />
                </span>
                <Link
                  href="mailto:enquiry@aulax.app"
                  className="ml-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  enquiry@aulax.app
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#4b5563]">
                  <LocationIcon />
                </span>
                <span className="ml-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4b5563]">
                  London, UK
                </span>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#1f2937] mb-[12px] md:mb-[16px]">
              Follow us
            </h4>
            <div className="flex items-start gap-[12px] md:gap-[16px]">
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e5e7eb] pt-[24px] md:pt-[33px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
            {/* Left side */}
            <div className="flex flex-col md:flex-row items-center">
              <Link
                href="/"
                className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#1e293b]"
              >
                Aulax
              </Link>
              <div className="flex items-center mt-[12px] md:mt-0 md:ml-[16px] gap-[12px] md:gap-[16px]">
                <Link
                  href="#"
                  className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Legal
                </Link>
                <Link
                  href="#"
                  className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Right side */}
            <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] text-[#6b7280]">
              © 2026 Aulax. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
