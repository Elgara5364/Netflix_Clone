import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        href={`/`}
        className="font-black text-red-600 text-3xl lg:text-5xl cursor-default">
        Netflix
      </Link>
    </>
  );
};

export default Logo;
