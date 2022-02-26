import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ScrollButton.css"

export const ScrollButton = () => {
 
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled =   document.documentElement.scrollTop || document.body.scrollTop ;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <a id="scrollToTop" onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
      <FontAwesomeIcon icon={faArrowUpLong} />
    </a>
  );
};
