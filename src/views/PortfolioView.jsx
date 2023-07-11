import { ParallaxLayout } from "../layout"
import background from '../assets/Background-2.svg'
import { Carousel } from "../components"
import './index.css';
import './PortfolioView.css';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-hook-inview";
import { useState } from "react";
import react_logo from  "../assets/logos/react.svg";
import redux_logo from  "../assets/logos/redux.svg";
import tailwind_logo from  "../assets/logos/tailwind.svg";
import api_logo from  "../assets/logos/API.svg";
import angular_logo from  "../assets/logos/angular.svg";
import typescript_logo from  "../assets/logos/typescript.svg";
import sass_logo from  "../assets/logos/sass.svg";
import bootstrap_logo from  "../assets/logos/bootstrap.svg";
import localstorage from  "../assets/logos/localstorage.svg";
import firebase from  "../assets/logos/firebase.svg";

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
    <div id="item1" className={i === 1 ? 'fadein absolute flex items-center md:w-[798px] w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex items-center md:w-[798px] w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <img src={react_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={redux_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Redux</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={tailwind_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={api_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Rapid API</span>
      </div>
    </div>
  );
  const item2 = (
    <div id="item2" className={i === 2 ? 'fadein absolute flex items-center md:w-[798px] w-full max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex items-center md:w-[798px] w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <img src={react_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={redux_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Redux</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={tailwind_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Tailwind CSS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={firebase} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Firebase</span>
      </div>
    </div>
  );
  const item3 = (
    <div id="item3" className={i === 3 ? 'fadein absolute flex items-center md:w-[798px] w-full max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex items-center md:w-[798px] w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <img src={angular_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Angular 12</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={typescript_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Typescript</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={sass_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Sass</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={api_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">APIs</span>
      </div>
    </div>
  );
  const item4 = (
    <div id="item4" className={i === 4 ? 'fadein absolute flex items-center md:w-[798px] w-full max-h-[120px] mt-14 flex-wrap gap-4 justify-between' : 'fadeout absolute flex items-center md:w-[798px] w-full max-w-[800px] max-h-[120px] mt-14 flex-wrap gap-4 justify-between'}>
      <div className="flex items-center gap-2">
        <img src={react_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">ReactJS</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={redux_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Redux</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={bootstrap_logo} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Bootstrap</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={localstorage} alt="logo" />
        <span className="font-roboto text-white md:text-2xl">Local Storage</span>
      </div>
    </div>
  );

  return (
    <ParallaxLayout>
      <div className='layer'/>
      <div ref={ref} className={"h-screen mt-32 md:mt-auto mx-5 flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
        <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
        <div className="container max-w-[800px]">
          <Carousel childToParent={childToParent} />
        </div>
        <div className="relative w-full md:w-[800px]">
          { item1 }
          { item2 }
          { item3 }
          { item4 }
        </div>
      </div>
    </ParallaxLayout>
  )
}
