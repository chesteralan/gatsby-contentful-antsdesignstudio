import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialItem from "./TestimonialItem";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.css";

type Props = {};

export type Testimonial = {
  name: string;
  message: { message: string };
  image: IGatsbyImageData;
};

const Testimonials = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      testimonials: allContentfulTestimonials {
        nodes {
          name
          message {
            message
          }
          image {
            gatsbyImageData(width: 100, placeholder: TRACED_SVG)
          }
          priority
        }
      }
      bg: contentfulSettings(key: { eq: "TESTIMONIALS_BACKGROUND_IMAGE" }) {
        imageValue {
          url
        }
      }
    }
  `);

  const testimonials = data.testimonials.nodes.sort(
    (a: any, b: any) => b.priority - a.priority
  );
  const bgUrl = data.bg?.imageValue?.url;

  return (
    <section
      id="testimonials"
      className="testimonials"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container" data-aos="zoom-in">
        <div className="testimonials-carousel">
          <Carousel
            showStatus={false}
            swipeScrollTolerance={5}
            autoPlay={false}
            centerMode={false}
            dynamicHeight={false}
            emulateTouch={true}
            infiniteLoop={true}
            interval={3000}
            preventMovementUntilSwipeScrollTolerance={true}
            stopOnHover={false}
            swipeable={true}
            useKeyboardArrows={false}
            selectedItem={0}
            showArrows={false}
            showIndicators={true}
            showThumbs={false}
            ariaLabel={""}
            axis={"horizontal"}
            transitionTime={500}
          >
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialItem
                key={index.toString()}
                testimonial={testimonial}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
