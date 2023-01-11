import background from '../assets/Background.svg';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

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
          speed: -20
        }
        ]}
        className="h-screen"
      >
        <div ref={ref} className={'mx-5 absolute inset-0 flex flex-col items-center justify-center'}>
          <p className="text-5xl md:text-8xl text-white font-roboto-condensed font-light mb-5">Rubén García</p>
          <p className='font-roboto text-4xl text-white font-light opacity-70'>{t('Intro.WebDeveloper')}</p>
          <p className='max-w-3xl font-roboto font-thin text-white mt-14 text-justify text-2xl'>{t('Intro.Description')}</p>
        </div>
      </ParallaxBanner>
    )
  } else {
    return (
      <div className="h-screen flex bg-primary">
        <div ref={ref} className={'mx-10 md:mx-5 absolute inset-0 flex flex-col items-center justify-center'}>
          <p className="text-5xl md:text-8xl text-white font-roboto-condensed mb-5">Rubén García</p>
          <p className='font-roboto text-4xl text-white font-light opacity-70'>{t('Intro.WebDeveloper')}</p>
          <p className='max-w-2xl font-roboto font-thin text-white mt-14 text-justify text-2xl'>{t('Intro.Description')}</p>
        </div>
      </div>
    )
  }
}
