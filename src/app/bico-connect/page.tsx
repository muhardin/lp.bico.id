const page = () => {
  return (
    <div className="min-h-screen">
      <div>
        <div className="h-80">
          <div
            style={{
              backgroundImage: "url('/images/events-banner.webp')",
              backgroundPosition: "-500px 0px",
              backgroundSize: "cover",
            }}
            className="mx-auto px-5 sm:px-8 lg:px-12 2xl:mx-36 xl:px-16 flex h-full justify-center flex-col"
          >
            <h1 className="text-white text-3xl mb-2">BICO Connect</h1>
            <p className="text-white text-sm font-extralight line-clamp-3 w-full sm:w-2/4 xl:w-1/3">
              Jadilah bagian dari komunitas angel investor, VC, serta pendiri
              startup, dan dapatkan akses pada setiap acara eksklusif.
            </p>
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mx-5 2xl:mx-52 lg:mx-16">
          <ul className="flex">
            <li className="me-2">
              <button className="inline-block p-4 border-b-4 rounded-t-lg border-transparent text-inherit">
                Acara Berlangsung
              </button>
            </li>
            <li className="me-2">
              <button className="inline-block p-4 border-b-4 rounded-t-lg border-brand-500 text-black">
                Event Terlaksana
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-5 pt-16 pb-20 md:grid-cols-2 md:mx-10 md:gap-4 md:space-y-0 md:grid lg:grid-cols-3 px-10">
        <button className="border-[1px] rounded-xl w-full flex flex-col">
          <img
            src="https://storage.googleapis.com/icx-bucket-production/icx-event-the-startup-pitch-banner-image-16-9.png"
            alt="event-banner"
            className="rounded-t-xl"
          />
          <div className="px-4 py-3 w-full h-full flex flex-col justify-end">
            <div className="flex justify-start">
              <h3 className="font-medium text-start line-clamp-1">
                The Startup Pitch
              </h3>
            </div>
            <div className="pt-3 flex items-center space-x-2">
              <img
                src="/images/calendar-icon.svg"
                className="w-[14px] h-[14px]"
                alt="icon"
              />
              <p className="text-[12px] font-extralight">
                21 Sep - 21 Sep 2023 | 13:00 WIB
              </p>
            </div>
            <div className="pt-1 pb-3 flex items-center space-x-2">
              <img
                src="/images/presentation-icon.svg"
                className="w-[14px] h-[14px]"
                alt="type"
              />
              <p className="text-[12px] font-extralight capitalize">
                offline Event
              </p>
            </div>
          </div>
        </button>
        <button className="border-[1px] rounded-xl w-full flex flex-col">
          <img
            src="https://storage.googleapis.com/icx-bucket-production/icx-event-web-banner_trihill.png"
            alt="event-banner"
            className="rounded-t-xl"
          />
          <div className="px-4 py-3 w-full h-full flex flex-col justify-end">
            <div className="flex justify-start">
              <h3 className="font-medium text-start line-clamp-1">
                The New Era of Startups Investing
              </h3>
            </div>
            <div className="pt-3 flex items-center space-x-2">
              <img
                src="/images/calendar-icon.svg"
                className="w-[14px] h-[14px]"
                alt="icon"
              />
              <p className="text-[12px] font-extralight">
                15 Agt - 15 Agt 2023 | 14:00 WIB
              </p>
            </div>
            <div className="pt-1 pb-3 flex items-center space-x-2">
              <img
                src="/images/presentation-icon.svg"
                className="w-[14px] h-[14px]"
                alt="type"
              />
              <p className="text-[12px] font-extralight capitalize">
                offline Event
              </p>
            </div>
          </div>
        </button>
        <button className="border-[1px] rounded-xl w-full flex flex-col">
          <img
            src="https://storage.googleapis.com/icx-bucket-production/icx-event-web-banner_networking-luncheon.png"
            alt="event-banner"
            className="rounded-t-xl"
          />
          <div className="px-4 py-3 w-full h-full flex flex-col justify-end">
            <div className="flex justify-start">
              <h3 className="font-medium text-start line-clamp-1">
                Investor Networking Luncheon: Connect &amp; Dine
              </h3>
            </div>
            <div className="pt-3 flex items-center space-x-2">
              <img
                src="/images/calendar-icon.svg"
                className="w-[14px] h-[14px]"
                alt="icon"
              />
              <p className="text-[12px] font-extralight">
                12 Jul - 12 Jul 2023 | 11:30 WIB
              </p>
            </div>
            <div className="pt-1 pb-3 flex items-center space-x-2">
              <img
                src="/images/presentation-icon.svg"
                className="w-[14px] h-[14px]"
                alt="type"
              />
              <p className="text-[12px] font-extralight capitalize">
                offline Event
              </p>
            </div>
          </div>
        </button>
        <button className="border-[1px] rounded-xl w-full flex flex-col">
          <img
            src="https://storage.googleapis.com/icx-bucket-production/event-2-online.jpeg"
            alt="event-banner"
            className="rounded-t-xl"
          />
          <div className="px-4 py-3 w-full h-full flex flex-col justify-end">
            <div className="flex justify-start">
              <h3 className="font-medium text-start line-clamp-1">
                How to Level Up your Investment Game (Online)
              </h3>
            </div>
            <div className="pt-3 flex items-center space-x-2">
              <img
                src="/images/calendar-icon.svg"
                className="w-[14px] h-[14px]"
                alt="icon"
              />
              <p className="text-[12px] font-extralight">
                23 Mei - 23 Mei 2023 | 18:00 WIB
              </p>
            </div>
            <div className="pt-1 pb-3 flex items-center space-x-2">
              <img
                src="/images/presentation-icon.svg"
                className="w-[14px] h-[14px]"
                alt="type"
              />
              <p className="text-[12px] font-extralight capitalize">
                online Event
              </p>
            </div>
          </div>
        </button>
        <button className="border-[1px] rounded-xl w-full flex flex-col">
          <img
            src="https://storage.googleapis.com/icx-bucket-production/event-1-offline.jpeg"
            alt="event-banner"
            className="rounded-t-xl"
          />
          <div className="px-4 py-3 w-full h-full flex flex-col justify-end">
            <div className="flex justify-start">
              <h3 className="font-medium text-start line-clamp-1">
                How to Level Up your Investment Game (Offline)
              </h3>
            </div>
            <div className="pt-3 flex items-center space-x-2">
              <img
                src="/images/calendar-icon.svg"
                className="w-[14px] h-[14px]"
                alt="icon"
              />
              <p className="text-[12px] font-extralight">
                23 Mei - 23 Mei 2023 | 18:00 WIB
              </p>
            </div>
            <div className="pt-1 pb-3 flex items-center space-x-2">
              <img
                src="/images/presentation-icon.svg"
                className="w-[14px] h-[14px]"
                alt="type"
              />
              <p className="text-[12px] font-extralight capitalize">
                offline Event
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default page;
