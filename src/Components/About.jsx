import React from 'react'
import Footer from './Footer';
import abouthead from '../Assets/abouthead.png'
import abouthead1 from '../Assets/abouthead1.png'
import Scroll from './scroll';
export default function About () {
    return(
        <>
        
        <section className="container p-4-md mt-5">
            <Scroll/>
        <div className="">
          <div className="d-flex flex-column-reverse  flex-lg-row  justify-content-between align-items-center">
            <div className="container m-0 mt-5 col-lg-7 ">
              <h1 className="container fw-bold head" >
              About us
              </h1>
              <p className="container  lead trust-text head1 ">
              With a superior approach to software development and a solution-focused strategy, we are committed to serving corporate and large-scale clients with the technical consultancy they need.
              </p>
            </div>
            
            <div className=" d-flex  col-lg-5 justify-content-around trust-img">
                <div className=" position-relative "> 
              <img className="bg-about img-fluid " src={abouthead} alt="" />
              <img className="bg-about1  img-fluid " src={abouthead1} alt="" />
              
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>

        
        <section class="container mt-5 pt-5">
    <div class="d-lg-flex container justify-content-around mb-5 align-items-center">
        <div class="work pe-lg-5">

            <h4 class="fw-bold fs-5">WHO WE ARE</h4>
            <p className=' workp'  >We provide experiences that help business to breathe with success! <br /> <br />
            
            We are a premier software house with a diverse team of experts in software engineering, development, and design. Our goal is to bring innovative, high-quality software solutions to our clients. With highly qualified and enthusiastic team, we work with different technologies, platforms, and programming languages to provide tailored solutions. We are passionate about creating userfriendly, secure, and reliable software that will enable our clients to stay ahead of the competition. <br /> <br />

            Our team works in an agile manner and can engage well with our clients across different stages of their development. We have been working in the industry for more than a decade and have won multiple international clients. We deal in Website Development, Mobile App Development, Custom Software Development, Ecommerce Solutions, UI/UX, and Digital Media services.</p>
        </div>
        
        <div className='col-lg-6'>
            <img class="work-img img-fluid " src="https://www.methologik.com/static/media/Success.dd27d485becc55fa5e50.png"  alt=""/>

        </div>
    </div>

    <div class="d-lg-flex justify-content-around align-items-center container  pt-lg-5 mt-5">
        <div className='col-lg-6 '>
            <img class="work-img img-fluid " src="https://www.methologik.com/static/media/Business-Growth.35669a6dc0a2308c8203.png"  alt=""/>

        </div>
        
        <div class="ps-0  ps-lg-2  work pt-lg-5">


            <h4 class="fw-bold fs-5">WHAT WE DO</h4>
            <p className='workp'>We serve with Industry 4.0 solutions that accelerate business growth! <br />
            <br />

We code solutions for our clients and invest in research and development to ensure to stay on top of the latest industry trends and technologies. Not only do we bring cutting-edge technology to our client, but we also get in depth about its implication and potential benefits. Our team of industry experienced professionals can work with you to deploy business solutions, from launch through implementation to exploitation.
<br /><br />
We focus on creating strong customer base, providing excellent customer service, and cultivating relationships with industry partners and vendors. Along with creating strong customer base, we also focus on marketing clients’ services and products to potential market and works on creating strong digital footprint with an active website and engaging social media accounts.</p>
        </div>

        
    </div>
</section></section>
        
<section className='p-md-4 mt-5 office'>
    <h2 className='fw-semibold fs-4 py-5 text-center '>We Work Here</h2>
    <div className="container d-lg-flex ">
        <div className='col-lg-5'>
            
            <div className="services bg-white  py-1 ">
                    <img className="logos ps-2 pt-3 img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5MTAwQjI3QThBQzExRUQ5MkE2QTI2RkExMEQ3Q0RGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5MTAwQjI4QThBQzExRUQ5MkE2QTI2RkExMEQ3Q0RGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTkxMDBCMjVBOEFDMTFFRDkyQTZBMjZGQTEwRDdDREYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTkxMDBCMjZBOEFDMTFFRDkyQTZBMjZGQTEwRDdDREYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZCC/KAAAOJUlEQVR42uRb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" alt=""/>
                    <h6 className="fs-5 fw-semibold">Pakistan Office Location</h6>
                    <p className="p-2 fs-6">Mezzanine floor, Grace Tower, Block 17 Gulistan-e-Johar, Karachi, Karachi City, Sindh 75290</p>
                </div>
            
        </div>
        <div className='container col-lg-7 '>
        <img  className='img-fluid' src="https://www.methologik.com/static/media/Sourcef.5c8ea4a0d92a65135f47.png" alt="" />
        </div>
    </div>
</section>

        <Footer/>
        </>
    )
  
}
