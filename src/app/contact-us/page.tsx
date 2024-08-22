import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto p-5 sm:p-8 lg:p-12 xl:p-16 h-screen">
        <form className="h-full">
          <div className="flex flex-col justify-between h-full lg:w-[40vw] pt-16">
            <div>
              <div className="flex flex-row items-center hover:underline cursor-pointer">
                <Image
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-[20px] h-[20px] mr-2"
                  src="/images/arrow-back.svg"
                  alt="arrow-back"
                />
                <p className="text-sm font-light">Back</p>
              </div>
              <p
                className="mt-5 text-xl xl:text-3xl font-semibold"
                style={{
                  background:
                    "-webkit-linear-gradient(right, rgb(1, 25, 41), rgb(0, 196, 143))",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Informasi Pribadi
              </p>
              <div>
                <div className="flex flex-col mt-5">
                  <label className="text-xs font-semibold">Nama Lengkap</label>
                  <input
                    name="fullName"
                    className="py-2 border-b-2 text-sm font-light"
                    placeholder="Masukkan Nama Lengkap Anda"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="text-xs font-semibold">Alamat Email</label>
                  <input
                    name="email"
                    className="py-2 border-b-2 text-sm font-light"
                    placeholder="Masukkan Alamat Email Anda"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="text-xs font-semibold">Nomor Telepon</label>
                  <input
                    name="phoneNumber"
                    className="py-2 border-b-2 text-sm font-light"
                    placeholder="Masukkan Nomor Telepon Anda"
                  />
                </div>
              </div>
            </div>
            <input
              type="button"
              className="bg-brand-400 hover:bg-brand-400 text-white w-full rounded-full text-sm py-2 cursor-pointer text-center"
              value="Selanjutnya"
            />
          </div>
        </form>
      </div>
      <div className="hidden lg:block absolute left-[50%] top-0 h-[101vh] w-[50vw]">
        <Image
          width={100}
          height={100}
          loading="lazy"
          className="w-full h-full object-cover"
          src="/images/contact-us-gradient.webp"
          alt="background screen"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
