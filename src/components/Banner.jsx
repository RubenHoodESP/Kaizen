import background from '../assets/background.svg';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

export const Banner = () => {

  const [ref, inView] = useInView();

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
      <div ref={ref} className= {'absolute inset-0 flex flex-col items-center justify-center ' + (inView ? 'inview' : 'notview')}>
        <p className="text-6xl text-white font-thin mb-5">Rubén García</p>
        <p className='text-2xl text-white font-thin'>Web Developer</p>
      </div>
    </ParallaxBanner>
  )
}
