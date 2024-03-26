import React from "react";
import company1 from "../Assets/company1.png"
import company2 from "../Assets/company2.png"
import company3 from "../Assets/company3.png"
import company4 from "../Assets/company4.png"
import company5 from "../Assets/company5.png"
import company6 from "../Assets/company6.png"
import workimg1 from "../Assets/workimg1.png"
import workimg2 from "../Assets/workimg2.png"
import workimg3 from "../Assets/workimg3.png"
import Footer from "./Footer";
import Scroll from "./scroll";

export default function Mainbody() {
  return (
    <div>
      <section className="p-4-md mt-5">
      
      <Scroll/>
        <div className="container">
          <div className="d-flex flex-column-reverse  flex-lg-row  justify-content-between trust-img ">
            <div className="container  m-0 mt-5 col-lg-7 ">
              <h1 className="container fw-bold head" >
                Your Technology Partner
              </h1>
              <p className="container  lead trust-text head1 ">
                Methologik delivers software consultancy in the tech sector to
                international businesses and local clients with 100% successful
                project delivery. We hire the best innovators who can deliver
                successful projects to our clients with our design-focused
                approach and project execution tactics.
              </p>
            </div>
            <div className=" d-flex col-lg-5 justify-content-around ">
                <div className="position-relative img-box"> 
              <img className="bg-trust img-fluid " src="http://methologik.com/static/media/Tree.96f6f4d3246d76938fedd1dcbd2be761.svg" alt="" />

              <img className="bg-male  " src="http://methologik.com/static/media/Man.d5b7b371318ca79e0c263feb56f8be50.svg" alt="" />
              <img className="bg-female " src="http://methologik.com/static/media/Women.fa65e7914f4e1e9556a80e1e1ff9742f.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <h4 className="container ms-sm-1 ms-md-3 mt-5 mt-lg-1 text-center text-lg-start fw-semibold">Trusted By</h4>
       <div className=" text-center text-lg-start pt-5 ">
    <div className="row ms-md-3">
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company1} alt=""/>
        </div>
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company2} alt=""/>
        </div>
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company3} alt=""/>
        </div>
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company4} alt=""/>
        </div >
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company5} alt=""/>
        </div>
        <div className="col-lg logo my-2 my-md-0">
            <img className="img" src={company6} alt=""/>
        </div>
        </div>

</div>

        </div>
        <div className="" ><h1 className="fs-1 text-center fw-semibold ms-2 ms-md-2 me-lg-2  mt-5">Services</h1></div>
        <div className="container  text-start  ">
    <div className="container row  pt-5 ms-lg-1 ">
        <div className="col-lg-1"></div>  
        <div className="services col-lg-3 py-1">
                <img className="logos ps-2 pt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB7ZUxCoAwDEV/xGOI6KguLnqPntD7OLmoo6V4ChFiu4iL2JYODn1LEkIemRJC3bUADWDo6IzEyYJQ9ZsuCvgj01uwjgRXqp7NfIIAREmUREmU/EqSvjX2vNn4cXt1LnM1l3DbhD9qi00ytZSwJMjLSEAsTAI/JtAhLl52HL4YJnqWAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=" alt=""/>
                    <h6 className="fs-5">Consultancy</h6>
                    <p className="p-2">With the professional guidance of our qualified consultants, you can overcome the technological constraints that are getting in the way of your success. We help clients with designs, development with custom functionality, and maintain software applications that meet their specific needs.</p>
                </div>  
            <div className="services col-lg-3 py-1  " >
                <img className="logos ps-2 pt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABiSURBVHgB7dIxCoAwDAXQn9CpZxDsWnAueP9B8AKOFjxIJIhuTv7BIW9Jps+HRFDbDqCAoysxzJX0rNsq+KI286Eg+3+gLONkgxkYDlV+wzTnfG1x5QiMwHdyfziLN+zg6SfY2RElucJDBQAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC" alt=""/>
                <h6 className="fs-5"> Software Development</h6>
                <p className="p-2">Innovating the future with softwares! We develop software with custom functionality to meet your business needs. The software development process involves a detailed analysis of the user’s requirements, designing the software architecture, coding, and testing.</p>
                </div>
                
                <div className="services col-lg-3 py-1 ">
                    <img className="logos ps-2 pt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgBhZXPTxNBFMffTLc/MNFAgolGS6aJJlgwWRIhysXlLwAPJt6Ak0fQox66XIwngXjwSElM1HgwXr3QejJCpJoATTRhAzUS42E1gcK2nfHN7Ox2CwXeqX0z85n3vvPeWwLHGbM6oWN3HIBY+M+UHr3igBAO+vMAtAjlT06746Qt8MzeNICYAkE64TQTfAbKK/bJ4N6bDAhfCqMToiAj+1it2hnBGfCGlT539i9wzICQUdwx1syCjkSjJ8dAZboTUF4u/mImq/PaJvrc9NZaV2sgJp5JRM404bQZewgtQdUbkFDprjU8qxl9q23v19m3vSr0cQ7qrGQws7MJzg7ZEH2cjmQOrg1OwdVBkxKSU1yAfAu0p38OuFjqQoleVauOOicZKWPKl8KXYBPa2N1aDZ55HriEuNeJkQGn5Er/VrovTwiMq02cT6crG/PIsfyshQvVWiYG3RfH8CHG/BuFjZXwGogoZLnYf+p5vedw4VEymVpPxu9B9yV3+0zXJELvS81JQ9xK/9x4ry74U3Hg/GVLKg8xumMAoeMqUQE26roYRPuhp88U/s/S27gh182HNS+v9iK07jUGMjtlpyVFwRcxSEvWPmosmHI2xNeIfjYen9CAO7D+eWC4UbcfoDTSniQSTiaVco+KFyuA/3ImheDRvi+XfP2yCBQ5rZ8dRPXm4EDV7EvDcF/E4yak4u+OcJt1zGjUX+npmyaELPhQYatHCS5DKQQI5zel/nvIlK8NzsIxRsEvEyiw/lVMf7YJXZ8JNuFlU/5mYs/+WC1iI0zqlWnovWGFtKvDpv7lIJgoCb7QmHS6qm0j0ArLSr+K9vLW2qJOuYCFamt4LgTHaj4YhxSCeUH+fh43nPq/3Uy6Ui5GU+Kc+PUqoBD1Q8Kbx7J0lSRB1ISO6svyFJK1Rblhk8ZY5kK3CYcMh4k6RATPtyyUsFlE2I23VaOB0EPJK1K1AcicvnEh6PWIqcsOZ6Kv1T6iu05mxrEfSg4N0wp6vSMRDpJN1st8FeRgb2OClnyu+hgwxSivqPehzbS8EQ03Eb4qUzPAYL4MpD2Y8Kh0jmYoM0I3ho/zdSScrziYzFRH4TEOoStcd6c0pWXD0qPAaoFKRnBn20iyQzk1O04zWRVczMF+fT6YfCeDVWT4dYB4EBmD6LyWHwPAwV/FijoEDOw/eYiKP6b5R1QAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==" alt=""/>
                    <h6 className="fs-5">Design</h6>
                    <p className="p-2">Unlocking the creative potential! We design UI that delivers on users’ needs, giving them a good experience. We believe in the power of design, which are visually appealing, with a clear and consistent structure that follows the natural workflow of the user.</p>
                </div>
                
                
                <div className="col-lg-2"></div> 
        </div>
        </div>
        <div className="container  text-start  ">
    <div className="container-fluid row  pt-3 ">
        <div className="col-lg-2 ms-lg-5"></div>    
            
                
                <div className="services ms-lg-3 col-lg-3 py-1 ">
                    <img className="logos ps-2 pt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALQSURBVHgBnVVNbtpQEJ5nTH66YtlKhdiLSinpwl00irJyTpDegOQEyQ3i3ICcIOQG3ABnU0VNpFCpFKQucCFSukStgBbMm868Z2wIOEgdybL8Zuabb+bNjAWkieXmYLNfAhAufTl8EmkCQAzovAJgXEPrJljmLpYCvhicAuAJoMjBKkF5Dq0773ng7T0LhKzF7BB9xUyYPjQ//VBnxQ8OSMpAiEP6+phkYRzMshcpoJzuEbRur+E52XbIZ23GJwE3Eu4xaB2Go/crQVla9QDWyVaQD/syhuXkEuDirhdHHY4OIKj3+PihsNPu0EPvUip4nWzXyId9GWPDPNGl0CVoKyMc2YpFJN3CDsYACH6YyR7bQaKfL8ueq7PGHgzHNjGeuEohoToLOisCqL0EuKYccwaXbYtqu1CWG58s+cnBerZkgDBKkXcVUiQzkpSq8LQZHHGA7uuitxAA5VVExSXGqJUT/JIG/OpnK8h3vp6bo4ktECvq0BBnGTmuzdc/42sdOALe7uo6Nj8vDMu0xvlOY073+HLbCtczl1R3VxGliyt0GrZSRngG/IeEG6Y1f4ILNgwc6Ej7W7BCHqmm3a2dGkisRWx7IOVpofNNs32z70SmAQGLug4aummAdEm5buFdOaRLSwDRC3/17fxD8yI2zIw1MC0pk/rMJ3CaeRphgKtlwKYMqc8xp32gPPndP7d7QW/BUBiHuiyiIsChERxl22qTIbVV686f2i0MyHhybFOHLAv+dNAMNZIgylHEy+msq0+ECgOCnLj5buMgFZRXrd413MseD5puI2b9d+0ekiUU74uVon4IAwbl+gbUtuoidbsxa4wXiQObFIRTWyW8HzYH9zGoxtDZzhvO7VeWKpWiqqby+209ArPUflGrAN3IToPO7BqxlElx94wAPVglArntyvAnvHhaOpHqxOwhO2VmwezPlO8B6Lc1HF+l3cU/O7NThZEwPIsAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==" alt=""/>
                    <h6 className="fs-5">Website Development</h6>
                    <p className="p-2">Methologik is known as top web
                        development and web design company
                        globally delivering the top-notch
                        website development services to craft
                        bespoke web applications, websites,
                        web tools, etc., to international
                        businesses as well as startups, with 100%
                        successful project delivery.</p>
                </div>
                
                <div className="services col-lg-3 py-1">
                <img className="logos ps-2 pt-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB7ZUxCoAwDEV/xGOI6KguLnqPntD7OLmoo6V4ChFiu4iL2JYODn1LEkIemRJC3bUADWDo6IzEyYJQ9ZsuCvgj01uwjgRXqp7NfIIAREmUREmU/EqSvjX2vNn4cXt1LnM1l3DbhD9qi00ytZSwJMjLSEAsTAI/JtAhLl52HL4YJnqWAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=" alt=""/>
                    <h6 className="fs-5">Consultancy</h6>
                    <p className="p-2">With the professional guidance of our qualified consultants, you can overcome the technological constraints that are getting in the way of your success. We help clients with designs, development with custom functionality, and maintain software applications that meet their specific needs.</p>
                </div>
                <div className="col-lg-3"></div> 
        </div>
        </div>
        <div><h1 className="fs-2   text-center fw-semibold me-md-3 mt-5 ">Our Work</h1></div>
    
      </section>
    <div className="container ">  
    <section className="container pt-3">
<div className="d-lg-flex container mx-auto justify-content-evenly mt-3 pt-5">
    
    <div className="container">
        <h6>POS and RMS</h6>
        <h4 className="pt-1">Imdady</h4>
        <p className=" pt-2">Immediate manages your business in the point of sale program  and the restaurant program using next generation technologies</p>
        <div className="d-flex  pt-2 ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7ZQ/DoIwFMa/IgubBzCkjEQXF+KIR/EG3kCv4Ak8ioyG3eBG5QQuxkmxIBCQQClijIbf0Lz2te99r/+AHgEks0zL5y1FNzB4rhEZSm6Qojtoaqgll+cSvINphfmugg/z+wlU0YRAH/uk4gLwcTYKDkbdenEFpKUvQViBfqpXKKK/Rd9PUD7k4lPPPq2YyczG7b6FxL+VS0AYENIX/7NP7SG0y4oHX6IRUazEqpyTVjJQ5kXVZIOrtgZzzmiA8B3w4LtMVUgWOO4dSNDwkGPVU9ngETUVJPvYQvV/8QCrTDZC7yPkBgAAAABJRU5ErkJggg==" alt=""/>
            </div> 
            <p>Inventory Management</p>
        </div>
        <div className="d-flex  ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7ZO/TsMwEMa/c1rRkYE/QxkYG7rAQNoyZeQJeA3oExA2tr5GxcYbpAu1YOnSrizJRIayVapiY7sQCUFjZ0BiyE865aLz3Ze7nIGaGit+79pYRTznk53gFoR75V3ioA28pRPXVDcRv3ejBYbrNQZCgDMvxP7RO7KUu6Qz64nuxSnExiUpjX2+7JqYA+Wd6BFBjNWncEhMpg0vnHoqhXCnhKWJOYzOKxUgRHo8CVGohGItBKJH9dz5FrMI0e8C/WOQeB3kOR5WK1y1WjAdsMYZcrHcGps/zdw7yZIl9tqUMBZyVaAYkZSHYLKvO/oRW/AxKo8rS+MvoeIfbFa4GF0RWzxHKIFgo3uutksVgxzpFdaMmk2dOgQTMeYvM1sJ+wrrIttW2EGgGp0ggh9IYyfK/zP0zddWU/Nv+ADkcYXMoauWDgAAAABJRU5ErkJggg==" width="30px" alt=""/>
            </div>
            <p>Multi-retailers managment</p>
        </div>
        <div className="d-flex ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZWxDcIwEEX/RUGKqGAARCgj0dCkZ4OswAiMwAZswAisQAsVBVJKjFjAHZEoDjtSEgpwChuKxK+wLNvSu7PubKArUD1L0gzEOzCNYAOxBAcb5MftJ8lVjTFc8RiOIQ5ST8O35bgc8xPBhirYqNA3UkoC/AEv6akkNG3ep/M9mDPTGVXv4hkMFjNxlt/OtGXS3v3KYhJojJlMbpclHOCry0t+R1PCpN5+Vn2RpAwXFFHdO00mjJUyCdiigwWtq1+xW7wACh8stiFHBr0AAAAASUVORK5CYII=" alt=""/>
            </div>
                
            <p>Multiple printing for Different positions</p>
            
        </div>
        <div className="d-flex ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZSxTsMwEIb/MwUEU1YkqNwNaIdsMKZvAE9AeYLCm8ATtLwBfYJ2RExZKrrhUnYyVYKqMbET2jS2khKJBfUfksi+u+985wuw0b/QO6+7k2rjY1w9uVnHnqGMQrQB6RBjwTrmv4a8cpdLoKW+tzEfrONTsa4en3OQ7ETZcrw819JbW/OZB4p2IHsHYiRwetaBlB4ka2L0JGzhmB0Q9qMwHlS0jIioHXvSo35L8OgZ+yjfQsgCoBxJQFIzva0aHkV1iSCqYtjVi7ufl1Eufh6I5QKyx9cN19kPFmu+H2Dnq5kHWkKKAJoBL/G6X9mwgbjnmBAVPEnTprejeot0APiHYugbBoGTcl3t5RIi6ToBWY9MjK5is8wplFTWe1NVCXdRCTEITIgqj260CVKzoa8pLLNhA2RKvXq7bCAdeHaRFKGrZyOt/WknD2BCDFBc2zC5VZLRg2EvyckDJMnla8IbHkLZV7NxOB7WUEKF/y4KZdxwiR5KqhDyMxsVNr9DSVUKLRi7lQgdo+Eb/ZW+AVe5throvqsqAAAAAElFTkSuQmCC" alt=""/>
            </div>
            <p>Power of Cloud.</p>
        </div>
        <br/>
        <br/>
        <button type="button" className="btn btn-outline-secondary mb-3" >learn more</button>
    </div>
    <div className="col-lg-1"></div>
    <div className="container">
        <img className="work-img img-fluid " src={workimg1} alt=""/>
    </div>
   

</div>
</section>
<section className="container pt-3">
  
<div className="d-lg-flex mx-auto container align-items-center justify-content-evenly mt-3 pt-5">
<div className="container">
        <img className="work-img img-fluid " src={workimg2} alt=""/>
    </div>
     <div className="col-lg-1"></div>
    <div className="container pt-5">
        <h6>
        Online Gorcery System</h6>
        <h4 className="pt-1">Taswog</h4>
        <p className=" pt-2 pe-lg-5">In Taswog customers can browse through the grocery products, add them to the cart, fill in their delivery location details, select their own convenient time slot and then place an order. The company receives these orders, handpicks them, and delivers them to the customer’s household.</p>
        <div className="d-flex pt-2 ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7ZQ/DoIwFMa/IgubBzCkjEQXF+KIR/EG3kCv4Ak8ioyG3eBG5QQuxkmxIBCQQClijIbf0Lz2te99r/+AHgEks0zL5y1FNzB4rhEZSm6Qojtoaqgll+cSvINphfmugg/z+wlU0YRAH/uk4gLwcTYKDkbdenEFpKUvQViBfqpXKKK/Rd9PUD7k4lPPPq2YyczG7b6FxL+VS0AYENIX/7NP7SG0y4oHX6IRUazEqpyTVjJQ5kXVZIOrtgZzzmiA8B3w4LtMVUgWOO4dSNDwkGPVU9ngETUVJPvYQvV/8QCrTDZC7yPkBgAAAABJRU5ErkJggg==" alt=""/>
            </div> 
            <p>Shop Grocery category wise</p>
        </div>
        <div className="d-flex ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7ZO/TsMwEMa/c1rRkYE/QxkYG7rAQNoyZeQJeA3oExA2tr5GxcYbpAu1YOnSrizJRIayVapiY7sQCUFjZ0BiyE865aLz3Ze7nIGaGit+79pYRTznk53gFoR75V3ioA28pRPXVDcRv3ejBYbrNQZCgDMvxP7RO7KUu6Qz64nuxSnExiUpjX2+7JqYA+Wd6BFBjNWncEhMpg0vnHoqhXCnhKWJOYzOKxUgRHo8CVGohGItBKJH9dz5FrMI0e8C/WOQeB3kOR5WK1y1WjAdsMYZcrHcGps/zdw7yZIl9tqUMBZyVaAYkZSHYLKvO/oRW/AxKo8rS+MvoeIfbFa4GF0RWzxHKIFgo3uutksVgxzpFdaMmk2dOgQTMeYvM1sJ+wrrIttW2EGgGp0ggh9IYyfK/zP0zddWU/Nv+ADkcYXMoauWDgAAAABJRU5ErkJggg==" width="30px" alt=""/>
            </div>
            <p>Delivery guys live response</p>
        </div>
        <div className="d-flex">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZWxDcIwEEX/RUGKqGAARCgj0dCkZ4OswAiMwAZswAisQAsVBVJKjFjAHZEoDjtSEgpwChuKxK+wLNvSu7PubKArUD1L0gzEOzCNYAOxBAcb5MftJ8lVjTFc8RiOIQ5ST8O35bgc8xPBhirYqNA3UkoC/AEv6akkNG3ep/M9mDPTGVXv4hkMFjNxlt/OtGXS3v3KYhJojJlMbpclHOCry0t+R1PCpN5+Vn2RpAwXFFHdO00mjJUyCdiigwWtq1+xW7wACh8stiFHBr0AAAAASUVORK5CYII=" alt=""/>
            </div>
                
            <p>Location tracking of delivery</p>
            
        </div>
        <div className="d-flex">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZSxTsMwEIb/MwUEU1YkqNwNaIdsMKZvAE9AeYLCm8ATtLwBfYJ2RExZKrrhUnYyVYKqMbET2jS2khKJBfUfksi+u+985wuw0b/QO6+7k2rjY1w9uVnHnqGMQrQB6RBjwTrmv4a8cpdLoKW+tzEfrONTsa4en3OQ7ETZcrw819JbW/OZB4p2IHsHYiRwetaBlB4ka2L0JGzhmB0Q9qMwHlS0jIioHXvSo35L8OgZ+yjfQsgCoBxJQFIzva0aHkV1iSCqYtjVi7ufl1Eufh6I5QKyx9cN19kPFmu+H2Dnq5kHWkKKAJoBL/G6X9mwgbjnmBAVPEnTprejeot0APiHYugbBoGTcl3t5RIi6ToBWY9MjK5is8wplFTWe1NVCXdRCTEITIgqj260CVKzoa8pLLNhA2RKvXq7bCAdeHaRFKGrZyOt/WknD2BCDFBc2zC5VZLRg2EvyckDJMnla8IbHkLZV7NxOB7WUEKF/y4KZdxwiR5KqhDyMxsVNr9DSVUKLRi7lQgdo+Eb/ZW+AVe5throvqsqAAAAAElFTkSuQmCC" alt=""/>
            </div>
            <p>Cross platform Data flow</p>
        </div>
        
        <button type="button" className="btn btn-outline-secondary mt-2 mb-3" >learn more</button>
    </div>
    
    

</div>
</section>
<section className="container pt-3">
<div className="d-lg-flex mx-auto container align-items-center justify-content-evenly mt-3 pt-5">
    
    <div className="container pt-2">
        <h6>Society Management System</h6>
        <h4 className="pt-1">Manzil</h4>
        <p className=" pt-2">The aim of the project is design contract management solution for multiples community/ properties which is can be used by the renting office management, solution can be branded for on primes or cloud</p>
        <div className="d-flex pt-2 ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7ZQ/DoIwFMa/IgubBzCkjEQXF+KIR/EG3kCv4Ak8ioyG3eBG5QQuxkmxIBCQQClijIbf0Lz2te99r/+AHgEks0zL5y1FNzB4rhEZSm6Qojtoaqgll+cSvINphfmugg/z+wlU0YRAH/uk4gLwcTYKDkbdenEFpKUvQViBfqpXKKK/Rd9PUD7k4lPPPq2YyczG7b6FxL+VS0AYENIX/7NP7SG0y4oHX6IRUazEqpyTVjJQ5kXVZIOrtgZzzmiA8B3w4LtMVUgWOO4dSNDwkGPVU9ngETUVJPvYQvV/8QCrTDZC7yPkBgAAAABJRU5ErkJggg==" alt=""/>
            </div> 
            <p>Locality management</p>
        </div>
        <div className="d-flex ">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7ZO/TsMwEMa/c1rRkYE/QxkYG7rAQNoyZeQJeA3oExA2tr5GxcYbpAu1YOnSrizJRIayVapiY7sQCUFjZ0BiyE865aLz3Ze7nIGaGit+79pYRTznk53gFoR75V3ioA28pRPXVDcRv3ejBYbrNQZCgDMvxP7RO7KUu6Qz64nuxSnExiUpjX2+7JqYA+Wd6BFBjNWncEhMpg0vnHoqhXCnhKWJOYzOKxUgRHo8CVGohGItBKJH9dz5FrMI0e8C/WOQeB3kOR5WK1y1WjAdsMYZcrHcGps/zdw7yZIl9tqUMBZyVaAYkZSHYLKvO/oRW/AxKo8rS+MvoeIfbFa4GF0RWzxHKIFgo3uutksVgxzpFdaMmk2dOgQTMeYvM1sJ+wrrIttW2EGgGp0ggh9IYyfK/zP0zddWU/Nv+ADkcYXMoauWDgAAAABJRU5ErkJggg==" width="30px" alt=""/>
            </div>
            <p>Security Management</p>
        </div>
        <div className="d-flex">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZWxDcIwEEX/RUGKqGAARCgj0dCkZ4OswAiMwAZswAisQAsVBVJKjFjAHZEoDjtSEgpwChuKxK+wLNvSu7PubKArUD1L0gzEOzCNYAOxBAcb5MftJ8lVjTFc8RiOIQ5ST8O35bgc8xPBhirYqNA3UkoC/AEv6akkNG3ep/M9mDPTGVXv4hkMFjNxlt/OtGXS3v3KYhJojJlMbpclHOCry0t+R1PCpN5+Vn2RpAwXFFHdO00mjJUyCdiigwWtq1+xW7wACh8stiFHBr0AAAAASUVORK5CYII=" alt=""/>
            </div>
                
            <p>Maintenance Management</p>
            
        </div>
        <div className="d-flex">
            <div className="me-lg-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7ZSxTsMwEIb/MwUEU1YkqNwNaIdsMKZvAE9AeYLCm8ATtLwBfYJ2RExZKrrhUnYyVYKqMbET2jS2khKJBfUfksi+u+985wuw0b/QO6+7k2rjY1w9uVnHnqGMQrQB6RBjwTrmv4a8cpdLoKW+tzEfrONTsa4en3OQ7ETZcrw819JbW/OZB4p2IHsHYiRwetaBlB4ka2L0JGzhmB0Q9qMwHlS0jIioHXvSo35L8OgZ+yjfQsgCoBxJQFIzva0aHkV1iSCqYtjVi7ufl1Eufh6I5QKyx9cN19kPFmu+H2Dnq5kHWkKKAJoBL/G6X9mwgbjnmBAVPEnTprejeot0APiHYugbBoGTcl3t5RIi6ToBWY9MjK5is8wplFTWe1NVCXdRCTEITIgqj260CVKzoa8pLLNhA2RKvXq7bCAdeHaRFKGrZyOt/WknD2BCDFBc2zC5VZLRg2EvyckDJMnla8IbHkLZV7NxOB7WUEKF/y4KZdxwiR5KqhDyMxsVNr9DSVUKLRi7lQgdo+Eb/ZW+AVe5throvqsqAAAAAElFTkSuQmCC" alt=""/>
            </div>
            <p>Accountability of Paid expense.</p>
        </div>
            
        
        <button type="button" className="btn btn-outline-secondary mt-2 mb-3" >learn more</button>
    </div>
    <div className="col-lg-1"></div>
    <div className="container">
        <img className="work-img img-fluid " src={workimg3} alt=""/>
    </div>
   

</div>
</section>
</div>
<Footer/>
    </div>
  );
}