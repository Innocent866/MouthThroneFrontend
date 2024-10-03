import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        

        

    {/* ...:::: Start Error Section :::... */}
    <div className="error-section">
        <div className="container">
            <div className="row">
                <div className="error-form">
                    <h1 className="big-title" data-aos="fade-up" data-aos-delay="0">404</h1>
                    <h4 className="sub-title" data-aos="fade-up" data-aos-delay="200">Opps! PAGE NOT BE FOUND</h4>
                    <p data-aos="fade-up" data-aos-delay="400">Sorry but the page you are looking for does not exist,
                        have been<br/> removed, name changed or is temporarily unavailable.</p>
                    <div className="row">
                        <div className="col-10 offset-1 col-md-4 offset-md-4">
                            <div className="default-search-style d-flex" data-aos="fade-up" data-aos-delay="600">
                                <input className="default-search-style-input-box" type="search" placeholder="Search..."
                                    required/>
                                <button className="default-search-style-input-btn" type="submit"><i
                                        className="fa fa-search"></i></button>
                            </div>
                            <Link to="/" className="btn btn-md btn-black-default-hover mt-7" data-aos="fade-up"
                                data-aos-delay="800">Back to home page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> {/* ...:::: End Error Section :::... */}
    </div>
  )
}

export default Page404