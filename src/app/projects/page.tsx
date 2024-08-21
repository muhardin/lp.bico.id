import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="h-80"
        style={{
          backgroundImage: "url('/images/events-banner.webp')",
          backgroundPosition: "-500px 0px",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 2xl:mx-36 xl:px-16 flex h-full justify-center flex-col">
          <h1 className="text-white text-3xl mb-2">Telusuri Proyek BICO</h1>
          <p className="text-white text-sm font-extralight line-clamp-3 w-full sm:w-2/4 xl:w-1/3"></p>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <Link href="/projects/1">
              <div
                className="shadow rounded-md hover:shadow-md mb-4"
                style={{ width: "100%" }}
              >
                <Image
                  className="w-full h-[180px] object-cover rounded-t-md pointer-events-none"
                  src="/images/projects/ONEm_Communications_Cryptocurrency.jpg"
                  alt="company-list"
                  width={500}
                  height={140}
                />
                <div className="px-4 pt-8 pb-10 relative">
                  <Image
                    className="w-[50px] h-[50px] object-cover rounded-md absolute top-[-30px] pointer-events-none"
                    src="/images/projects/3xARCO-company-logo.png"
                    alt="company-list"
                    width={50}
                    height={50}
                  />
                  <div className="cursor-pointer">
                    <p className="font-semibold text-md line-clamp-1">
                      Matric Coin (MTRX)
                    </p>
                    <p className="text-xs line-clamp-1">
                      PT. Metricpack Mandiri
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Supply
                    </p>
                    <p className="font-medium text-sm line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Available
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Price
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      0.05 BICO
                    </p>
                    <div className="flex flex-row items-center mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 text-brand-500"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                      <p className="font-medium text-xs ml-1 text-brand-500">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/projects/1">
              <div
                className="shadow rounded-md hover:shadow-md mb-4"
                style={{ width: "100%" }}
              >
                <Image
                  className="w-full h-[180px] object-cover rounded-t-md pointer-events-none"
                  src="/images/projects/pngtree-3d-illustration-of-tether-cryptocurrency-image_13564714.png"
                  alt="company-list"
                  width={500}
                  height={140}
                />
                <div className="px-4 pt-8 pb-10 relative">
                  <Image
                    className="w-[50px] h-[50px] object-cover rounded-md absolute top-[-30px] pointer-events-none"
                    src="/images/projects/usdt.jpg"
                    alt="company-list"
                    width={50}
                    height={50}
                  />
                  <div className="cursor-pointer">
                    <p className="font-semibold text-md line-clamp-1">
                      Tether Coin (USDT)
                    </p>
                    <p className="text-xs line-clamp-1">Coming soon</p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Supply
                    </p>
                    <p className="font-medium text-sm line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Available
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Price
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      0.05 BICO
                    </p>
                    <div className="flex flex-row items-center mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 text-brand-500"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                      <p className="font-medium text-xs ml-1 text-brand-500">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/projects/1">
              <div
                className="shadow rounded-md hover:shadow-md mb-4"
                style={{ width: "100%" }}
              >
                <Image
                  className="w-full h-[180px] object-cover rounded-t-md pointer-events-none"
                  src="/images/projects/troncoin.jpg"
                  alt="company-list"
                  width={500}
                  height={140}
                />
                <div className="px-4 pt-8 pb-10 relative">
                  <Image
                    className="w-[50px] h-[50px] object-cover rounded-md absolute top-[-30px] pointer-events-none"
                    src="/images/projects/tron-trx-icon3386.logowik.com.webp"
                    alt="company-list"
                    width={50}
                    height={50}
                  />
                  <div className="cursor-pointer">
                    <p className="font-semibold text-md line-clamp-1">
                      Tron Coin (TRX)
                    </p>
                    <p className="text-xs line-clamp-1">Coming soon</p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Supply
                    </p>
                    <p className="font-medium text-sm line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Available
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Price
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      0.05 BICO
                    </p>
                    <div className="flex flex-row items-center mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 text-brand-500"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                      <p className="font-medium text-xs ml-1 text-brand-500">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/projects/1">
              <div
                className="shadow rounded-md hover:shadow-md mb-4"
                style={{ width: "100%" }}
              >
                <Image
                  className="w-full h-[180px] object-cover rounded-t-md pointer-events-none"
                  src="/images/projects/download-money-wallpaper-t9iuih9tmgtfycob.jpg"
                  alt="company-list"
                  width={500}
                  height={140}
                />
                <div className="px-4 pt-8 pb-10 relative">
                  <Image
                    className="w-[50px] h-[50px] object-cover rounded-md absolute top-[-30px] pointer-events-none"
                    src="/images/projects/rty.avif"
                    alt="company-list"
                    width={50}
                    height={50}
                  />
                  <div className="cursor-pointer">
                    <p className="font-semibold text-md line-clamp-1">
                      Matric Coin (MTRX)
                    </p>
                    <p className="text-xs line-clamp-1">Coming soon</p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Supply
                    </p>
                    <p className="font-medium text-sm line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Available
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      4.235.000.000 MTRX
                    </p>
                    <p className="font-light text-xs text-brand-500 mt-3">
                      Price
                    </p>
                    <p className="font-medium text-xs text-brand-500 line-clamp-1">
                      0.05 BICO
                    </p>
                    <div className="flex flex-row items-center mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 text-brand-500"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                      <p className="font-medium text-xs ml-1 text-brand-500">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
