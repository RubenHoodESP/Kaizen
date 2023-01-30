import { NavBar } from '../components'
import { ContactView, CVView, IntroductionView, PortfolioView } from '../views'
import background from '../assets/Background.svg';
import './MainPage.css'

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="parallax_wrapper">
        <img className='background' src={background} alt="bg" />
        <div id='intro' className="snap">
          <IntroductionView />
        </div>
        <div id='portfolio' className="snap">
          <PortfolioView />
        </div>
        <div id='cv' className="snap">
          <CVView />
        </div>
        <div id='contact' className="snap">
          <ContactView />
        </div>
      </div>
    </>
  )
}
