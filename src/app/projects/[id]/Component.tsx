import Image from "next/image";
import Link from "next/link";

const Component = () => {
  return (
    <div className="bg-white">
      <Image
        className="h-[35vh] w-full object-cover"
        src="/images/projects/cyberpunk-bitcoin-illustration.jpg"
        alt="ARCO Cover"
        width={1920} // Adjust width as needed
        height={200} // Adjust height as needed
      />
      <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 relative">
        <Image
          className="h-[100px] w-[100px] rounded-full object-cover absolute top-[-50px]"
          src="/images/projects/3xARCO-company-logo.png"
          alt="Company Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-10 mt-14 lg:mt-4">
            <Link href="/projects">
              <div className="flex flex-row items-center mb-4 hover:underline cursor-pointer">
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
                  className="text-slate-600 text-sm w-4 mr-2"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <p className="text-slate-600 font-light text-sm">
                  Back to Projects
                </p>
              </div>
            </Link>
            <div className="mb-8">
              <div className="flex flex-row items-center">
                <p className="text-md font-semibold">ARCO</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dot"
                >
                  <circle cx="12.1" cy="12.1" r="1"></circle>
                </svg>
                <p className="text-md">COFFEE SHOPs</p>
              </div>
              <p className="text-3xl mt-3">Arah Kopi</p>
              <p className="text-lg font-light mt-1">
                PT. Anugerah Ragam Adiboga Harum
              </p>
            </div>
            <div className="mb-12">
              <div className="border rounded-lg px-4 py-7 sm:w-5/6 lg:w-full xl:w-3/4 shadow-sm">
                <p className="font-semibold text-md text-[#EB760A]">
                  Sisa Pendanaan Rp 0
                </p>
                <div className="flex flex-row items-center mb-3">
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
                    className="w-4 text-[#EB760A]"
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
                  <p className="font-medium text-sm ml-1 text-[#EB760A]">
                    Pendanaan Ditutup
                  </p>
                </div>
                <p className="text-sm text-slate-600 font-light">
                  Target Pendanaan Rp 4.235.000.000
                </p>
                <p className="text-sm text-slate-600 font-light">
                  Minimum Investasi Rp 1.000.000
                </p>
              </div>
            </div>
            <div className="mb-12">
              <p className="text-xl mb-4">Highlights</p>
              {[
                "Mesin Kopi dengan Standar Internasional",
                "Produk Lokal dengan Kualitas Terbaik",
                "Manajemen Kemitraan Bisnis yang Kuat",
                "Jangkauan Pangsa Pasar yang Luas",
                "Gesit Berinovasi & Kolaborasi",
              ].map((highlight, index) => (
                <div className="flex flex-row items-center mb-2" key={index}>
                  <div className="flex justify-center items-center bg-brand-300 rounded-full min-w-[30px] w-[30px] h-[30px] bg-green-400">
                    <p className="text-sm text-white">{index + 1}</p>
                  </div>
                  <p className="text-sm leading-snug line-clamp-2 ml-3">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <div className="mb-12">
              <p className="text-xl mb-4">Pitchdeck</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://core.icx.id/dl/17171d/s/123e3c/r/R8yg7dEWYGFVUDNx8RSf/s/cd515d/r/pSXHpqbbSWmCUFzO2aZl"
              >
                <div className="bg-[#F8F9FA] px-5 py-4 rounded-sm hover:shadow-sm sm:w-5/6 flex flex-row items-center mb-4">
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
                    className="text-brand-500 w-4"
                  >
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                  <p className="text-sm font-light ml-3">Kinerja Aset</p>
                </div>
              </a>
            </div>
            <div className="mb-12">
              <p className="text-xl mb-4">Founder</p>
              {[
                {
                  name: "Andreas Surya Raharjo",
                  role: "Komisaris",
                  image:
                    "https://storage.googleapis.com/icx-bucket-production/ARCO-founder-1.png",
                  description:
                    "Sebagai salah satu pengusaha di Indonesia, Andreas memiliki pengalaman diberbagai bidang bisnis, mulai dari bisnis retail pakaian & busana yang dijalankan sejak 2014, hingga mendirikan kedai kopi Coldnbrew dan Arah Kopi. Dedikasi yang sangat tinggi saat menjalankan bisnis, menjadikan Andreas selalu berusaha untuk tidak memberikan excuse atas kualitas produk dan selalu menanamkan semangat positif melalui produk kopi Indonesia.",
                },
                {
                  name: "Jackson",
                  role: "Direktur",
                  image:
                    "https://storage.googleapis.com/icx-bucket-production/ARCO-founder-2.png",
                  description:
                    "Mempunyai pengalaman lebih dari 10 tahun dalam dunia bisnis, Jackson memiliki keahlian di bidang networking, kepemimpinan, dan pengembangan produk. Keahlian dalam pengelolaan strategi penjualan dan pemasaran yang sangat baik, menjadikannya dipercaya sebagai direktur utama di berbagai perusahaan seperti Champoil, Urbanica, City Guard, dan Arah Kopi. Keahliannya di bidang F&B, berhasil membuatnya dipercaya sebagai komisaris di Trattoria Restaurant Puri sejak tahun 2015 dan berhasil mendirikan beberapa bar & resto seperti Momento Resto & Bar dan D.O.J Juice Bar.",
                },
              ].map((founder, index) => (
                <div className="flex flex-row mb-4" key={index}>
                  <div className="h-[50px] min-w-[50px] w-[50px] mr-3">
                    <Image
                      className="h-full w-full object-cover rounded-full"
                      src={founder.image}
                      alt={founder.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">{founder.name}</p>
                    <p className="text-sm">{founder.role}</p>
                    <p className="text-sm text-[#868E96] leading-snug font-light">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
