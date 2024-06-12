import Navbar from "../../components/navbar";
import Image from "next/image";
import HeroImage from "/public/ID-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import SignIn from "../../components/sign-in";

const LoginRegister = ({ params: { lng } }) => {
  return (
    <section className="relative">
      <div className="absolute h-[83%] top-0 z-10">
        <Image
          src={HeroImage}
          alt="Hero Image"
          quality={100}
          style={{ objectFit: "cover" }}
          className="h-full"
        />
      </div>
      <Navbar />
      <div className=" pt-6 bg-gradient-to-b max-md:bg-black from-black/75 from-20% via-transparent/50 to-black/75 to-80% z-10 relative w-full h-auto ">
        <SignIn lng={lng} />
      </div>
    </section>
  );
};

export default LoginRegister;
