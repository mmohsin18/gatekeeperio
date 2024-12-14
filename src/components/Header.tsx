import Link from "next/link";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-col justify-between mr-6 lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <h2>Gatekeeper.io</h2>
          </Link>

          <div className="lg:hidden">
            Goren
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="w-[9rem] justify-between flex gap-6">
          <Button>Signup</Button>
          <Button>Login</Button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          Button
        </div>
      </div>
    </div>
  );
}

export default Header;
