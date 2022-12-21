import { NavBar } from '../components'
import { ContactView, CVView, IntroductionView, PortfolioView } from '../views'
import './MainPage.css'

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="snap">
        <IntroductionView />
      </div>
      <div className="snap">
        <PortfolioView />
      </div>
      <div className="snap">
        <CVView />
      </div>
      <div className="snap">
        <ContactView />
      </div>
    </>
  )
}
