"use client"
import * as React from "react"
import "/src/app/styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MotionDiv } from "../motion-div"

export const Slider = () => {
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
  }

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
    <div className="bg-black ">
    <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView={{ opacity:1}}
        
        transition={{
            delay: 0.5,
            ease: "easeOut",
            duration: 0.5,
        }}
        viewport={{ amount: 0 }}>
          
    <div id="avaliações" className="flex justify-center items-center flex-col p-20 bg-[url('/images/parede.jpg')] bg-cover z-0"> 
    <div className="absolute inset-0 bg-black opacity-70 z-10 "></div>
    <h1 className="text-7xl font-bold mb-4 p-5 text-center text-amber-200 max-sm:text-5xl">AVALIAÇÕES DOS NOSSOS <span className="text-white "><br />CLIENTES</span></h1>
      <h2 className="text-5xl font-bold mb-4 p-9 text-center text-amber-200 max-sm:text-4xl max-sm:p-0">VENHA NOS CONHECER!</h2>
      <div ref={sliderRef} className="keen-slider w-auto h-auto">
        <div className="keen-slider__slide number-slide1 space-x-36 max-sm:space-x-0 max-sm:space-y-10 max-sm:flex max-sm:flex-col max-sm:p-3 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-10"><img src="/images/cliente-2.png" className="rounded-lg h-45 border-2  bg-red-950 border-orange-700 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /><img src="/images/cliente-1.png" className="rounded-lg border-2 bg-red-950 border-orange-700 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /></div>
        <div className="keen-slider__slide number-slide3 space-x-36 max-sm:space-x-0 max-sm:space-y-10 max-sm:flex max-sm:flex-col max-sm:p-3 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-10"><img src="/images/cliente-4.png" className="rounded-lg border-2 bg-red-950 border-orange-700 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /><img src="/images/cliente-3.png" className="rounded-lg border-2 border-orange-700 bg-red-950 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /></div>
        <div className="keen-slider__slide number-slide5 max-sm:p-3"><img src="/images/cliente-5.png" className="rounded-lg border-2 border-orange-700 bg-red-950 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /></div>
        <div className="keen-slider__slide number-slide6 max-sm:p-3"><img src="/images/cliente-6.png" className="rounded-lg border-2 border-orange-700 bg-red-950 hover:scale-90 transition-transform duration-200" alt="Avaliação 1" /></div>
      </div>
      </div>
      </MotionDiv>
      </div>
    </>
  )
}
