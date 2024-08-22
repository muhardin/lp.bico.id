import Image from "next/image";

const StartupPitchPage = () => {
  return (
    <div className="lg:pt-28">
      <div className="lg:hidden pt-20 pb-4 mx-6">
        <div className="flex line-clamp-1" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="self-center">
              <a href="/">
                <p className="text-xs lg:text-base font-light text-gray-700 hover:cursor-pointer">
                  Home
                </p>
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
                  src="/images/chevron-right.svg"
                  alt="next"
                />
                <a
                  className="ms-1 text-xs lg:text-base font-light whitespace-nowrap text-gray-700 md:ms-2 hover:cursor-pointer"
                  href="/icx-connect"
                >
                  ICX Connect
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
                  src="/images/chevron-right.svg"
                  alt="next"
                />
                <span className="ms-1 text-xs lg:text-base font-light line-clamp-1 text-gray-500 md:ms-2">
                  The Startup Pitch
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <Image
        className="lg:h-[400px] lg:mx-auto lg:rounded-lg"
        width={100}
        height={100}
        src="https://storage.googleapis.com/icx-bucket-production/icx-event-the-startup-pitch-banner-image-16-9.png"
        alt="cover-image"
      />
      <div className="mx-6 py-6 space-y-3 block lg:space-x-10 lg:grid lg:grid-cols-3 sm:mx-20 xl:mx-60 lg:mt-16">
        <div className="lg:col-span-2">
          <div className="hidden lg:block lg:pb-5">
            <div className="flex line-clamp-1" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="self-center">
                  <a href="/">
                    <p className="text-xs lg:text-base font-light text-gray-700 hover:cursor-pointer">
                      Home
                    </p>
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      width={100}
                      height={100}
                      className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
                      src="/images/chevron-right.svg"
                      alt="next"
                    />
                    <a
                      className="ms-1 text-xs lg:text-base font-light whitespace-nowrap text-gray-700 md:ms-2 hover:cursor-pointer"
                      href="/icx-connect"
                    >
                      ICX Connect
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <Image
                      width={100}
                      height={100}
                      className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
                      src="/images/chevron-right.svg"
                      alt="next"
                    />
                    <span className="ms-1 text-xs lg:text-base font-light line-clamp-1 text-gray-500 md:ms-2">
                      The Startup Pitch
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <h2 className="text-2xl pb-3 font-medium lg:text-4xl">
            The Startup Pitch
          </h2>
          <p className="opacity-50 font-light"></p>
          <h4 className="font-medium mt-4 lg:text-lg">Schedule</h4>
          <div className="space-y-2 pt-4">
            <div className="flex items-center space-x-2">
              <Image
                width={100}
                height={100}
                src="/images/calendar-icon.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <p className="text-sm font-extralight">
                Kamis, 21 Sep - Kamis, 21 Sep 2023
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                width={100}
                height={100}
                src="/images/clock-icon.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <p className="text-sm font-extralight">13:00 - 19:00 WIB</p>
            </div>
            <div className="flex items-start space-x-2 lg:hidden">
              <Image
                width={100}
                height={100}
                src="/images/pin-icon.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <div>
                <p className="text-sm font-extralight">ICX Hall</p>
                <a
                  href="https://goo.gl/maps/8rcd8BX29Wu6cn1q9"
                  className="text-brand-500 text-xs"
                >
                  Visit Google Maps
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:hidden">
              <Image
                width={100}
                height={100}
                src="/images/user-icon.svg"
                alt=""
                className="w-5 h-5"
              />
              <p className="text-sm font-extralight">Kuota 100 Orang</p>
            </div>
          </div>
          <h4 className="hidden font-medium pt-4 lg:text-lg lg:block">
            Location
          </h4>
          <div className="flex items-start space-x-2 mt-4">
            <Image
              width={100}
              height={100}
              src="/images/pin-icon.svg"
              alt="icon"
              className="w-5 h-5"
            />
            <div>
              <p className="text-sm font-extralight">ICX Hall</p>
              <a
                href="https://goo.gl/maps/8rcd8BX29Wu6cn1q9"
                className="text-brand-500 text-xs"
              >
                Visit Google Maps
              </a>
            </div>
          </div>
          <h4 className="font-medium pt-4 lg:text-lg">About This Event</h4>
          <p className="text-sm font-light leading-[22px] lg:pt-4 lg:pb-14">
            The Startup Pitch will bring together venture capitalists and
            startup entrepreneurs in a competitive style. This event offers a
            unique opportunity to meet, engage in meaningful conversations, and
            explore potential investment opportunities with fellow investors and
            industry professionals from a variety of sectors.
          </p>
          <div className="mb-14 pt-10 lg:hidden">
            <button className="bg-brand-500 text-white text-sm font-light w-full rounded-md py-3">
              Daftar Event
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 hidden lg:flex lg:flex-col justify-center items-center w-[300px] h-[134px] rounded-md shadow-[6px_15px_80px_1px_#edf2f7]">
          <h5 className="text-sm">Share this event</h5>
          <div className="flex space-x-2.5">
            <Image
              width={100}
              height={100}
              src="/images/chain-icon.svg"
              alt="icon"
              className="w-6 h-6 hover:cursor-pointer"
            />
            <button
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Image
                width={100}
                height={100}
                src="/images/facebook.svg"
                className="w-6 h-6"
                alt="facebook"
              />
            </button>
            <button
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Image
                width={100}
                height={100}
                src="/images/twitter.svg"
                className="w-6 h-6"
                alt="twitter"
              />
            </button>
            <button
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Image
                width={100}
                height={100}
                src="/images/linkedin.svg"
                className="w-6 h-6"
                alt="linkedin"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupPitchPage;
