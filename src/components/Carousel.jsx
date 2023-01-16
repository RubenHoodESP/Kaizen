import project1 from '../assets/Project-1.png'
import project2 from '../assets/Project-2.png'
import project3 from '../assets/Project-3.png'
import './Carousel.css'

export const Carousel = () => {

  const handleProject = ({target}) => {
    switch (target.id){
      case '1':
        return (window.open('https://journalappkaizen.netlify.app/', '_blank'));
      case '2':
        return (window.open('https://gifsapprubenhood.netlify.app/', '_blank'));
      case '3':
        return (window.open('https://todolistkaizen.netlify.app/', '_blank'));
    }
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden border shadow-lg">
        <div className="carousel-item active relative float-left w-full">
          <img
            id='1'
            onClick={ handleProject }
            src={ project1 }
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-6xl mb-5 font-roboto-condensed">Journal App</h5>
            <p className='text-xl font-roboto'>ReactJS 18, MaterialUI</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            id='2'
            onClick={ handleProject }
            src={ project2 }
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-6xl mb-5 font-roboto-condensed">Gifs App</h5>
            <p className='text-xl font-roboto'>ReactJS, API calls</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            id='3'
            onClick={ handleProject }
            src={ project3 }
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-6xl mb-5 font-roboto-condensed">To-Do List</h5>
            <p className='text-xl font-roboto'>ReactJS, Local Database</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
