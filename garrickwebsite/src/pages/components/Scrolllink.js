import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollLink = ({ label, targetId, offset = 100 }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    const isHomePage = window.location.pathname === '/';

    if (isHomePage) {
      // Already on the homepage, just scroll to the target section
      scrollToTarget();
    } else {
      // Not on the homepage, navigate to the homepage and then scroll
      navigate('/');
      setTimeout(() => {
        scrollToTarget();
      }, 100);  // Delay to ensure navigation completes before scrolling
    }
  };

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {label}
    </a>
  );
};

export default ScrollLink;
