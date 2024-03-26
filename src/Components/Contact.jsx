import React from 'react'
import Footer from './Footer'
import Scroll from './scroll'
export default function Contact () {
    return(
        <div>
        
        
        <div className='container mt-5 col-lg-10 px-4 py-5 contact'>
        <Scroll/>
            <div className='ms-1  container'>
            
            <h1 className='fs-2 '>Connect with Us!</h1>
            <p className='   mb-5'>We would love to hear from you. If you have any queries and want to discuss them, then contact us at any time.</p>
            </div>
            
            <div className="container ">
        <div className="row ">
        
        <div className="col-lg-4">
            <div className="form-floating mb-3">
                <input type="name" className="form-control formbox" id="floatingInput" placeholder="name@example.com" width="240px"/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control formbox" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Email</label>
            </div>
            <br/>
        </div>
        
        <div className="col-lg-4">
            <div className="form-floating mb-3">
                <input type="name" className="form-control formbox" id="floatingInput" placeholder="name@example.com" width="250px"/>
                <label htmlFor="floatingInput">Company Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control formbox" id="floatingPassword" placeholder="number"/>
                <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <br/>
        </div>
        
        <div className='col-lg-8'>
            <div className="form-floating">
                <select className="form-select" placeholder="Budget" id="floatingTextarea2">
                        <option >Budget</option>
                        <option value="1">$100k+</option>
                        <option value="2">$50k - $100k</option>
                        <option value="3">$10k - $20k</option>
                        <option value="4">Under $10k</option>
                        <option value="5">Not sure</option>

                    </select>
                
            </div>
            <br />
            <div className="form-floating">
                <select className="form-select" placeholder="Budget" id="floatingTextarea2">
                        <option >Timeline</option>
                        <option value="1">Within a week</option>
                        <option value="2">Within a month</option>
                        <option value="3">More than a month</option>
                        

                    </select>
                
            </div>
            <br />
            <div className="form-floating">
                <textarea className="form-control" placeholder="Message" style={{ height: '8rem' }} id="floatingTextarea2">
                    
                    </textarea>
                    <label htmlFor="floatingInput">Message</label>
                
            </div>
            
            
            <br/>
            <div className="form-group">
                <div className="g-recaptcha" data-sitekey="6LebuRYjAAAAAOjLvbUHqyrtYkM6ZLAuzx-MpYPL" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                
            </div>
            <br/>
            
            <div className="d-grid gap-2 ">
                <button className="btn btn-danger w-25 rounded" type="button">Submit</button>
            </div>
            <br/>
            </div>
            <div className="col"> 
            <div className="contact schedule   bg-white  text-center py-4 ">
                <div className=''>
                    <h1 className='fs-2 mb-2'>  Schedule Meeting</h1>
                    <div className=" d-flex mb-2 w-100 justify-content-center ">
                        <a href="https://calendly.com/methologik">
                <button className="btn btn-danger rounded" type="button">Schedule </button></a>
            </div>
                    <p className="p-2 fs-6">Schedule an initial FREE 30 MEETING Consulting call to discuss your needs.

</p></div>
                </div>
                </div>
        </div>        
        
        </div>
        
        </div>
        
        <Footer/>
        </div>
        
    )
  
}
