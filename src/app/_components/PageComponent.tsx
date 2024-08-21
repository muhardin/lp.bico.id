import Image from "next/image";
import Link from "next/link";
const PageComponent = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-black text-white min-h-screen xl:h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="flex justify-center items-center lg:items-start flex-col xl:h-full py-24 lg:mt-[7vh]">
            <p className="font-semibold text-2xl lg:text-4xl xl:text-5xl text-center lg:text-start">
              Tingkatkan Level
              <br />
              Investasi Anda
            </p>
            <p className="text-md lg:text-lg w-full sm:w-2/3 font-extralight sm:font-light leading-snug mt-4 mb-8 sm:mb-10 text-center lg:text-start">
              Dapatkan kesempatan berinvestasi dengan proyek bisnis terpercaya
              Anda, hari ini.
            </p>
            <div className="block lg:hidden mb-10">
              <Image
                loading="lazy"
                className="h-auto w-[170px] sm:w-[250px] object-contain"
                src="/images/iphone-mockup.webp"
                alt="iphone-mockup"
                width={250}
                height={250}
              />
            </div>
            <Link href="/contact-us">
              <button className="bg-brand-400 ease-in-out duration-300 w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                Hubungi Kami
              </button>
            </Link>
            <div className="flex flex-row mt-4 sm:mt-6 lg:mt-10 items-center justify-center lg:justify-start">
              <p className="text-sm sm:text-md">Available on</p>
              <Link
                href="https://play.google.com/store/apps/details?id=id.icx"
                target="_blank"
              >
                <Image
                  loading="lazy"
                  className="h-auto w-[90px] sm:w-[150px] object-contain ml-3 hover:opacity-80 cursor-pointer ease-in-out duration-300"
                  src="/images/google-play.webp"
                  alt="google-play"
                  width={150}
                  height={55}
                />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/icx-indonesia/id6448935038"
                target="_blank"
              >
                <Image
                  loading="lazy"
                  className="h-auto w-[90px] sm:w-[150px] object-contain ml-3 hover:opacity-80 cursor-pointer ease-in-out duration-300"
                  src="/images/app-store.webp"
                  alt="app-store"
                  width={150}
                  height={55}
                />
              </Link>
            </div>
          </div>
          <div className="lg:block hidden h-[600px] w-auto items-center justify-center mr-[70px] lg:mt-[7vh]">
            <Image
              loading="lazy"
              className="h-full w-full object-contain"
              src="/images/iphone-mockup.webp"
              alt="iphone-mockup"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white">
          <div className="flex flex-col items-center justify-center pt-10 pb-20">
            <div className="flex flex-col xl:flex-row items-center justify-between">
              <p className="text-xl xl:w-1/3 text-center xl:text-start font-semibold xl:font-normal">
                Perusahaan yang tercatat sukses melakukan pendanaan bersama ICX
              </p>
              <div className="pt-5 lg:pt-6 xl:p-0 w-full sm:w-2/3 xl:w-3/5">
                <Image
                  className="h-full w-full object-contain"
                  src="/images/company-list.webp"
                  alt="company-list"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white h-full sm:h-screen relative">
          <div className="flex flex-row justify-between items-center h-full pb-20 sm:pb-0">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <p className="text-xl font-medium">
                    Kata Mereka tentang Kami
                  </p>
                  <Image
                    loading="lazy"
                    className="w-[22px] ml-2"
                    src="/images/message-icon.svg"
                    alt="message-icon"
                    width={22}
                    height={22}
                  />
                </div>
                <p className="text-sm">
                  Dengar apa yang dikatakan orang tentang ICX
                </p>
              </div>
              <div className="w-full relative my-10 block sm:hidden">
                <Image
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover"
                  src="/images/purple-gradient.webp"
                  alt="background-purple"
                  width={640}
                  height={360}
                />
                <Image
                  loading="lazy"
                  className="absolute top-[50px] left-[20%] w-[60%] h-full object-cover rounded-xl"
                  src="/images/vilo.webp"
                  alt="testimony"
                  width={360}
                  height={360}
                />
              </div>
              <div className="flex flex-col mb-5">
                <div>
                  <div className="h-auto xl:h-[300px] sm:w-1/2 flex items-center pt-8 pb-4">
                    <p className="text-lg xl:text-xl font-medium sm:pr-8">
                      “Bekerjasama dengan ICX telah sangat membantu kami.
                      Melalui platform mereka, kami dapat memperluas bisnis dan
                      jangkauan kami. Prosesnya lancar, timnya membantu, dan
                      kami menghargai dukungan mereka dalam mengumpulkan dana
                      yang kami butuhkan untuk terus tumbuh dan menyediakan
                      gelato berkualitas kepada pelanggan kami.”
                    </p>
                  </div>
                  <p className="text-md font-medium">Vincent Kusuma</p>
                  <p className="text-md">Vilo Gelato</p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-5">
                <div className="w-[50px] h-[50px] ease-in-out duration-300 cursor-pointer hover:shadow rounded-full">
                  <Image
                    loading="lazy"
                    className="w-full h-full"
                    src="/images/arrow-back.svg"
                    alt="arrow-back"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="w-[50px] h-[50px] ease-in-out duration-300 cursor-pointer hover:shadow rounded-full ml-3">
                  <Image
                    loading="lazy"
                    className="w-full h-full"
                    src="/images/arrow-next.svg"
                    alt="arrow-next"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="hidden lg:flex h-[4px] bg-brand-20 w-[280px] ml-5 flex-row">
                  <div className="h-[4px] bg-transparent w-[70px]"></div>
                  <div className="h-[4px] bg-transparent w-[70px]"></div>
                  <div className="h-[4px] bg-brand-400 w-[70px]"></div>
                  <div className="h-[4px] bg-transparent w-[70px]"></div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute left-[60%] top-0 h-full w-full">
              <Image
                loading="lazy"
                className="w-full h-full object-cover"
                src="/images/purple-gradient.webp"
                alt="background-screen-purple"
                width={640}
                height={360}
              />
            </div>
            <div className="hidden sm:block absolute left-[55%] bottom-[100px] h-auto w-[300px] xl:w-[380px]">
              <Image
                loading="lazy"
                className="w-full h-full object-contain"
                src="/images/vilo.webp"
                alt="testimony"
                width={360}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-black text-white h-full lg:h-screen">
          <div className="flex flex-col justify-center items-center h-full py-20 lg:py-0">
            <p className="text-2xl sm:text-3xl font-semibold text-center">
              Cara Baru Berinvestasi
            </p>
            <p className="text-md sm:text-lg text-center w-full lg:w-2/3 xl:w-1/2 font-extralight sm:font-light leading-tight mt-6 mb-10">
              Dengan ICX, Anda sekarang memiliki cara untuk berinvestasi di
              startup yang menjanjikan dan bisnis swasta. Inilah yang memberi
              kita keunggulan.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:w-11/12">
              <div className="flex flex-row items-center py-3 sm:py-5 lg:px-5">
                <Image
                  loading="lazy"
                  className="h-auto w-[70px] lg:w-[130px] object-contain"
                  src="/images/why-1.webp"
                  alt="investment-image"
                  width={130}
                  height={130}
                />
                <div className="ml-4 sm:ml-7">
                  <p className="text-sm sm:text-md font-medium">
                    Mudah dan Efektif
                  </p>
                  <p className="text-xs sm:text-sm font-extralight mt-2">
                    ICX memberi Anda cara yang sederhana dan aman untuk
                    berinvestasi di berbagai bisnis di Indonesia, baik yang
                    sudah mapan maupun startup.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center py-3 sm:py-5 lg:px-5">
                <Image
                  loading="lazy"
                  className="h-auto w-[70px] lg:w-[130px] object-contain"
                  src="/images/why-2.webp"
                  alt="investment-image"
                  width={130}
                  height={130}
                />
                <div className="ml-4 sm:ml-7">
                  <p className="text-sm sm:text-md font-medium">
                    Realisasi Bisnis Impian Anda
                  </p>
                  <p className="text-xs sm:text-sm font-extralight mt-2">
                    Anda sekarang dapat berkontribusi pada bisnis yang Anda
                    percayai melalui Equity Crowdfunding.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center py-3 sm:py-5 lg:px-5">
                <Image
                  loading="lazy"
                  className="h-auto w-[70px] lg:w-[130px] object-contain"
                  src="/images/why-3.webp"
                  alt="investment-image"
                  width={130}
                  height={130}
                />
                <div className="ml-4 sm:ml-7">
                  <p className="text-sm sm:text-md font-medium">
                    Kemudahan Akses Menuju Komunitas Investor
                  </p>
                  <p className="text-xs sm:text-sm font-extralight mt-2">
                    Buka dunia peluang dengan menjadi bagian dari komunitas yang
                    bersemangat dengan berbagai orang yang memiliki cinta yang
                    sama terhadap pertumbuhan dan investasi.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center py-3 sm:py-5 lg:px-5">
                <Image
                  loading="lazy"
                  className="h-auto w-[70px] lg:w-[130px] object-contain"
                  src="/images/why-4.webp"
                  alt="investment-image"
                  width={130}
                  height={130}
                />
                <div className="ml-4 sm:ml-7">
                  <p className="text-sm sm:text-md font-medium">
                    Evaluasi Perkembangan Aset dengan Lebih Mudah
                  </p>
                  <p className="text-xs sm:text-sm font-extralight mt-2">
                    Anda dapat memantau dan bahkan memiliki pendapat terhadap
                    manajemen bisnis yang Anda investasikan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white h-auto">
          <div className="flex flex-col justify-center items-center py-20 sm:py-10">
            <p className="text-2xl sm:text-3xl font-semibold text-center sm:w-2/3 xl:w-2/5">
              Kami Telah Memberdayakan Beragam Proyek Bisnis dan Berkontribusi
              secara Aktif pada Perekonomian Indonesia
            </p>
            <p className="text-md sm:text-lg text-center w-full lg:w-2/3 sm:w-1/2 font-extralight sm:font-light leading-tight mt-6 mb-10">
              Sebelumnya dikenal sebagai LandX yang kini mengawali era baru
              sebagai ICX, kami telah menciptakan transformasi positif dalam
              pergerakan industri. Dengan keberhasilan mewujudkan proyek-proyek
              inovatif, kami tidak hanya membuka peluang pekerjaan namun juga
              memberikan kontribusi signifikan pada perkembangan ekonomi
              Indonesia.
            </p>
            <div className="flex flex-col items-center lg:flex-row xl:w-10/12">
              <Image
                loading="lazy"
                className="h-auto w-full sm:w-1/2 object-contain mb-6 lg:mb-0 lg:p-5"
                src="/images/total-fundraised.webp"
                alt="total-fundraised"
                width={640}
                height={360}
              />
              <Image
                loading="lazy"
                className="h-auto w-full sm:w-1/2 object-contain lg:p-5"
                src="/images/total-employed.webp"
                alt="total-employed"
                width={640}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] relative overflow-hidden">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-slate-1500 text-white h-full sm:h-[70vh]">
          <div className="flex flex-col justify-center items-center sm:items-start h-full py-20 sm:py-0">
            <p className="text-2xl lg:text-3xl font-semibold sm:w-1/3 text-center sm:text-start">
              Siap ciptakan peluang investasi impian bersama kami?
            </p>
            <p className="text-md lg:text-lg font-extralight sm:font-light mb-12 mt-2 sm:w-1/3 text-center sm:text-start">
              Temukan peluang investasi menarik dan jadilah bagian dari kisah
              sukses besar berikutnya.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-400 ease-in-out duration-300 w-fit px-20 lg:px-12 py-2 text-sm rounded hover:opacity-80">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
        <div className="block sm:hidden w-full h-[350px]">
          <Image
            loading="lazy"
            className="w-[100%] h-full object-cover"
            src="/images/splashscreen-mockup.webp"
            alt="background screen"
            width={640}
            height={360}
          />
        </div>
        <div className="hidden sm:block absolute left-[50%] top-0 h-full w-[50vw]">
          <Image
            loading="lazy"
            className="w-full h-full object-cover"
            src="/images/splashscreen-mockup.webp"
            alt="background screen"
            width={640}
            height={360}
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 bg-white">
          <div className="flex flex-col justify-center items-center py-20 sm:py-10">
            <p className="text-lg sm:text-2xl font-semibold w-full sm:w-3/5 xl:w-2/5 text-center">
              Platform Crowdfunding Terbesar di Indonesia & Telah Diliput oleh:
            </p>
            <div className="hidden sm:block w-full xl:w-11/12 mt-6">
              <Image
                loading="lazy"
                className="h-full w-full object-contain"
                src="/images/medias.webp"
                alt="medias"
                width={640}
                height={360}
              />
            </div>
            <div className="block sm:hidden w-full mt-6">
              <Image
                loading="lazy"
                className="h-full w-full object-contain"
                src="/images/medias-mobile.webp"
                alt="medias-mobile"
                width={640}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
