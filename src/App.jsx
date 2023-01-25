import { ParallaxProvider } from 'react-scroll-parallax'
import { MainPage } from './pages'
import './App.css'

function App() {

  return (
    <div className="App">
      <ParallaxProvider>
        <div className='layer'></div>
        <MainPage />
      </ParallaxProvider>
    </div>
  )
}

export default App
