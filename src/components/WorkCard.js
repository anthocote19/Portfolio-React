import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './WorkCardStyles.css';

const WorkCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`work-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="img" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to="https://github.com/anthocote19" className="btn">Consulter</NavLink>
              <NavLink to="https://github.com/anthocote19" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
