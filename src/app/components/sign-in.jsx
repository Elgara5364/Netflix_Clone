import { FooterLogin } from "./footer";
import Form from "./form";

const SignIn = ({ lng }) => {
  return (
    <section className="pt-5 relative z-30">
      <div className=" w-full min-[600px]:w-[450px] min-[600px]:mx-auto mt-14  ">
        <div className="min-[600px]:py-12 min-[600px]:px-16 bg-[#0000005f] rounded">
          <header className="h-full ">
            <h1 className="h-7 mb-10 text-white text-3xl font-bold">Sign In</h1>
          </header>
          <Form lng={lng} />
          <footer></footer>
        </div>
      </div>{" "}
      <FooterLogin lng={lng} />
    </section>
  );
};

export default SignIn;
