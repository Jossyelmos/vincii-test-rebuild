import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Question3 = () => {
    const [disabled, setDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [invisible, setInvisible] = useState(true);

    const wrapperRef = useRef(null);

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, false);
      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      }
      // eslint-disable-next-line
    }, []);
    
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDisabled(true);
        showAlert();
      };
    };

    function handleInputChange(event) {
      const value = event.target.value;
      setInputValue(value);
      if (value.length > 5) {
        setDisabled(false);
      } else {
        setDisabled(true);
      };
    };

    const showAlert = () => {
      setInvisible('Please enter 6 or more characters');
      setTimeout(() => setInvisible(false), 3000);
    };

    return (
        <section ref={wrapperRef}>
          {invisible}
          {disabled && inputValue.length < 6 }
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="inputPassword2" 
                placeholder="Password" 
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <Link to='/question1'>
                <button type="submit" className="btn btn-primary mb-2" disabled={inputValue.length < 6}>
                  Submit
                </button>
            </Link>
          </form>
        </section>
      );
};

export default Question3;
