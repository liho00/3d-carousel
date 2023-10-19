import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

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
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    animation();
  }, []);
  return (
    <main className="flex flex-row h-screen w-screen items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        // loop
        onSlideChange={useCallback((swiper) => {
          setSlideIndex(swiper.activeIndex);
          console.log(swiper.activeIndex);
          cansControls.start({
            x: ["34%", "0%", "-34%"][swiper.activeIndex],
            transition: {
              duration: 0.5,
            },
          });
        }, [])}
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
            {slideIndex === 0 && (
              <motion.img
                initial={{
                  y: "0%",
                }}
                animate={{
                  y: "100%",
                  transition: {
                    delay: 0.25,
                    duration: 0.75,
                  },
                }}
                src="/img/Pears.png"
                alt="pear"
                className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
              />
            )}

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
            {slideIndex === 1 && (
              <motion.img
                initial={{
                  y: "0%",
                }}
                animate={{
                  y: "-100%",
                  transition: {
                    delay: 0.25,
                    duration: 0.75,
                  },
                }}
                src="/img/Apples.png"
                alt="pear"
                className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
              />
            )}

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
            {slideIndex === 2 && (
              <motion.img
                initial={{
                  y: "0%",
                }}
                animate={{
                  y: "100%",
                  transition: {
                    delay: 0.25,
                    duration: 0.75,
                  },
                }}
                src="/img/Passion.png"
                alt="pear"
                className="absolute flex-shrink-0 object-cover w-[50rem] md:w-[100rem] lg:w-[150rem]"
              />
            )}

            <div className="absolute bottom-16 left-0 right-0">
              <button className="hover:opacity-75 transition text-[#077334] font-semibold font-serif px-6 py-3 bg-white rounded-full">
                Shop Taste
              </button>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <div className="left-0 right-0 z-[50] absolute w-screen h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute w-[100vh] h-[60vh] bg-contain object-contain"
          style={{
            WebkitMaskImage: "url(/img/12_1.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: "url(/img/12_1.png)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full bg-center"
            style={{
              backgroundImage: "url(/img/Labels.png)",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "center",
              backgroundSize: "cover",
            }}
            // src="/img/Labels.png"
            // animate={{
            //   translateX: ["0%", "-34%", "-67%"],
            // }}
            initial={{
              x: "34%",
            }}
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
          className="absolute w-screen h-[60vh] object-contain"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </main>
  );
}
