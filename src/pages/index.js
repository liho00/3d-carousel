import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const fruitControls = useAnimationControls();
  const labelControls = useAnimationControls();
  const cansControls = useAnimationControls();
  const sliderControls = useAnimationControls();

  const animation = async () => {
    await sliderControls.start({
      translateX: 0,
      transition: {
        duration: 1,
      },
    });
    // fruitControls.start({
    //   y: "200%",
    //   transition: {
    //     duration: 1,
    //   },
    // });
    // labelControls.start({
    //   x: "-200%",
    //   transition: {
    //     duration: 1,
    //   },
    // });
    // cansControls.start({
    //   x: ["0%", "-34%", "-67%"],
    // })
  };

  useEffect(() => {
    animation();
  }, []);
  return (
    <main className="flex flex-row w-screen items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop
        onSlideChange={(swiper) => {
          console.log(swiper.activeIndex);
        }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <section className="flex-shrink-0 relative bg-[#C9E78A] w-screen h-screen text-center flex flex-col items-center justify-center overflow-hidden">
            <motion.h1
              animate={labelControls}
              className="text-[8rem] md:text-[20rem] lg:text-[30rem] font-bold text-white font-serif"
            >
              Pear
            </motion.h1>
            <motion.img
              animate={fruitControls}
              src="/img/Pears.png"
              alt="pear"
              className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
            />

            <div className="absolute bottom-16 left-0 right-0">
              <button className="hover:opacity-75 transition text-[#077334] font-semibold font-serif px-6 py-3 bg-white rounded-full">
                Shop Taste
              </button>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex-shrink-0 relative bg-[#FFA3BE] w-screen h-screen text-center flex flex-col items-center justify-center overflow-hidden">
            <motion.h1
              animate={labelControls}
              className="text-[8rem] md:text-[20rem] lg:text-[30rem] font-bold text-white font-serif"
            >
              Apple
            </motion.h1>
            <motion.img
              animate={fruitControls}
              src="/img/Apples.png"
              alt="pear"
              className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
            />

            <div className="absolute bottom-16 left-0 right-0">
              <button className="hover:opacity-75 transition text-[#077334] font-semibold font-serif px-6 py-3 bg-white rounded-full">
                Shop Taste
              </button>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex-shrink-0 relative bg-[#C1BEFF] w-screen h-screen text-center flex flex-col items-center justify-center overflow-hidden">
            <motion.h1
              animate={labelControls}
              className="text-[8rem] md:text-[20rem] lg:text-[30rem] font-bold text-white font-serif"
            >
              Exotic
            </motion.h1>
            <motion.img
              animate={fruitControls}
              src="/img/Passion.png"
              alt="pear"
              className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
            />

            <div className="absolute bottom-16 left-0 right-0">
              <button className="hover:opacity-75 transition text-[#077334] font-semibold font-serif px-6 py-3 bg-white rounded-full">
                Shop Taste
              </button>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <div className="z-[50] absolute h-[60vh]">
        <div
          className="absolute w-full h-full"
          style={{
            WebkitMaskImage: "url(/img/12_2.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "cover",
            maskImage: "url(/img/12_2.png)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "cover",
          }}
        >
          <motion.div
            className="inset-0 w-[100vh] bg-cover h-full bg-center"
            style={{
              backgroundImage: "url(/img/Labels.png)",
              backgroundRepeat: "no-repeat",
            }}
            // animate={{
            //   translateX: ["0%", "-34%", "-67%"],
            // }}
            animate={cansControls}
            transition={{
              duration: 1,
              // repeat: Infinity,
              // repeatType: "reverse",
            }}
          />
        </div>
        <motion.img
          src="/img/12_2.png"
          className="w-full h-[60vh] object-contain"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </main>
  );
}
