import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container,
} from "reactstrap";

function SectionMap() {
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
            <h2 style={{ fontWeight: "bold", color: "#324266" }}>
              Donde Encontrarnos
            </h2>
          </div>
          <div id="map" style={{ width: "100%", height: "450px", marginTop: "20px" }}>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=+(CyMar%20salud%20y%20bienestar)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionMap;
