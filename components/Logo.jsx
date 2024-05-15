import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
        Portfolio
      </div>
    </Link>
  );
};

export default Logo;
