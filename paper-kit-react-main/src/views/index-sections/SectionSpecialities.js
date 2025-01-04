import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionSpecialities() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [37.5],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2 style={{ fontWeight: "bold", color:"#324266" }}>Nuestras Especialidades</h2>
          </div>
          <div id="cards">
            <Row>
              <Col md="6" lg="3">
                <Card
                  className="text-center"
                  style={{
                    backgroundImage: `url(${require("assets/img/mar.jpg")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}>
                  <CardImg
                    top
                    src={require("assets/img/specialities/kinesiologia.jpg")}
                    alt="Especialidad"
                    style={{ 
                      maxHeight: "200px", 
                      objectFit: "cover",
                      width: "100%",
                      height: "200px", // Ajusta el alto deseado
                      objectFit: "cover",
                    }}
                    
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ fontWeight: "bold", color:"#324266" }}>Kinesiología</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" lg="3">
                <Card
                  className="text-center"
                  style={{
                    backgroundImage: `url(${require("assets/img/mar.jpg")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}>
                  <CardImg
                    top
                    src={require("assets/img/specialities/nutricion.jpg")}
                    alt="Especialidad"
                    style={{ 
                      maxHeight: "200px", 
                      objectFit: "cover",
                      width: "100%",
                      height: "200px", // Ajusta el alto deseado
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ fontWeight: "bold", color:"#324266" }}>Nutrición</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" lg="3">
                <Card
                  className="text-center"
                  style={{
                    backgroundImage: `url(${require("assets/img/mar.jpg")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}>
                  <CardImg
                    top
                    src={require("assets/img/specialities/centro-estetico.jpg")}
                    alt="Especialidad"
                    style={{ 
                      maxHeight: "200px", 
                      objectFit: "cover",
                      width: "100%",
                      height: "200px", // Ajusta el alto deseado
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ fontWeight: "bold", color:"#324266" }}>Medicina Estética</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" lg="3">
                <Card
                  className="text-center"
                  style={{
                    backgroundImage: `url(${require("assets/img/mar.jpg")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}>
                  <CardImg
                    top
                    src={require("assets/img/specialities/psicologia.webp")}
                    alt="Especialidad"
                    style={{ 
                      maxHeight: "200px", 
                      objectFit: "cover",
                      width: "100%",
                      height: "200px", // Ajusta el alto deseado
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ fontWeight: "bold", color:"#324266" }}>Psicología</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSpecialities;
