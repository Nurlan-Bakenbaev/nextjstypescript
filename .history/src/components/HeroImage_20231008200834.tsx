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
          "117-927bwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        }
      />
    </section>
  );
};
