import React from 'react'
import './ParallaxLayout.css';

export const ParallaxLayout = ({children}) => {
  return (
    <>
      <div className='h-screen'>
          <div className="parallax_content">
              {children}
          </div>
      </div>
    </>
  )
}
