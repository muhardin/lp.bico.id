import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="font-sans bg-white">
      {/* Navbar */}
      <nav
        id="fixed-navbar"
        className="bg-transparent h-16 lg:h-20 ease-in-out duration-500 fixed w-full z-40 flex justify-between items-center"
      >
        <Link href={"/"} className="flex items-center">
          <Image
            loading="lazy"
            className="h-[36px] object-contain ml-5 lg:h-[50px] xl:mt-0 2xl:ml-52 lg:ml-16"
            src="/images/logo.png"
            alt="icx-logo"
            width={150}
            height={80}
          />
        </Link>
        <div className="hidden font-medium lg:flex text-white">
          <a href="/fundraise">
            <p className="text-md mx-5">Pendanaan</p>
          </a>
          <a href="/projects">
            <p className="text-md mx-5">Projek</p>
          </a>
          <a href="/icx-pasti">
            <p className="text-md mx-5">BICO Pasti</p>
          </a>
          <a href="/about-us">
            <p className="text-md mx-5">Tentang Kami</p>
          </a>
          <a href="/icx-connect">
            <p className="text-md mx-5">BICO Connect</p>
          </a>
          <a href="/blog">
            <p className="text-md mx-5">Blog</p>
          </a>
        </div>
        <div className="lg:flex space-x-6 font-medium 2xl:mr-52 lg:mr-16 hidden items-center text-white">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5"
            aria-expanded="false"
            aria-haspopup="menu"
            id=":r1:"
          >
            <path d="m5 8 6 6"></path>
            <path d="m4 14 6-6 2-3"></path>
            <path d="M2 5h12"></path>
            <path d="M7 2h1"></path>
            <path d="m22 22-5-10-5 10"></path>
            <path d="M14 18h6"></path>
          </svg> */}
          <button>Login</button>
          <button className="px-5 py-2 rounded-lg bg-brand-400 text-white text-sm font-light bg-sky-600">
            Hubungi Kami
          </button>
        </div>
        <div className="lg:hidden">
          <button className="flex items-center p-3 text-white">
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="sidebar"
        className="bg-gradient-to-br fixed from-black via-black to-gray-600 z-50 w-full h-screen text-white p-10 space-y-10 hidden ease-in-out duration-500"
      >
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              loading="lazy"
              className="h-[26px] object-contain"
              src="/images/icx-navbar-logo.webp"
              alt="icx-logo"
              width={100}
              height={40}
            />
          </a>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <menu className="flex flex-col justify-between h-[85vh]">
          <div className="flex flex-col space-y-10 items-start">
            <button className="text-md">Pendanaan</button>
            <button className="text-md">Projek</button>
            <button className="text-md">BICO Pasti</button>
            <button className="text-md">Tentang Kami</button>
            <button className="text-md">BICO Connect</button>
            <button className="text-md">Blog</button>
            <a href="/create-pin">
              <p className="text-sm text-brand-500 border-b border-brand-400">
                Lengkapi Profile Anda.
              </p>
            </a>
          </div>

          <div>
            <div>
              <button>Login</button>
            </div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5"
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r3:"
            >
              <path d="m5 8 6 6"></path>
              <path d="m4 14 6-6 2-3"></path>
              <path d="M2 5h12"></path>
              <path d="M7 2h1"></path>
              <path d="m22 22-5-10-5 10"></path>
              <path d="M14 18h6"></path>
            </svg> */}
          </div>
        </menu>
      </div>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url(/images/thumb-1920-1239296.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 text-white h-screen">
          <div className="flex justify-end lg:justify-center items-start flex-col h-full pb-[25%] lg:pb-0">
            <div className="font-semibold text-2xl lg:text-4xl xl:text-5xl lg:text-center flex flex-col items-start">
              <span>Trusted Secure Blockchain Contract</span>
              <span> With Real Project</span>
            </div>
            <p className="text-md lg:text-lg w-full sm:w-3/5 lg:w-1/3 font-extralight sm:font-light leading-snug mt-4 mb-8 lg:mb-10 lg:text-center">
              Bergabunglah dengan komunitas bisnis kami dan tingkatkan
              pengalaman bisnis Anda ke level berikutnya!
            </p>
            <div className="flex flex-col sm:flex-row w-full">
              <a href="/contact-us">
                <button className="bg-brand-400 ease-in-out duration-300 w-full sm:w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80 bg-sky-600">
                  Hubungi Kami
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://penerbit.icx.id/"
              >
                <button className="sm:ml-3 mt-3 sm:mt-0 border hover:shadow-['0px_3px_0px_15px_brand-400'] hover:shadow-brand-400 ease-in-out duration-300 w-full px-10 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                  Mulai Menggalang Dana
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white">
          <h2 className="text-center font-semibold text-xl lg:text-3xl mb-10">
            Our Listing Token
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <div className="shadow rounded-md hover:shadow-md mb-4 w-full">
              <div className="relative">
                <Image
                  className="w-full h-[140px] object-cover rounded-t-md"
                  src="https://storage.googleapis.com/icx-bucket-production/ARCO-cover-image.png"
                  alt="company-list"
                  width={640}
                  height={140}
                />
                <Image
                  className="w-[50px] h-[50px] object-cover rounded-md absolute top-[110px] left-36"
                  src="https://storage.googleapis.com/icx-bucket-production/3xARCO-company-logo.png"
                  alt="company-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="px-4 pt-8 pb-10">
                <p className="font-semibold text-md line-clamp-1">Arah Kopi</p>
                <p className="text-xs line-clamp-1">
                  PT. Anugerah Ragam Adiboga Harum
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Target Pendanaan
                </p>
                <p className="font-medium text-sm line-clamp-1">
                  Rp 4.235.000.000
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Sisa Pendanaan
                </p>
                <p className="font-medium text-xs text-brand-500 line-clamp-1">
                  Rp 0
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
                    Pendanaan Ditutup
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow rounded-md hover:shadow-md mb-4 w-full">
              <div className="relative">
                <Image
                  className="w-full h-[140px] object-cover rounded-t-md"
                  src="https://storage.googleapis.com/icx-bucket-production/ARCO-cover-image.png"
                  alt="company-list"
                  width={640}
                  height={140}
                />
                <Image
                  className="w-[50px] h-[50px] object-cover rounded-md absolute top-[110px] left-36"
                  src="https://storage.googleapis.com/icx-bucket-production/3xARCO-company-logo.png"
                  alt="company-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="px-4 pt-8 pb-10">
                <p className="font-semibold text-md line-clamp-1">Arah Kopi</p>
                <p className="text-xs line-clamp-1">
                  PT. Anugerah Ragam Adiboga Harum
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Target Pendanaan
                </p>
                <p className="font-medium text-sm line-clamp-1">
                  Rp 4.235.000.000
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Sisa Pendanaan
                </p>
                <p className="font-medium text-xs text-brand-500 line-clamp-1">
                  Rp 0
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
                    Pendanaan Ditutup
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow rounded-md hover:shadow-md mb-4 w-full">
              <div className="relative">
                <Image
                  className="w-full h-[140px] object-cover rounded-t-md"
                  src="https://storage.googleapis.com/icx-bucket-production/ARCO-cover-image.png"
                  alt="company-list"
                  width={640}
                  height={140}
                />
                <Image
                  className="w-[50px] h-[50px] object-cover rounded-md absolute top-[110px] left-36"
                  src="https://storage.googleapis.com/icx-bucket-production/3xARCO-company-logo.png"
                  alt="company-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="px-4 pt-8 pb-10">
                <p className="font-semibold text-md line-clamp-1">Arah Kopi</p>
                <p className="text-xs line-clamp-1">
                  PT. Anugerah Ragam Adiboga Harum
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Target Pendanaan
                </p>
                <p className="font-medium text-sm line-clamp-1">
                  Rp 4.235.000.000
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Sisa Pendanaan
                </p>
                <p className="font-medium text-xs text-brand-500 line-clamp-1">
                  Rp 0
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
                    Pendanaan Ditutup
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow rounded-md hover:shadow-md mb-4 w-full">
              <div className="relative">
                <Image
                  className="w-full h-[140px] object-cover rounded-t-md"
                  src="https://storage.googleapis.com/icx-bucket-production/ARCO-cover-image.png"
                  alt="company-list"
                  width={640}
                  height={140}
                />
                <Image
                  className="w-[50px] h-[50px] object-cover rounded-md absolute top-[110px] left-36"
                  src="https://storage.googleapis.com/icx-bucket-production/3xARCO-company-logo.png"
                  alt="company-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="px-4 pt-8 pb-10">
                <p className="font-semibold text-md line-clamp-1">Arah Kopi</p>
                <p className="text-xs line-clamp-1">
                  PT. Anugerah Ragam Adiboga Harum
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Target Pendanaan
                </p>
                <p className="font-medium text-sm line-clamp-1">
                  Rp 4.235.000.000
                </p>
                <p className="font-light text-xs text-brand-500 mt-3">
                  Sisa Pendanaan
                </p>
                <p className="font-medium text-xs text-brand-500 line-clamp-1">
                  Rp 0
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
                    Pendanaan Ditutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Kami Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-5 lg:px-16">
          <h2 className="text-center font-semibold text-xl lg:text-3xl mb-10">
            Our Listing Token
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <Image
                src="/images/portfolio2.webp"
                alt="Portfolio 2"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg mt-5">Project B</h3>
              <p className="text-sm mt-2">
                A brief description of Project B highlighting its main features
                and impact.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <Image
                src="/images/portfolio3.webp"
                alt="Portfolio 3"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg mt-5">Project C</h3>
              <p className="text-sm mt-2">
                A brief description of Project C highlighting its main features
                and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-5 lg:px-16">
          <h2 className="text-center font-semibold text-xl lg:text-3xl mb-10">
            Our Listing Token
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <Image
                src="/images/portfolio2.webp"
                alt="Portfolio 2"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg mt-5">Project B</h3>
              <p className="text-sm mt-2">
                A brief description of Project B highlighting its main features
                and impact.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <Image
                src="/images/portfolio3.webp"
                alt="Portfolio 3"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg mt-5">Project C</h3>
              <p className="text-sm mt-2">
                A brief description of Project C highlighting its main features
                and impact.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="hidden sm:block"
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) 60%, rgb(0, 0, 0) 40%)",
        }}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-full sm:w-2/3">
              <Image
                loading="lazy"
                className="h-auto w-full object-contain"
                src="/images/achievement-desktop.webp"
                alt="Achievement"
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-24 xl:py-0">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-black h-full xl:h-screen text-white">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-2xl sm:text-3xl font-semibold text-center sm:w-2/3 xl:w-2/5">
              Mengapa Menggalang Dana Melalui BICO?
            </p>
            <div className="flex flex-row flex-wrap justify-center mt-10">
              {[
                {
                  title: "Jaringan Langsung ke Angel Investor",
                  description:
                    "Menghubungkan pemilik bisnis dengan Angel Investor, membantu bisnis mendapatkan akses pendanaan baru dengan diversifikasi ekuitas melalui platform crowdfunding. Akses ke lebih banyak individu dan komunitas high-net worth, perluas jangkauan, dan visibilitas peluang dalam penggalangan dana.",
                  imageUrl: "/images/why-fundraise-1.svg",
                },
                {
                  title: "Platform Berlisensi OJK, KSEI, dan ISO 27001",
                  description:
                    "Seluruh investasi pada platform BICO telah tercatat di KSEI, berizin & diawasi oleh OJK, dan sistem keamanan yang telah tersertifikasi ISO 27001.",
                  imageUrl: "/images/why-fundraise-2.svg",
                },
                {
                  title: "Membuka Peluang IPO",
                  description:
                    "Meningkatkan valuasi perencanaan bisnis untuk melakukan Initial Public Offering (IPO) di masa yang akan datang. BICO dapat membantu dan menjembatani startup maupun bisnis lainnya untuk tumbuh menuju IPO dengan bantuan mitra kami Sucor Sekuritas.",
                  imageUrl: "/images/why-fundraise-3.svg",
                },
                {
                  title:
                    "Kemudahan Akses Menuju Sumber Daya Berbakat dan Bertalenta",
                  description:
                    "Memanfaatkan kemutakhiran teknologi digital yang terampil, BICO menyalurkan dukungan talenta kepada startup dan bisnis yang telah berkolaborasi secara aktif dengan mitra kami Purwadhika.",
                  imageUrl: "/images/why-fundraise-4.svg",
                },
                {
                  title: "Kolaborasi Dengan Ekosistem BICO",
                  description:
                    "Menjadi bagian dari ekosistem crowdfunding yang mapan membawa kredibilitas dan kepercayaan. BICO menerapkan proses uji tuntas yang ketat hingga melakukan kolaborasi dengan beberapa media seperti Finfolk & Teman Startup untuk memudahkan perkembangan pertumbuhan bisnis.",
                  imageUrl: "/images/why-fundraise-5.svg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[40%] lg:w-[30%] xl:w-[28%] px-4 py-6 m-3 bg-slate-1150 rounded-lg relative bg-[#252525]"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "calc(100% - 10px) calc(100% - 10px)",
                    backgroundSize: "100px",
                  }}
                >
                  <p className="text-md font-semibold z-10">{item.title}</p>
                  <p className="text-xs font-extralight mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Companies Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-5 lg:px-16">
          <h2 className="text-center font-semibold text-xl lg:text-3xl mb-10">
            Dipercaya Oleh Perusahaan Terdepan
          </h2>
          <div className="flex flex-wrap justify-center space-x-8">
            <Image
              src="/images/company1-logo.svg"
              alt="Company 1"
              width={150}
              height={80}
              className="h-20"
            />
            <Image
              src="/images/company2-logo.svg"
              alt="Company 2"
              width={150}
              height={80}
              className="h-20"
            />
            <Image
              src="/images/company3-logo.svg"
              alt="Company 3"
              width={150}
              height={80}
              className="h-20"
            />
            <Image
              src="/images/company4-logo.svg"
              alt="Company 4"
              width={150}
              height={80}
              className="h-20"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-5 lg:px-16">
          <h2 className="text-center font-semibold text-xl lg:text-3xl mb-10">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-5 border rounded-lg shadow-lg">
              <Image
                src="/images/icon1.svg"
                alt="Icon 1"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg mt-5">Trusted Partners</h3>
              <p className="text-sm mt-2">
                We work with trusted partners to provide the best services.
              </p>
            </div>
            <div className="text-center p-5 border rounded-lg shadow-lg">
              <Image
                src="/images/icon2.svg"
                alt="Icon 2"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg mt-5">Expert Guidance</h3>
              <p className="text-sm mt-2">
                Get expert guidance every step of the way.
              </p>
            </div>
            <div className="text-center p-5 border rounded-lg shadow-lg">
              <Image
                src="/images/icon3.svg"
                alt="Icon 3"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg mt-5">Flexible Options</h3>
              <p className="text-sm mt-2">
                Flexible options to suit your investment needs.
              </p>
            </div>
            <div className="text-center p-5 border rounded-lg shadow-lg">
              <Image
                src="/images/icon4.svg"
                alt="Icon 4"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg mt-5">Strong Support</h3>
              <p className="text-sm mt-2">
                Strong support from our team, available 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 xl:py-0">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white h-full xl:h-screen">
          <div className="flex flex-col justify-center items-center h-full">
            <p
              className="text-2xl sm:text-3xl font-semibold text-center sm:w-2/3 xl:w-2/5"
              style={{
                background:
                  "linear-gradient(to left, rgb(1, 25, 41), rgb(0, 196, 143))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bagaimana Cara Menggalang Dana Melalui BICO?
            </p>
            <p className="text-md sm:text-lg text-center w-full sm:w-2/3 xl:w-1/2 font-extralight sm:font-light leading-tight mt-6 mb-10">
              Kami berdedikasi untuk memberdayakan, memelihara, dan memperkuat
              dunia bisnis dan berkontribusi secara aktif terhadap perekonomian
              di Indonesia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { step: "1", text: "Pengenalan & Pertemuan awal" },
                { step: "2", text: "Non-Disclosure Agreement" },
                { step: "3", text: "Uji Kelayakan" },
                { step: "4", text: "Intercompany (IC) Approval" },
                { step: "5", text: "Proses Penggalangan Dana" },
                { step: "6", text: "Proses Transfer Ke Startup *" },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  className="h-[100px] w-auto rounded-xl text-white flex justify-start items-center px-6 my-2 sm:mx-3"
                  style={{
                    backgroundImage:
                      "url(/images/gradient-green.c540a4fb.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-5xl opacity-20 font-semibold">{step}</p>
                  <p className="text-md font-medium ml-4 leading-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#EFEFED]">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-slate-70 h-auto">
          <div className="flex flex-col justify-center items-center h-full">
            <p
              className="text-2xl sm:text-3xl font-semibold text-center sm:w-2/3 xl:w-2/5 pt-14"
              style={{
                background:
                  "-webkit-linear-gradient(left, rgb(1, 25, 41), rgb(0, 196, 143))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arus Investasi
            </p>
            <p className="text-md sm:text-lg text-center w-full sm:w-2/3 xl:w-1/2 font-extralight sm:font-light leading-tight mt-6">
              Ambil langkah pertama menuju fundraising goals Anda. Daftar
              sekarang dan mulai mengatur strategi untuk menggalang dana dan
              mengalokasikannya untuk mewujudkan kesuksesan bisnis Anda.
            </p>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <Image
                loading="lazy"
                className="h-auto w-full object-contain"
                src="/images/investment-flow.webp"
                alt="Investment Flow"
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white h-full sm:h-[70vh]">
          <div className="flex flex-col justify-center items-center sm:items-start h-full py-20 sm:py-0">
            <p
              className="text-2xl lg:text-3xl font-semibold sm:w-1/3 text-center sm:text-start"
              style={{
                background:
                  "-webkit-linear-gradient(left, rgb(1, 25, 41), rgb(0, 196, 143))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mulai Melangkah Bersama BICO
            </p>
            <p className="text-md font-extralight sm:font-light mb-12 mt-2 sm:w-2/5 text-center sm:text-start">
              Ambil langkah pertama menuju fundraising goals Anda. Daftar
              sekarang dan mulai mengatur strategi untuk menggalang dana dan
              mengalokasikannya untuk mewujudkan kesuksesan bisnis Anda.
            </p>
            <div className="flex flex-col lg:flex-row w-full">
              <a href="/contact-us">
                <button className="bg-brand-400 ease-in-out duration-300 w-full sm:w-2/5 lg:w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80 text-white">
                  Hubungi Kami
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://penerbit.icx.id/"
              >
                <button className="mt-3 lg:mt-0 lg:ml-3 border hover:shadow-['0px_3px_0px_15px_brand-400'] hover:shadow-brand-400 ease-in-out duration-300 w-full sm:w-2/5 lg:w-fit px-30 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                  Mulai Menggalang Dana
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="block sm:hidden w-full h-[350px]">
          <Image
            loading="lazy"
            className="w-full h-full object-cover"
            src="/images/onboarding-mockup.webp"
            alt="Onboarding Mockup"
            width={500} // Adjust width as needed
            height={350} // Adjust height as needed
          />
        </div>
        <div className="hidden sm:block absolute left-[50%] top-0 h-full w-[50vw]">
          <Image
            loading="lazy"
            className="w-full h-full object-cover"
            src="/images/onboarding-mockup.webp"
            alt="Onboarding Mockup"
            width={500} // Adjust width as needed
            height={350} // Adjust height as needed
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#171717] block">
        <div
          id="outer-container"
          className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 text-white"
        >
          <div id="inner-container">
            <Image
              loading="lazy"
              className="h-[75px] mb-8 hidden lg:block"
              src="/images/logo.png"
              alt="icx-logo"
              width={180}
              height={40}
            />
            <div className="lg:grid lg:grid-cols-5">
              <div className="space-y-10 lg:hidden">
                <div className="grid grid-cols-2 gap-8 text-xs mt-16 mb-10">
                  <div className="flex flex-col justify-center align-middle">
                    <p className="text-center">Berizin dan diawasi oleh</p>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px]"
                      src="/images/ojk-logo.webp"
                      alt="ojk-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="flex flex-col justify-center align-middle">
                    <p className="text-center">Telah Terdaftar</p>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px]"
                      src="/images/kemkominfo-logo.webp"
                      alt="kemkominfo-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="mt-1 flex flex-col justify-between align-middle">
                    <p className="text-center">Didukung Oleh</p>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px]"
                      src="/images/iso-logo.webp"
                      alt="iso-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="mt-1">
                    <p className="text-center">Anggota Dari</p>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px]"
                      src="/images/aludi-logo.webp"
                      alt="aludi-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Image
                  loading="lazy"
                  className="h-[55px] mb-8 lg:hidden"
                  src="/images/logo-white.webp"
                  alt="icx-logo"
                  width={55}
                  height={55}
                />
                <div className="max-w-sm mb-5">
                  <p className="mb-5 text-sm lg:text-base">
                    PT ICO Pelopor Indonesia
                  </p>
                  <p className="max-w-xs font-extralight text-slate-500 text-xs lg:text-base">
                    BEI Tower 1 Lt. 17, Unit 1709 Jl. Jend. Sudirman Kav. 52-53
                    Senayan, Kby. Baru Jakarta Selatan 12190
                  </p>
                </div>
                <div className="grid grid-cols-3 text-xs lg:text-base">
                  <div>
                    <p className="mb-4 text-sm lg:text-base">Telephone</p>
                    <p className="font-extralight text-slate-500">
                      +62 21 51401627
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-sm lg:text-base">WhatsApp</p>
                    <p className="font-extralight text-slate-500">
                      +6281381862878
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-sm lg:text-base">Email</p>
                    <p className="font-extralight text-slate-500">
                      hello@icx.id
                    </p>
                  </div>
                </div>
                <h2 className="mt-8 text-sm lg:text-base">Social Media</h2>
                <div className="flex space-x-3 mt-3 lg:mt-0">
                  <Image
                    className="object-contain hover:cursor-pointer"
                    src="/images/youtube.webp"
                    alt="youtube"
                    width={32}
                    height={32}
                  />
                  <Image
                    loading="lazy"
                    className="object-contain hover:cursor-pointer"
                    src="/images/instagram.webp"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="space-y-3 flex flex-col font-light mt-7">
                <h2 className="mb-2 text-sm font-normal lg:text-base lg:mt-0">
                  Content
                </h2>
                <a
                  className="hover:cursor-pointer hover:text-slate-500 text-sm lg:text-base"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="hover:cursor-pointer hover:text-slate-500 text-sm lg:text-base"
                  href="/about-us"
                >
                  About Us
                </a>
              </div>
              <div className="space-y-3 font-light flex flex-col mt-7">
                <h2 className="mb-2 font-normal">Tata Kelola</h2>
                <a
                  className="hover:cursor-pointer hover:text-slate-500"
                  href="/tata-kelola"
                >
                  Kebijakan Privasi
                </a>
                <a
                  className="hover:cursor-pointer hover:text-slate-500"
                  href="/tata-kelola"
                >
                  ISMS
                </a>
                <a
                  className="hover:cursor-pointer hover:text-slate-500"
                  href="/tata-kelola"
                >
                  Mitigasi Resiko
                </a>
                <a
                  className="hover:cursor-pointer hover:text-slate-500"
                  href="/tata-kelola"
                >
                  Syarat & Ketentuan
                </a>
                <a
                  className="hover:cursor-pointer hover:text-slate-500"
                  href="/tata-kelola"
                >
                  SLA
                </a>
              </div>
              <div className="space-y-10">
                <div className="flex flex-col justify-center">
                  <h2 className="mb-5 mx-auto lg:mx-0 mt-10 md:mt-7">
                    Get The App
                  </h2>
                  <div className="lg:flex-col flex justify-evenly">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=id.icx"
                    >
                      <Image
                        className="lg:h-[55px] w-[150px] mx-auto lg:mx-0 object-contain"
                        src="/images/google-play.webp"
                        alt="google play"
                        width={150}
                        height={55}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/icx-indonesia/id6448935038"
                    >
                      <Image
                        loading="lazy"
                        className="lg:h-[55px] w-[150px] mx-auto lg:mx-0 object-contain"
                        src="/images/app-store.webp"
                        alt="app store"
                        width={150}
                        height={55}
                      />
                    </a>
                  </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-3 text-xs hidden">
                  <div>
                    <p className="text-center text-xs">
                      Berizin dan diawasi oleh
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-xs">Telah Terdaftar</p>
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      className="h-[55px] object-contain"
                      src="/images/ojk-logo.webp"
                      alt="ojk-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px]"
                      src="/images/kemkominfo-logo.webp"
                      alt="kemkominfo-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div>
                    <p className="text-center text-xs">Didukung Oleh</p>
                  </div>
                  <div>
                    <p className="text-center text-xs">Anggota Dari</p>
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px] object-contain"
                      src="/images/iso-logo.webp"
                      alt="iso-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      className="mx-auto h-[55px] object-contain"
                      src="/images/aludi-logo.webp"
                      alt="aludi-logo"
                      width={55}
                      height={55}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-5 mt-20 space-y-2">
                <h2>Disclaimer</h2>
                <p className="text-slate-500 font-light hidden lg:block text-sm">
                  <span className="font-medium">PT ICO Pelopor Indonesia </span>
                  (selanjutnya disebut “BICO”) adalah Perusahaan yang didirikan
                  berdasarkan Hukum Indonesia yang bertindak sebagai
                  Penyelenggara Layanan Urun Dana Melalui Penawaran Efek
                  Berbasis Teknologi Informasi yang telah berizin dan diawasi
                  oleh Otoritas Jasa Keuangan (OJK) berdasarkan Keputusan Dewan
                  Komisioner OJK Nomor Kep-068/D.04/2020 tentang Pemberian Izin
                  Usaha Penyelenggara Layanan Urun Dana Melalui Penawaran Efek
                  Berbasis Teknologi Informasi PT Numex Teknologi Indonesia.
                  Kegiatan Investasi melalui Layanan Urun Dana memiliki tingkat
                  risiko tinggi, Pemodal diwajibkan telah membaca Syarat dan
                  Ketentuan serta seluruh dokumen yang dipaparkan oleh BICO
                  melalui website dan/atau aplikasi BICO. BICO tidak pernah
                  memaksa Pemodal untuk melakukan pembelian Efek yang sedang
                  ditawarkan. Segala transaksi yang dilakukan oleh Pemodal
                  dilakukan oleh Pemodal dengan kesadaran penuh dan tanpa
                  paksaan dari Pihak manapun. BICO berperan sebagai
                  Penyelenggara Layanan Urun Dana dalam melakukan kegiatan
                  Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi
                  Informasi yang mempertemukan antara Penerbit dengan Pemodal.
                  OJK bertindak sebagai regulator dan pemberi izin serta
                  pengawas, tidak sebagai penjamin investasi. Segala risiko
                  menjadi tanggung jawab penuh dari Pemodal. Pemodal telah
                  menyadari secara penuh bahwa terdapat sejumlah risiko dalam
                  melakukan investasi pada layanan urun dana. Oleh karena itu,
                  BICO TIDAK BERTANGGUNG JAWAB terhadap kerugian dan gugatan
                  hukum serta segala bentuk risiko lain yang timbul di kemudian
                  hari. Sejumlah risiko tersebut diantaranya:
                </p>
                <p className="text-slate-500 font-light block lg:hidden text-xs">
                  <span className="font-medium">PT ICO Pelopor Indonesia</span>
                  (“BICO” atau “Penyelenggara”) hadir dalam rangka mendukung
                  program pemerintah di bidang perumahan dengan mengembangkan
                  bisnis layanan urun dana bersama, dengan mempertemukan Pemodal
                  dan pihak pengembang properti (“Penerbit”) (selanjutnya
                  Pemodal dan Penerbit disebut bersama-sama sebagai “Pengguna”).
                  Pada layanan urun dana ini, timbulnya hubungan perdata terjadi
                  apabila Pemodal sepakat untuk membeli saham yang ditawarkan
                  oleh Penerbit, sehingga segala risiko yang timbul dari
                  hubungan tersebut akan menjadi tanggung jawab masing-masing
                  pihak. Risiko yang timbul dari hak sebagai Pemodal untuk
                  menerima dividen dari Penerbit merupakan risiko yang wajib
                  ditanggung oleh Pemodal sesuai kebijakan dividen Penerbit.
                  BICO hanya bertindak sebagai layanan urun dana yang
                  mempertemukan antara Pemodal dengan Penerbit, dan tidak
                  bertindak sebagai pelaku usaha yang menjalankan usaha untuk
                  mengumpulkan dana terkait atau pengelola investasi (Penerbit).
                  Sesuai dengan Pasal 23 Peraturan Otoritas Jasa Keuangan No. 37
                  Tahun 2018 tentang Layanan Urun Dana melalui Penawaran Saham
                  Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK
                  37/2018”), kami menyatakan bahwa:
                </p>
                <ul className="list-disc space-y-3 text-[10px] text-slate-500 lg:hidden text-xs">
                  <li>
                    a. OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN
                    MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                    MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN
                    URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN
                    HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.
                  </li>
                  <li>
                    b. INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU
                    MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA
                    TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN
                    PENYELENGGARA.
                  </li>
                  <li>
                    c. PENERBIT SAHAM DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI
                    MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS
                    KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN
                    DANA INI.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-5">
                <p className="text-[8px] text-slate-500 lg:text-xs">
                  © 2023 PT ICO Pelopor Indonesia. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
