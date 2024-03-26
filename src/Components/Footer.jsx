import React from "react";
import logo from "../Assets/logo.svg"

export default function Footer() {
  return (
  <>
    <div className="container justify-content-center my-5">
        <footer className="section">
            <div className="row">
                <div className="col-lg-4">
                    <div className="d-flex justify-content-center">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center">
                        <p className="pt-3">© 2023 Methologik. All rights reserved.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex justify-content-center">
                        <a href="https://www.instagram.com/methologikpvtltd/"><img className="img-fluid ps-3" src="http://methologik.com/static/media/Insta.c88bf870da4a53363d166856a14dda3a.svg" alt="" /></a>
                        <a href="https://www.facebook.com/methologikpvtltd"><img className="img-fluid ps-3" src="http://methologik.com/static/media/Fb.8d32dd62231e8e6419aa90d1b012b062.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/company/methologik-pvt-ltd/"><img className="img-fluid ps-3" src="http://methologik.com/static/media/in.b454f313f44f6bdefbf86c81be5256fd.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  </>
  );
}
