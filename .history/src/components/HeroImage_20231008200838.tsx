import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <section className="">
      <Image
        className="rounded-[50%]"
        alt="Hero-Image"
        width={600}
        height={900}
        src={
          "117rmat&fit=crop&w=1740&q=80"
        }
      />
    </section>
  );
};
