import StackImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="max-w-[570px] text-4xl font-extrabold leading-[1.05] tracking-[-1.5px] md:text-5xl lg:text-[56px]">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[510px] text-[15px] leading-7 text-[#667085]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#projects"
              className="rounded-lg border border-[#d0d5dd] bg-white px-6 py-3 text-sm font-semibold text-[#344054] transition hover:bg-[#f9fafb]"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={StackImage}
            alt="Development technology stack"
            className="w-[360px] max-w-full drop-shadow-[0_20px_40px_rgba(120,0,255,0.15)] md:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
