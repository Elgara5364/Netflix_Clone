import Link from "next/link";
import { useParams } from "next/navigation";

const Logo = () => {
  const params = useParams();

  return (
    <>
      <Link
        href={`/${params.lng}`}
        className="font-black text-red-600 text-3xl lg:text-5xl cursor-default">
        Netflix
      </Link>
    </>
  );
};

export default Logo;
