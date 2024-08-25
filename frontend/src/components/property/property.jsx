import '../../style/property/property.css'
import image1 from '../../assets/image/property/img1.svg'
import image2 from '../../assets/image/property/img2.svg'
import image3 from '../../assets/image/property/img3.svg'
import image4 from '../../assets/image/property/img4.svg'
import { Row, Col} from "react-bootstrap"
import {Footer} from "../footer"
import { Link } from "react-router-dom";


export const Property = () => {
  return (
    <>
      <div className="text-white flex items-center justify-center flex-col p-5 mt-10 mb-10 w-full">
        <div className="flex items-center justify-center flex-col gap-3 w-full my-5 mb-8">
          <h1 className=" text-3xl">Find Your Dream Rental Property</h1>
          <p className="w-2/4 text-[14px] text-[#8a8a8a] text-center">
            we are recognized for exceeding client expectation and delivering
            great results through dedication, ease of process, and extraordinary
            services to our landlords and tenant
          </p>
        </div>
         <div className="w-full flex flex-col md:flex-row items-start justify-between my-10 px-4 md:px-10 lg:px-32">
      <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center md:text-left">
            Find the best To-Let in Lucknow
          </h2>
          <p className="text-[#CCB454] text-center md:text-left text-sm md:text-base lg:text-lg">
            With No Brokerage on rental PGs | Flats | Houses | Offices.
          </p>
        </div>
        {/* "/listing" route */}
        <Link
          to="/listing"
          className="px-4 py-2 bg-white text-black rounded-md text-center"
        >
          Join Us
        </Link>
      </div>
      <div className="flex justify-center md:justify-end mt-6 md:mt-0">
        <img src={image1} alt="Property Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
      </div>
    </div>
  
    <div className="w-full flex flex-col md:flex-row items-start justify-between my-10 px-4 md:px-10 lg:px-32">
    <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center md:text-left">
          Find the best To-Let in Ayodhya
        </h2>
        <p className="text-[#CCB454] text-center md:text-left text-sm md:text-base lg:text-lg">
          With No Brokerage on rental PGs | Flats | Houses | Offices.
        </p>
      </div>
      {/* "/listing" route */}
      <Link
        to="/listing"
        className="px-4 py-2 bg-white text-black rounded-md text-center"
      >
        Join Us
      </Link>
    </div>
    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
      <img src={image2} alt="Property Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
    </div>
  </div>
  
  <div className="w-full flex flex-col md:flex-row items-start justify-between my-10 px-4 md:px-10 lg:px-32">
  <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center md:text-left">
        Find the best To-Let in Vellore
      </h2>
      <p className="text-[#CCB454] text-center md:text-left text-sm md:text-base lg:text-lg">
        With No Brokerage on rental PGs | Flats | Houses | Offices.
      </p>
    </div>
    {/* "/listing" route */}
    <Link
      to="/listing"
      className="px-4 py-2 bg-white text-black rounded-md text-center"
    >
      Join Us
    </Link>
  </div>
  <div className="flex justify-center md:justify-end mt-6 md:mt-0">
    <img src={image3} alt="Property Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
  </div>
</div>

<div className="w-full flex flex-col md:flex-row items-start justify-between my-10 px-4 md:px-10 lg:px-32">
<div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
  <div>
    <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center md:text-left">
      Find the best To-Let in Kota
    </h2>
    <p className="text-[#CCB454] text-center md:text-left text-sm md:text-base lg:text-lg">
      With No Brokerage on rental PGs | Flats | Houses | Offices.
    </p>
  </div>
  {/* "/listing" route */}
  <Link
    to="/listing"
    className="px-4 py-2 bg-white text-black rounded-md text-center"
  >
    Join Us
  </Link>
</div>
<div className="flex justify-center md:justify-end mt-6 md:mt-0">
  <img src={image4} alt="Property Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
</div>
</div>

      </div>
      <Footer/>
    </>
  )
}
