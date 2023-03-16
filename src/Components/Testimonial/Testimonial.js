import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="bg-[#F6F6F6] py-28">
      <div className="container md:w-5/6 px-2 md:px-0 mx-auto my-3">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
          <h2 className="text-5xl font-bold leading-tight">
            {" "}
            Words from our customers
          </h2>
        </div>
        {/* carosel */}
        <div className="my-8">
          <div className="w-full">
            <Carousel infinite={true} autoPlay={true} autoPlaySpeed={3000} responsive={responsive}>
              <TestimonialItem/>
              <TestimonialItem/>
              <TestimonialItem/>
              <TestimonialItem/>
              <TestimonialItem/>
              
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
