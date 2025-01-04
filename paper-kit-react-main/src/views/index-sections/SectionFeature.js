import React from "react";


// reactstrap components
import { Container, Row, Col } from "reactstrap";

function SectionFeature() {
  return (
    <div className="section section-feature" style={{ padding: "4rem 0" }}>
      <Container>
        <Row className="text-center">
          <Col>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#324266",
                marginBottom: "1rem",
                fontStyle: "italic",
              }}
            >
                ¿Por qué elegirnos?
            </h2>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#6c757d",
                marginBottom: "2rem",
              }}
            >
              Centro de Estética CyMar
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6c757d",
                marginBottom: "1rem",
              }}
            >
              ...Es un espacio exclusivo dedicado a la belleza integral.
            </p>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6c757d",
                marginBottom: "1rem",
              }}
            >
              Ofrecemos tratamientos innovadores para el cuidado del rostro y el cuerpo, con tecnología de última generación y un enfoque personalizado.
            </p>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6c757d",
                marginBottom: "1rem",
              }}
            >
              En nuestro centro, encontrarás un ambiente cálido donde podrás relajarte y disfrutar mientras realzas tu belleza natural.
            </p>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6c757d",
                marginBottom: "1rem",
              }}
            >
              Agradecemos a nuestras clientes por confiar en nosotros desde el primer día y permitirnos ser parte de su transformación.
            </p>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6c757d",
                marginBottom: "1rem",
              }}
            >
              Nos enorgullece ofrecerte un servicio excepcional, cuidando cada detalle para que vivas una experiencia inolvidable.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionFeature;
