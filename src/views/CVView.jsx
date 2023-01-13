import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-3.svg'
import './index.css';
import { useTranslation } from 'react-i18next';
import { useState } from "react";


export const CVView = () => {
  
  const { t } = useTranslation();
  let width = window.innerWidth;
  
  const [hidden, sethidden] = useState({
    amaris: true,
    nttdata: false,
    accenture: false
  });
  
  const amarisJSX = (
    <div className={(hidden.amaris ? 'amaris' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p id='time' className="opacity-50">2022-2023</p>
      <p id='job-description' className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
    </div>
  )
  
  const nttDataJSX = (
    <div className={(hidden.nttdata ? 'nttdata' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p id='time' className="opacity-50">2020-2022</p>
      <p id='job-description' className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
    </div>
  )
  
  const accentureJSX = (
    <div className={(hidden.accenture ? 'accenture' : 'hidden')}>
      <p id='role' className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p id='time' className="opacity-50">2019-2020</p>
      <p id='job-description' className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
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

  if (width > '640') {
    return (
      <div id="cv">
        <PageLayout>
          <ParallaxBanner
            layers={[
            {
              image: background,
              speed: -20
            }
            ]}
            className="h-screen"
          >
            <div className="w-screen">
              <div className="mx-5 absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Resume')}</p>
                <div className="container max-w-3xl">
                  <div className="flex">
                    <div className="flex col mr-5">
                      <ul className="ml-2 text-white font-roboto text-lg">
                        <li className="cv-item p-2 border-l" onClick={hide1}>Amaris</li>
                        <li className="cv-item p-2 border-l" onClick={hide2}>NTTData</li>
                        <li className="cv-item p-2 border-l" onClick={hide3}>Accenture</li>
                      </ul>
                    </div>
                    <div className="col p-2 w-full text-white font-roboto">
                      { amarisJSX }
                      { nttDataJSX }
                      { accentureJSX }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxBanner>
        </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="cv" className="h-screen flex bg-primary">
        <div className="mx-5 h-screen w-screen flex flex-col items-center justify-center">
          <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Resume')}</p>
          <div className="container h-52">
            <div className="flex">
              <div className="flex col">
                <ul className="ml-2 text-white font-roboto text-lg">
                  <li className="cv-item p-2 border-l font-roboto-condensed" onClick={hide1}>Amaris</li>
                  <li className="cv-item p-2 border-l font-roboto-condensed" onClick={hide2}>NTTData</li>
                  <li className="cv-item p-2 border-l font-roboto-condensed" onClick={hide3}>Accenture</li>
                </ul>
              </div>
              <div className="col p-2 w-full text-white font-roboto">
                { amarisJSX }
                { nttDataJSX }
                { accentureJSX }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
