import background from '../assets/Background.svg';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
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
          <img id='logo' src={logo} alt='logo' />
          <p id='subtitle' className='font-roboto-condensed text-4xl text-white font-light opacity-50'>{t('Intro.WebDeveloper')}</p>
          <p id='description' className='max-w-3xl font-roboto font-thin text-white mt-14 text-justify text-2xl'>{t('Intro.Description')}</p>
          <ul id='stack' className='flex h-40 max-h-40 w-2/5 flex-wrap md:text-2xl text-white font-roboto font-thin items-start list-disc list-inside flex-col mt-8'>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>APIs</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Tailwind css</li>
            <li>Git</li>
          </ul>
        </div>
      </ParallaxBanner>
    )
  } else {
    return (
      <div className="h-screen flex bg-primary">
        <div ref={ref} className={'mx-10 md:mx-5 absolute inset-0 flex flex-col items-center justify-center'}>
        <img id='logo' src={logo} alt='logo' className='mb-5' />
          <p id='subtitle' className='font-roboto-condensed text-3xl text-white font-light opacity-70'>{t('Intro.WebDeveloper')}</p>
          <p id='description' className='max-w-2xl font-roboto font-thin text-white mt-14 text-xl'>{t('Intro.Description')}</p>
            <ul id='stack' className='flex w-full h-36 max-h-40 flex-wrap text-white font-roboto font-thin text-xl items-start list-disc list-inside flex-col mt-8'>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>APIs</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Tailwind css</li>
              <li>Git</li>
            </ul>
        </div>
      </div>
    )
  }
}
