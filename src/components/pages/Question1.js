import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { questions } from './data'

const Question1 = () => {

  return (
    <div className="carousel-wrapper">
        <Carousel autoPlay infiniteLoop showArrows >
            {questions.map(quest => (
                <Link to={`/question2/${quest.id}`} key={quest.id}>
                    <img src={quest.imgURL} alt="place" />
                    <p className="legend">{quest.html}</p>
                    <p className="legend">{quest.html}</p>
                </Link>
            ))}
        </Carousel>
    </div>
  )
};

export default Question1;
