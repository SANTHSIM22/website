"use client";
import Nav from "@/components/Widget/header";
import Lenis from 'lenis'
import Scrollprogres from "@/components/ui/scrollprogres";
export default function Home() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  return (
       <div>
        <Scrollprogres/>
         <Nav/>
         <div className="h-screen mt-32 p-16">
         </div>
         </div>
  
  );
}
