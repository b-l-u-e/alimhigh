import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calender from "./Calender";

function Banner() {
  return (
    <div className="grid grid-cols-2">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/demo-1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/demo-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/demo-3.jpg" alt="" />
        </div>
      </Carousel>
      <div>
        <Calender />
      </div>
    </div>
  );
}

export default Banner;
