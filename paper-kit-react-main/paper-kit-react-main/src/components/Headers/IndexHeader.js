/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/pexels-vhusko-8709687.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* Imagen del logo */}
              <img
                src={require("assets/img/logo-g2m/g2mnaranja.webp")} // Cambia "logo.png" por la ruta de tu logo
                alt="Logo"
                style={{
                  maxWidth: "250px", // Ajusta el tamaño máximo del logo
                  marginBottom: "1rem",
                }}
              />
            </div>
            <h2 className="presentation-subtitle text-center">
              <span style={{ color: "#FF8906", fontWeight: "bold", letterSpacing: "2px" }}>
                CALIDAD
              </span>{" "}
              EN CADA GRANO,{" "}
              <span style={{ color: "#FF8906", fontWeight: "bold", letterSpacing: "2px" }}>
                AMOR
              </span>{" "}
              EN CADA PLATO.
            </h2>
          </Container>
        </div>
        <div />
      </div>
    </>
  );
}

export default IndexHeader;
