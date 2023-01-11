import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-3.svg'
import './index.css';
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export const CVView = () => {

  const { t } = useTranslation();
  let width = window.innerWidth;

  let amaris = true;
  let nttdata = false;
  let accenture = false;

  const [hidden, sethidden] = useState(false);

  const amarisJSX = (
    <div className={(amaris ? 'amaris' : 'hidden')}>
      <p className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p className="opacity-50">2022-2023</p>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
    </div>
  )

  const nttDataJSX = (
    <div className={(nttdata ? 'nttdata' : 'hidden')}>
      <p className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p className="opacity-50">2020-2022</p>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
    </div>
  )

  const accentureJSX = (
    <div className={(accenture ? 'accenture' : 'hidden')}>
      <p className="font-roboto-condensed text-2xl">Front-End Developer</p>
      <p className="opacity-50">2019-2020</p>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod aliquid eaque facilis autem error nostrum et, distinctio temporibus deserunt est magnam corrupti minus harum dolore quisquam vitae laboriosam consectetur?</p>
    </div>
  )

  const miau = (prop) => {
    switch (prop) {
      case 1:
        amaris = true;
        nttdata = false;
        accenture = false;
        break;
      case 2:
        amaris = false;
        nttdata = true;
        accenture = false;
        break;
      case 3:
        amaris = false;
        nttdata = false;
        accenture = true;
        break;
    }
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
            <div className="mx-5 absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-6xl text-white font-thin">{t('Resume')}</p>
              <div className="container h-40">
                <div className="flex">
                  <div className="flex col">
                    <ul className="ml-2 text-white font-roboto text-lg">
                      <li className="p-2 border-l" onClick={miau(1)}>Amaris</li>
                      <li className="p-2 border-l" onClick={miau(2)}>NTTData</li>
                      <li className="p-2 border-l" onClick={miau(3)}>Accenture</li>
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
                  <li className="p-2 border-l" onClick={miau(1)}>Amaris</li>
                  <li className="p-2 border-l" onClick={miau(2)}>NTTData</li>
                  <li className="p-2 border-l" onClick={miau(3)}>Accenture</li>
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
