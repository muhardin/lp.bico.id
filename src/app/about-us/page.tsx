import Image from "next/image";

const page = () => {
  return (
    <section>
      <div>
        <div
          className="h-[105vh] xl:h-[120vh]"
          style={{
            backgroundImage: 'url("/images/about-us-gradient.c4a1ffe8.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 text-white h-[105vh] xl:h-[120vh]">
            <div className="flex justify-center items-start flex-col h-[105vh] xl:h-[120vh] pb-[25%] lg:pb-0">
              <p className="font-semibold text-2xl lg:text-4xl xl:text-4xl lg:text-center lg:text-start xl:w-2/5">
                Kami menyediakan Anda dengan cara baru untuk berinvestasi pada
                bisnis yang Anda percayai
              </p>
              <div className="flex flex-col xl:flex-row w-full mt-4">
                <p className="w-[400px] text-md lg:text-lg w-full font-thin sm:font-light leading-snug xl:mt-4 mb-8 lg:mb-10 lg:text-center lg:text-start">
                  Platform kami memfasilitasi perusahaan swasta yang terkurasi
                  dalam mengumpulkan dana dari investor dan pertukaran saham,
                  menjadi jembatan antara bisnis dan masyarakat
                </p>
                <p className="xl:ml-[200px] w-[400px] text-md lg:text-lg w-full font-thin sm:font-light leading-snug xl:mt-4 mb-8 lg:mb-10 lg:text-center lg:text-start">
                  Dengan BICO, kami berusaha memberdayakan investor umum dan
                  bisnis swasta untuk tumbuh bersama
                </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full">
                <a href="/contact-us">
                  <button className="bg-brand-400 ease-in-out duration-300 w-full sm:w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                    Hubungi Kami
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://penerbit.icx.id/"
                >
                  <button className="sm:ml-3 mt-3 sm:mt-0 border hover:shadow-['0px_3px_0px_15px_brand-400'] hover:shadow-brand-400 ease-in-out duration-300 w-full sm:w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                    Mulai Menggalang Dana
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 text-white h-full xl:h-[460px]">
            <div className="flex justify-center items-center xl:relative py-20 xl:py-0">
              <div className="w-full sm:w-2/3 xl:w-[800px] h-[240px] sm:h-[300px] lg:h-[400px] xl:h-[460px] xl:absolute xl:top-[-200px]">
                <iframe
                  src="https://www.youtube.com/embed/K1fFQqrurV4?si=msEbMQlmjN3DUzvD?autoplay=1"
                  title="Unlocking Your Next Level Investment Through BICO"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  height="100%"
                  width="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 mt-44">
          <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 h-full xl:h-screen">
            <div className="flex flex-col xl:flex-row justify-between items-center h-full w-full py-20 sm:py-32 xl:py-0">
              <div className="flex flex-col w-full xl:pr-40">
                <p className="text-2xl font-semibold mb-10">Our Story</p>
                <div className="border-y border-slate-300 w-full flex flex-col">
                  <div className="border-b border-slate-300 flex flex-row items-center py-6">
                    <div className="text-lg font-semibold border-r border-slate-300 pr-3 sm:pr-5">
                      2019
                    </div>
                    <div className="text-md pl-3 sm:pl-5">
                      LandX diluncurkan sebagai platform pendanaan sekuritas
                    </div>
                  </div>
                  <div className="border-b border-slate-300 flex flex-row items-center py-6">
                    <div className="text-lg font-semibold border-r border-slate-300 pr-3 sm:pr-5">
                      2020
                    </div>
                    <div className="text-md pl-3 sm:pl-5">
                      Menerima lisensi Equity Crowdfunding (ECF) dari Otoritas
                      Jasa Keuangan Indonesia atau yang biasa dikenal sebagai
                      OJK
                    </div>
                  </div>
                  <div className="border-b border-slate-300 flex flex-row items-center py-6">
                    <div className="text-lg font-semibold border-r border-slate-300 pr-3 sm:pr-5">
                      2021
                    </div>
                    <div className="text-md pl-3 sm:pl-5">
                      Mencapai total penggalangan dana sebesar 150 miliar IDR
                      dalam Ekuitas
                    </div>
                  </div>
                  <div className="border-b border-slate-300 flex flex-row items-center py-6">
                    <div className="text-lg font-semibold border-r border-slate-300 pr-3 sm:pr-5">
                      2022
                    </div>
                    <div className="text-md pl-3 sm:pl-5">
                      Menerima penghargaan Platform Pendanaan Terbaik dari ALUDI
                      &amp; Dunia Fintech sambil mencapai lebih dari 89.000
                      pengguna dan membantu menaikkan lebih dari 1750+ tenaga
                      kerja
                    </div>
                  </div>
                  <div className="border-b border-slate-300 flex flex-row items-center py-6">
                    <div className="text-lg font-semibold border-r border-slate-300 pr-3 sm:pr-5">
                      2023
                    </div>
                    <div className="text-md pl-3 sm:pl-5">
                      LandX melakukan rebranding menjadi Indonesia Crowdfunding
                      Exchange (BICO)
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-2/3 xl:w-1/4 h-[300px] sm:h-[400px] xl:h-[500px] mt-10 xl:mt-0">
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-cover h-full w-full rounded-lg"
                  src="/images/desktop-mockup.webp"
                  alt="Desktop Mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
