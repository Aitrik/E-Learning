import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl sm:text-3xl tracking-tight">
      <span className="bg-primary text-white px-2 py-1 rounded-md shadow-sm">
        S
      </span>
      <span className="hover:text-primary transition-colors duration-200">
        incronix
      </span>
    </Link>
  );
};

export default Logo;
