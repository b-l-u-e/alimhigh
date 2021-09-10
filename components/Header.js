import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-200 shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative h-10 w-20 flex items-center my-auto cursor-pointer"
      >
        <img className="object-contain object-left" src="/alimlogo.png" />
      </div>

      <div className=" flex items-center">
        <ul className="flex items-center flex-grow flex-shrink text-black">
          <li className="linkstyle">
            <Link href="/">
              <a className="no-underline ">Home</a>
            </Link>
          </li>
          <li className="linkstyle">
            <a className="no-underline ">Enrollment</a>
          </li>
          <li className="linkstyle">
            <Link href="/management">
              <a className="no-underline ">Management</a>
            </Link>
          </li>
          <li className="linkstyle">
            <a className="no-underline ">Academics</a>
          </li>
          <li className="linkstyle">
            <a className="no-underline ">Bursary Fund</a>
          </li>
          <li className="linkstyle">
            <a className="no-underline ">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
