import React from "react";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image src={"../public/logo.png"} />
    </div>
  );
};

export default Logo;
