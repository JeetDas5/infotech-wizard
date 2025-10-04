import React from "react";

const HeroSection2: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#ffe7eb] to-[#ffbfca] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-tight text-black">
            <span>Your Resume </span>
            <span className="text-crimson">Deserves a yes</span>
            <span> — let&apos;s make it happen</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl lg:w-[485px]">
            If your resume isn&apos;t getting responses, it&apos;s time for an
            upgrade. Get an ATS-optimized resume crafted by HR experts to help
            you land more interviews. Our resumes are designed to get your foot
            in the door and place your name at the top of the shortlist.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white border border-crimson text-crimson">
              Resume Packages
            </button>
            <button className="bg-crimson text-white">
              Contact us
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/assets/lady.png"
            alt="lady"
            className="w-full max-w-md lg:max-w-[640px] rounded-lg object-cover"
          />

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-64 lg:left-auto lg:right-24 lg:bottom-44 lg:transform-none">
            <img
              src="/assets/Mortarboard.png"
              alt="mortarboard"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-xl font-extrabold">260+</div>
              <div className="text-sm text-gray-500">
                Online Resumes Created
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mt-6 flex justify-center ">
          <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-3 shadow-sm left-1/2 lg:left-32 lg:translate-x-0 lg:relative lg:ml-0 lg:bottom-96">
            <div className="text-4xl font-semibold text-lightseagreen">4.9</div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="text-sm font-semibold text-black">
                Instructor Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
