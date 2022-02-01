import React from 'react';
import { useParams } from 'react-router-dom';
import { questions } from './data';

const Question2 = () => {
  const {id} = useParams();

  const getDetails = questions.find(item => item.id === id)

  return (
    <div className='quest2'>
        <img alt="No, he'll be an engineer." src={getDetails.imgURL} />
    </div>
  );
};

export default Question2;