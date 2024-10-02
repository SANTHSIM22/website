"use client";
import Hero from "@/components/Widget/hero";
import Nav from "@/components/Widget/header";
import About from "@/components/Widget/About";
import Lenis from 'lenis'
export default function Home() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  return (
        <>
         <Nav/>
         <Hero/>
<About/>
         </>
  );
}
