import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-2.svg'
import { Carousel } from "../components"
import './index.css';
import './PortfolioView.css';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-hook-inview";
import react_logo from  "../assets/logos/react.svg";
import redux_logo from  "../assets/logos/redux.svg";
import tailwind_logo from  "../assets/logos/tailwind.svg";
import api from  "../assets/logos/API.svg";
import { useState } from "react";

let i = 1;

export const PortfolioView = () => {

  const [data, setdata] = useState({next: false, prev: false});

  const childToParent = (childData) => {
    if (childData.next && !childData.prev) {
      i = (i + 1) % 4;
      if (i == 0) i = 4;
    }
    if (!childData.next && childData.prev) {
      i = (Math.abs(i - 1)) % 4;
      if (i == 0) i = 4;
    }

    setdata(childData);
  }

  const options = {
    unobserveOnEnter: true,
    threshold: 0.5,
  }
  const [ref, inView] = useInView(options);
  const { t } = useTranslation();
  let width = window.innerWidth;


  const item1 = (
    <div id="item1" className={i === 1 ? 'fadein absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
        <img src={react_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Redux</span>
        <img src={redux_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
        <img src={tailwind_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Rapid API</span>
        <img src={api} alt="logo" />
      </div>
    </div>
  );
  const item2 = (
    <div id="item2" className={i === 2 ? 'fadein absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
        <img src={react_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Redux</span>
        <img src={redux_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
        <img src={tailwind_logo} alt="logo" />
      </div>
    </div>
  );
  const item3 = (
    <div id="item3" className={i === 3 ? 'fadein absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
        <img src={react_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Redux</span>
        <img src={redux_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
        <img src={tailwind_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Rapid API</span>
        <img src={api} alt="logo" />
      </div>
    </div>
  );
  const item4 = (
    <div id="item4" className={i === 4 ? 'fadein absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
        <img src={react_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Redux</span>
        <img src={redux_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
        <img src={tailwind_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-roboto text-white md:text-2xl">Rapid API</span>
        <img src={api} alt="logo" />
      </div>
    </div>
  );

  if (width > '640') {
    return (
      <div id="portfolio">
        <PageLayout>
          <ParallaxBanner
            layers={[
            {
              image: background,
              speed: -30
            }
            ]}
            className="h-screen"
          >
            <div ref={ref} className={"absolute mx-5 inset-0 -top-16 flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
              <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
              <div className="container max-w-[800px]">
                <Carousel childToParent={childToParent} />
              </div>
              <div className="relative w-[800px]">
                { item1 }
                { item2 }
                { item3 }
                { item4 }
              </div>
            </div>
          </ParallaxBanner>
        </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="portfolio" className="h-screen relative flex bg-secondary items-center">
        <div ref={ref} className={"absolute mx-5 inset-0 -top-20 flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
          <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
          <div className="container max-w-[800px]">
            <Carousel childToParent={childToParent} />
          </div>
          <div className="relative w-[300px]">
            { item1 }
            { item2 }
            { item3 }
            { item4 }
          </div>
        </div>
      </div>
    )
  }
}
