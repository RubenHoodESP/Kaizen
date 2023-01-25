import background from '../assets/Background.svg';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import javascript from '../assets/logos/javascript.svg';
import typescript from '../assets/logos/typescript.svg';
import html from '../assets/logos/html.svg';
import css from '../assets/logos/css.svg';
import angular from '../assets/logos/angular.svg';
import react from '../assets/logos/react.svg';
import redux from '../assets/logos/redux.svg';
import bootstrap from '../assets/logos/bootstrap.svg';
import tailwind from '../assets/logos/tailwind.svg';
import nodejs from '../assets/logos/nodejs.svg';
import git from '../assets/logos/git.svg';
import './Banner.css';
import '../assets/fonts/ThereBrat.ttf';
import logo from '../assets/logos/kaizen-logo.svg';

export const Banner = () => {

  const [ref] = useInView();
  const { t } = useTranslation();
  let width = window.innerWidth;

  if (width > '640') {
    return (
      <ParallaxBanner
        layers={[
        {
          image: background,
          speed: -30
        }
        ]}
        className="h-screen"
      >
        <div ref={ref} className={'mx-5 absolute inset-0 flex flex-col items-center justify-center'}>
          <img id='logo' src={logo} alt='logo' className='mb-5 logo_kaizen' />
          <p id='subtitle' className='font-roboto-condensed text-4xl text-white font-light opacity-50'>{t('Intro.WebDeveloper')}</p>
          <p id='description' className='max-w-3xl font-roboto font-thin text-white mt-14 text-justify text-2xl'>{t('Intro.Description')}</p>
          <div className='stack flex h-36 max-h-40 flex-wrap justify-between items-center mt-8 gap-6'>
            <img src={javascript} alt="logo" />
            <img src={typescript} alt="logo" />
            <img src={html} alt="logo" />
            <img src={css} alt="logo" />
            <img src={angular} alt="logo" />
            <img src={react} alt="logo" />
            <img src={redux} alt="logo" />
            <img src={bootstrap} alt="logo" />
            <img src={tailwind} alt="logo" />
            <img src={nodejs} alt="logo" />
            <img src={git} alt="logo" />
          </div>
        </div>
      </ParallaxBanner>
    )
  } else {
    return (
      <div className="h-screen flex bg-primary relative">
        <div ref={ref} className={'mx-10 md:mx-5 absolute inset-0 flex flex-col items-center justify-center'}>
        <img id='logo' src={logo} alt='logo' className='mb-5 logo_kaizen' />
          <p id='subtitle' className='font-roboto-condensed text-3xl text-white font-light opacity-70'>{t('Intro.WebDeveloper')}</p>
          <p id='description' className='max-w-2xl font-roboto font-thin text-white mt-14 text-xl'>{t('Intro.Description')}</p>
          <div className='stack flex h-36 max-h-40 flex-wrap justify-between items-center mt-8 gap-6'>
            <img src={javascript} alt="logo" />
            <img src={typescript} alt="logo" />
            <img src={html} alt="logo" />
            <img src={css} alt="logo" />
            <img src={angular} alt="logo" />
            <img src={react} alt="logo" />
            <img src={redux} alt="logo" />
            <img src={bootstrap} alt="logo" />
            <img src={tailwind} alt="logo" />
            <img src={nodejs} alt="logo" />
            <img src={git} alt="logo" />
          </div>
        </div>
      </div>
    )
  }
}
