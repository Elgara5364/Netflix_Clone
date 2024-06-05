import Navbar from "../../components/navbar";
import Image from "next/image";
import HeroImage from "/public/ID-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const LoginRegister = () => {
  return (
    <>
      <Navbar />
      <div className="absolute h-[100%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          quality={100}
          style={{ objectFit: "cover" }}
          className="h-full"
        />
      </div>
      <div className="px-6 py-6 bg-gradient-to-b from-black/75 from-20% via-transparent/50 to-black/75 to-80% relative w-full h-screen "></div>
    </>
  );
};

export default LoginRegister;
