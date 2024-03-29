import { ParallaxLayout } from "../layout";
import background from '../assets/Background-3.svg';
import './index.css';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import cvesp from "../assets/docs/CVSpanish.pdf";
import cveng from "../assets/docs/CVEnglish.pdf";
import { useInView } from "react-hook-inview";
import './CVView.css';


export const CVView = () => {
  
  const options = {
    unobserveOnEnter: true,
    threshold: 0.5,
  }
  const [ref, inView] = useInView(options);
  const { t } = useTranslation();
  
  const [hidden, sethidden] = useState({
    amaris: true,
    nttdata: false,
    accenture: false
  });
  
  const amarisJSX = (
    <div className={(hidden.amaris ? 'amaris' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">{t('Resume.role')}</p>
      <p id='time' className="opacity-50 md:text-lg">Oct 2022 - {t('Resume.present')}</p>
      <p id='job-description' className="mt-5 md:text-lg">{t('Resume.description11')}</p>
    </div>
  )
  
  const nttDataJSX = (
    <div className={(hidden.nttdata ? 'nttdata' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">{t('Resume.role')}</p>
      <p id='time' className="opacity-50 md:text-lg">Sep 2020 - Sep 2022</p>
      <p id='job-description' className="mt-5 text md:text-lg">{t('Resume.description2')}</p>
    </div>
  )
  
  const accentureJSX = (
    <div className={(hidden.accenture ? 'accenture' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">{t('Resume.role')}</p>
      <p id='time' className="opacity-50 md:text-lg">Sep 2019 - Sep 2020</p>
      <p id='job-description' className="mt-5 md:text-lg">{t('Resume.description3')}</p>
    </div>
  )

  const hide1 = () => {
    sethidden({
      amaris: true,
      nttdata: false,
      accenture: false
    });
  }
  const hide2 = () => {
    sethidden({
      amaris: false,
      nttdata: true,
      accenture: false
    });
  }
  const hide3 = () => {
    sethidden({
      amaris: false,
      nttdata: false,
      accenture: true
    });
  }

  return (
    <ParallaxLayout>
      <div className='layer'/>
      <div className="w-screen">
        <div ref={ref} className={"mx-5 mt-32 md:mt-auto h-screen flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
          <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Resume.title')}</p>
          <div className="container max-w-3xl">
            <div className="flex h-[450px] md:h-[250px]">
              <div className="flex col mr-5">
                <ul className="ml-2 text-white font-roboto text-lg">
                  <li className={`cv-item p-2 border-l font-roboto-condensed ${(hidden.amaris == true) ? 'active_cv-item' : ''}`} onClick={ hide1 }>Amaris</li>
                  <li className={`cv-item p-2 border-l font-roboto-condensed ${(hidden.nttdata == true) ? 'active_cv-item' : ''}`} onClick={ hide2 }>NTTData</li>
                  <li className={`cv-item p-2 border-l font-roboto-condensed ${(hidden.accenture == true) ? 'active_cv-item' : ''}`} onClick={ hide3 }>Accenture</li>
                </ul>
              </div>
              <div className="col p-2 w-full text-white font-roboto h-60">
                { amarisJSX }
                { nttDataJSX }
                { accentureJSX }
              </div>
            </div>
          </div>
            <div className="col w-full text-white flex gap-5 justify-center mt-10 font-roboto">
              <a href={ cvesp } target="_blank" className="download_button border p-4 w-32 text-center shadow-lg bg-button">{t('Resume.DownloadEsp')}</a>
              <a href={ cveng } target="_blank" className="download_button border p-4 w-32 text-center shadow-lg bg-button">{t('Resume.DownloadEng')}</a>
            </div>
        </div>
      </div>
    </ParallaxLayout>
  )
}
