import { Carousel } from "react-bootstrap";
import "./Carousel.css";
function CarouselPage() {
  return (
    <div className="carouselPage">
      <Carousel interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src="https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="caption rounded-3">
            <h3>Consult Me</h3>
            <p>
              Trust our experienced professionals for top-quality healthcare
              services.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src="https://c1.wallpaperflare.com/preview/401/399/725/stethoscope-medical-health-doctor-macbook-laptop.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3>Consult Me</h3>
            <p>
              We're dedicated to improving the health and wellness of our
              community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src="https://wallpapercave.com/wp/wp2655106.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3>Consult Me</h3>
            <p>
              We're here for you 24/7, providing care when you need it most.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
