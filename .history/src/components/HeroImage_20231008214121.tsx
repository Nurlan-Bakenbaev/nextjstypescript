import React from "react";
import Image from "next/image";
export const HeroImage = () => {
  return (
    <section className="">
      <div className="w-[200px] h-[200px] rounded-full flex overflow-hidden mx-auto">
        <Image
          className="object-cover "
          alt="Samurai"
          width={200}
          height={200}
          src={
            
          }
        />
      </div>
    </section>
  );
};
