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
            "https://firebasestorage.googleapis.com/v0/b/chatapp-e0ef2.appspot.com/o/ccc8607f-03d6-4d3b-a6b5-e8b4812a7f5c?alt=media&token=b5421fc8-d4e7-45a6-97e7-773662461b6d&_gl=1*17kqkk0*_ga*NDcyODg3NjE5LjE2OTY3OTM5MzY.*_ga_CW55HF8NVT*MTY5Njc5MzkzNS4xLjEuMTY5Njc5NDA0NS4xMS4wLjA."
          }
        />
      </div>
    </section>
  );
};
