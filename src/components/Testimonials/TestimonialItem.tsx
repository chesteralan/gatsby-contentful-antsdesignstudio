import React from 'react'
import type { Testimonial } from './Testimonials'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

type Props = {
    testimonial: Testimonial;
}

const TestimonialItem = ({ testimonial }: Props) => {
 const { 
    name,
    message,
    image,
} = testimonial;

const imageData = getImage(image) as IGatsbyImageData;

  return (
    <div className="testimonial-item">
            <GatsbyImage image={imageData} alt={name} className="testimonial-img" />
            <h3>{name}</h3>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
             {message.message}
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
  )
}

export default TestimonialItem