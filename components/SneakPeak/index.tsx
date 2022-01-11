import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CarouselArrowLeft, CarouselArrowRight } from "components/Svg";

type SlideProps = {
  _uid: string;
  url: string;
}[];

const SLIDE_DATA = [
  {
    _uid: "uidx1",
    url: "/images/feat-1-min.png",
  },
  {
    _uid: "uidx3",
    url: "/images/feat-2-min.png",
  },
  {
    _uid: "uidx5",
    url: "/images/feat-3-min.png",
  },
  {
    _uid: "uidx5",
    url: "/images/feat-4-min.png",
  },
  {
    _uid: "uidx5",
    url: "/images/feat-5-min.png",
  },
];

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={`${styles.prevArrow} ${styles.arrow}`} onClick={onClick}>
      <CarouselArrowLeft />
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow} ${styles.arrow}`} onClick={onClick}>
      <CarouselArrowRight />
    </div>
  );
}

const SLIDE_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToScroll: 1,
  rows: 1,
  slidesPerRow: 1,
  // prevArrow: <PrevArrow />,
  // nextArrow: <NextArrow />,
};

function SneakPeak() {
  const [activeSlide, changeActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const renderControls = useCallback(
    () => (
      <SlideControl
        sliderData={SLIDE_DATA}
        sliderRef={sliderRef}
        activeSlide={activeSlide}
      />
    ),
    [activeSlide],
  );

  return (
    <section id="sneakpeek" className="mt-32 tablet:mt-56 mb-30">
      <h1 className="text-center text-base  mb-4 tablet:text-2xl">
        <span className="font-bold">Sneak Peek </span>😋
      </h1>
      <section className={`${styles.wrapper}  relative`}>
        <div
          style={{ position: "relative", width: "100%", height: "100%" }}
          className={`${styles.imageWrapper} hidden tablet:block`}
        >
          <Image
            src="/images/app-mockup-1-min.png"
            alt="mockup"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container tablet:hidden">
          <Slider
            {...SLIDE_SETTINGS}
            afterChange={changeActiveSlide}
            ref={sliderRef}
          >
            {SLIDE_DATA.map((slide) => {
              return (
                <div className={`${styles.imageWrapper} `} key={slide._uid}>
                  <Image
                    className="w-full"
                    src={slide.url}
                    alt="mockup"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </Slider>
          {renderControls()}
        </div>
      </section>
    </section>
  );
}

function SlideControl({
  sliderData,
  sliderRef,
  activeSlide,
}: {
  sliderData: SlideProps;
  sliderRef: any;
  activeSlide: number;
}) {
  return (
    <ul className="flex justify-center">
      {sliderData?.map((_slide, index) => (
        <li key={index} className="ml-3 first:ml-0">
          <button
            type="button"
            aria-label="slider_dot"
            className={` ${activeSlide === index && "bg-primary bg-opacity-100"}
              h-2 w-2 bg-dark bg-opacity-20 rounded-full cursor-pointer
             
              
            `}
            onClick={() => sliderRef?.current?.slickGoTo(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default SneakPeak;
