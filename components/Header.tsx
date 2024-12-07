import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Link href="./">
        <button>Home</button>
      </Link>
      <Link href="./About">
        <button>About</button>
      </Link>
      <Link href="./">
        <button>Dashboard</button>
      </Link>
      <Link href="./">
        <button>About</button>
      </Link>
    </>
  );
};

export default Header;
