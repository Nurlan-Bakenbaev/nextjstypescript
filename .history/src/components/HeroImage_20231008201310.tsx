import React from "react";
import Image from "next/image";
export const HeroImage = () => {
  return (
    <section className="">
      <div className="w-[500px] h-[500px] rounded-full border "> </div>
    <Image width={500} he src={'https://images.unsplash.com/photo-1611834905996-b30d97dcf651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80'} /> 
    
    </section>
  );
};