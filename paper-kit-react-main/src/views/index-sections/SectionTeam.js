import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function SectionTeam() {
  return (
    <>
      <div
        className="section section-team"
        style={{
          backgroundColor: "#62ACC3",
          color: "white",
          padding: "50px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Imagen del equipo */}
            <Col md="6" style={{ textAlign: "center" }}>
              <img
                src={require("assets/img/team.jpg")}
                alt="Nuestro Equipo"
                style={{
                  maxHeight: "50%",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </Col>
            {/* Texto descriptivo */}
            <Col md="6">
              <div style={{ padding: "20px" }}>
                <h2 style={{ fontWeight: "bold" }}>Nuestro Equipo</h2>
                <p    style={{
                fontSize: "1.25rem"
              }}>
                  Somos un grupo de profesionales dedicados a ofrecer la mejor
                  experiencia a nuestros clientes. Con pasión y compromiso,
                  trabajamos juntos para alcanzar nuestras metas y garantizar la
                  excelencia en todo lo que hacemos. ¡Conócenos mejor y únete a
                  nuestra visión!
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={require("assets/img/star.png")}
                    alt="Estrella"
                    style={{
                      maxHeight: "30%",
                      maxWidth: "30%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionTeam;
