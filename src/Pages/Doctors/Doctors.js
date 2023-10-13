import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

import { useState, useRef } from "react";
import "./Doctors.css";

const Doctors = ({ doctors }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleCards = showMore ? doctors : doctors.slice(0, 4);

  const toggleShowMore = () => {
    if (showMore) {
      // Scroll to the bottom of the page when showMore is true
      window.scrollTo(0, document.body.scrollHeight - 1670);
    }
    if (!showMore) {
      // Scroll to the bottom of the page when showMore is true
      window.scrollTo(0, document.body.scrollHeight - 790);
    }
    setShowMore(!showMore);
  };
  const viewMoreButtonRef = useRef(null);

  return (
    <Container id="doctors">
      <h2 className="heading">Meet Our Doctors</h2>
      <Row>
        {visibleCards.map((doctor) => (
          <Col md={3} key={doctor.id}>
            <Card className="card-container">
              <div className="card">
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  alt={doctor.name}
                  className="image-card"
                />
              </div>
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {doctor.post}
                </Card.Subtitle>
                <Card.Text> Experience : {doctor.experience}</Card.Text>
                <div className="d-flex justify-content-between">
                  <span className="">
                    <span
                      style={{
                        marginRight: 10,
                        marginTop: 50,
                      }}
                    >
                      <Icon
                        icon="ic:round-star"
                        color="orange"
                        width="25"
                        height="25"
                      />
                    </span>
                    {doctor.rating}
                  </span>
                  <button
                    className="booKButton"
                    onClick={() => {
                      window.location.href = "/appointment";
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {doctors.length > 4 && (
        <button
          className="viewButton"
          ref={viewMoreButtonRef}
          onClick={(e) => {
            e.preventDefault();
            toggleShowMore();
          }}
        >
          {showMore ? "View Less" : "View More"}
          {showMore ? (
            <Icon
              icon="simple-line-icons:arrow-up"
              color="blue"
              width="20"
              height="20"
              style={{ marginLeft: 10 }}
            />
          ) : (
            <Icon
              icon="ep:arrow-down"
              color="blue"
              width="24"
              height="24"
              style={{ marginLeft: 10 }}
            />
          )}
        </button>
      )}
    </Container>
  );
};
export default Doctors;
