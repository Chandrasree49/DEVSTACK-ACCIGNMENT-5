import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-[#1677FF] bg-white">
      <div className="mx-auto max-w-[1050px] px-6 pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Dev Stack"
                className="h-7 w-auto object-contain"
              />
            </div>

            <p className="mt-4 max-w-[370px] text-[12px] leading-[18px] text-[#718096]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            
            <div className="mt-5 flex gap-5 text-[12px] font-medium">
              <a
                href="#"
                className="text-[#172033] transition hover:text-[#D81B7E]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[#172033] transition hover:text-[#D81B7E]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[#172033] transition hover:text-[#D81B7E]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-[#111827]">
              Product
            </h3>

            <ul className="space-y-3 text-[12px] text-[#718096]">
              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-[#111827]">
              Company
            </h3>

            <ul className="space-y-3 text-[12px] text-[#718096]">
              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:mt-0">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-[#111827]">
              Legal
            </h3>

            <ul className="space-y-3 text-[12px] text-[#718096]">
              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#D81B7E]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-12 border-t border-[#EDF0F5]" />

        <div className="flex flex-col gap-3 py-7 text-[11px] text-[#A0AEC0] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#D81B7E]">
              Privacy
            </a>

            <a href="#" className="transition hover:text-[#D81B7E]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
