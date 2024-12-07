import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <><div>
      <Link href="./" className="but1">
        <button>Home</button>
      </Link>
      <Link href="./About" className="but2">
        <button>About</button>
      </Link>
      <Link href="./dashboard" className="but3">
        <button>Dashboard</button>
      </Link>
      </div>
    </>
  );
};

export default Header;
