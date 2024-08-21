import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] block">
      <div
        id="outer-container"
        className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 text-white"
      >
        <div id="inner-container" className="">
          <Image
            loading="lazy"
            className="h-[80px] mb-8 hidden lg:block"
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
                src="/images/logo.png"
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
                  <p className="font-extralight text-slate-500">hello@icx.id</p>
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
              <Link href="/">
                <p className="hover:cursor-pointer hover:text-slate-500 text-sm lg:text-base">
                  Home
                </p>
              </Link>
              <Link href="/about-us">
                <p className="hover:cursor-pointer hover:text-slate-500 text-sm lg:text-base">
                  About Us
                </p>
              </Link>
            </div>
            <div className="space-y-3 font-light flex flex-col mt-7">
              <h2 className="mb-2 font-normal">Tata Kelola</h2>
              <Link href="/tata-kelola">
                <p className="hover:cursor-pointer hover:text-slate-500">
                  Kebijakan Privasi
                </p>
              </Link>
              <Link href="/tata-kelola">
                <p className="hover:cursor-pointer hover:text-slate-500">
                  ISMS
                </p>
              </Link>
              <Link href="/tata-kelola">
                <p className="hover:cursor-pointer hover:text-slate-500">
                  Mitigasi Resiko
                </p>
              </Link>
              <Link href="/tata-kelola">
                <p className="hover:cursor-pointer hover:text-slate-500">
                  Syarat & Ketentuan
                </p>
              </Link>
              <Link href="/tata-kelola">
                <p className="hover:cursor-pointer hover:text-slate-500">SLA</p>
              </Link>
            </div>
            <div className="space-y-10">
              <div className="flex flex-col justify-center">
                <h2 className="mb-5 mx-auto lg:mx-0 mt-10 md:mt-7">
                  Get The App
                </h2>
                <div className="lg:flex-col flex justify-evenly">
                  <Link
                    href="https://play.google.com/store/apps/details?id=id.icx"
                    target="_blank"
                  >
                    <Image
                      className="lg:h-[55px] w-[150px] mx-auto lg:mx-0 object-contain"
                      src="/images/google-play.webp"
                      alt="google play"
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
                      className="lg:h-[55px] w-[150px] mx-auto lg:mx-0 object-contain"
                      src="/images/app-store.webp"
                      alt="app store"
                      width={150}
                      height={55}
                    />
                  </Link>
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
                    className="mx-auto h-[55px]"
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
                berdasarkan Hukum Indonesia yang bertindak sebagai Penyelenggara
                Layanan Urun Dana Melalui Penawaran Efek Berbasis Teknologi
                Informasi yang telah berizin dan diawasi oleh Otoritas Jasa
                Keuangan (OJK) berdasarkan Keputusan Dewan Komisioner OJK Nomor
                Kep-068/D.04/2020 tentang Pemberian Izin Usaha Penyelenggara
                Layanan Urun Dana Melalui Penawaran Efek Berbasis Teknologi
                Informasi PT Numex Teknologi Indonesia. Kegiatan Investasi
                melalui Layanan Urun Dana memiliki tingkat risiko tinggi,
                Pemodal diwajibkan telah membaca Syarat dan Ketentuan serta
                seluruh dokumen yang dipaparkan oleh BICO melalui website
                dan/atau aplikasi BICO. BICO tidak pernah memaksa Pemodal untuk
                melakukan pembelian Efek yang sedang ditawarkan. Segala
                transaksi yang dilakukan oleh Pemodal dilakukan oleh Pemodal
                dengan kesadaran penuh dan tanpa paksaan dari Pihak manapun.
                BICO berperan sebagai Penyelenggara Layanan Urun Dana dalam
                melakukan kegiatan Penawaran Efek Melalui Layanan Urun Dana
                Berbasis Teknologi Informasi yang mempertemukan antara Penerbit
                dengan Pemodal. OJK bertindak sebagai regulator dan pemberi izin
                serta pengawas, tidak sebagai penjamin investasi. Segala risiko
                menjadi tanggung jawab penuh dari Pemodal. Pemodal telah
                menyadari secara penuh bahwa terdapat sejumlah risiko dalam
                melakukan investasi pada layanan urun dana. Oleh karena itu,
                BICO TIDAK BERTANGGUNG JAWAB terhadap kerugian dan gugatan hukum
                serta segala bentuk risiko lain yang timbul di kemudian hari.
                Sejumlah risiko tersebut diantaranya:
              </p>
              <p className="text-slate-500 font-light block lg:hidden text-xs">
                <span className="font-medium">PT ICO Pelopor Indonesia</span>
                (“BICO” atau “Penyelenggara”) hadir dalam rangka mendukung
                program pemerintah di bidang perumahan dengan mengembangkan
                bisnis layanan urun dana bersama, dengan mempertemukan Pemodal
                dan pihak pengembang properti (“Penerbit”) (selanjutnya Pemodal
                dan Penerbit disebut bersama-sama sebagai “Pengguna”). Pada
                layanan urun dana ini, timbulnya hubungan perdata terjadi
                apabila Pemodal sepakat untuk membeli saham yang ditawarkan oleh
                Penerbit, sehingga segala risiko yang timbul dari hubungan
                tersebut akan menjadi tanggung jawab masing-masing pihak. Risiko
                yang timbul dari hak sebagai Pemodal untuk menerima dividen dari
                Penerbit merupakan risiko yang wajib ditanggung oleh Pemodal
                sesuai kebijakan dividen Penerbit. BICO hanya bertindak sebagai
                layanan urun dana yang mempertemukan antara Pemodal dengan
                Penerbit, dan tidak bertindak sebagai pelaku usaha yang
                menjalankan usaha untuk mengumpulkan dana terkait atau pengelola
                investasi (Penerbit). Sesuai dengan Pasal 23 Peraturan Otoritas
                Jasa Keuangan No. 37 Tahun 2018 tentang Layanan Urun Dana
                melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity
                Crowdfunding (“POJK 37/2018”), kami menyatakan bahwa:
              </p>
              <ul className="list-disc space-y-3 text-[10px] text-slate-500 lg:hidden text-xs">
                <li>
                  a. OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN
                  MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                  MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN
                  URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL
                  TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.
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
  );
};

export default Footer;
