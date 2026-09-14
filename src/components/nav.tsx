import Logo from "../assets/logo-text.png";

const navItems = [
  "Home",
  "Technologies",
  "Projects",
  "About",
  "Contact",
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0099ff] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6">

        <a href="#" className="shrink-0">
          <img
            src={Logo}
            alt="Dev Stack"
            className="w-[125px]"
          />
        </a>

  
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-[13px] font-medium transition ${
                    index === 0
                      ? "text-[#e60073]"
                      : "text-[#17243a] hover:text-[#e60073]"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#"
            className="text-[13px] font-medium text-[#17243a] hover:text-[#e60073]"
          >
            Sign In
          </a>

          <a
            href="#"
            className="rounded-full bg-[#df0871] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#c70663]"
          >
            Sign Up
          </a>
        </div>
        <button
          className="btn btn-ghost btn-sm md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Nav;