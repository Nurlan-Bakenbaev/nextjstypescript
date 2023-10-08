import React from 'react'
import Image from 'next/image'

export const ProfileImage = () => {
  return (
    <section>
        <Image alt='Hero-Image' layout='fill'  src={'https://images.unsplash.com/photo-1600924779117-927b4f81457d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'}/>
    </section>
  )
}
