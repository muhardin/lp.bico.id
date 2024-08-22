import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
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
                  Contact Us
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

      {/* <div className="bg-white">
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
      </div> */}

      {/* Portfolio Kami Section */}
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
      <div className="bg-white pt-24 pb-24 sm:pb-10">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-2xl sm:text-3xl font-semibold text-center sm:w-2/3 xl:w-2/5">
              Portfolio Kami
            </p>
            <p className="text-md sm:text-lg text-center w-full sm:w-2/3 xl:w-1/2 font-extralight sm:font-light leading-tight mt-6">
              Kami berdedikasi memelihara, mempertkuat, dan memberdayakan dunia
              bisnis yang berkontribusi secara aktif terhadap perekonomian di
              Indonesia.
            </p>
            <div className="w-full sm:w-1/2 mt-6">
              <Image
                className="h-auto w-full object-contain"
                src="/images/portfolio.webp"
                alt="Portfolio"
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>
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
      {/* <section className="bg-white py-16">
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
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="bg-gray-50 py-16">
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
      </section> */}
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
                  Contact Us
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
    </div>
  );
};

export default LandingPage;
