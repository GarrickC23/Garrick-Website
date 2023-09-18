import React from 'react';

const ScrollLink = ({ label, targetId, offset = 55 }) => {
  const handleClick = (event) => {
    event.preventDefault();

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
