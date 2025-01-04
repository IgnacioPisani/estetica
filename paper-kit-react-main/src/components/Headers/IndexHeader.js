/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/pexels.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <img
                src={require("assets/img/cymar.png")}
                alt="Cymar Logo"
                className="logo-img"
                style={{ maxWidth: "200px" }} // Ajusta el tamaño según sea necesario
              />
              <div className="fog-low"></div>
              <div className="fog-low right"></div>
            </div>
          </Container>
        </div>
        <div />
      </div>
    </>
  );
}

export default IndexHeader;
