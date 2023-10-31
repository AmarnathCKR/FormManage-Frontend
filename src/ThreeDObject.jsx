// 3DObject.js
import React, { useRef, useEffect } from 'react';

const ThreeDObject = () => {
 const threeDObjectRef = useRef();

 useEffect(() => {
    const handleScroll = () => {
      const { current } = threeDObjectRef;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const rotation = scrollTop * 0.1; // You can adjust this value for different rotation speeds
      current.style.transform = `translateZ(-100px) rotateY(${rotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return (
    <div ref={threeDObjectRef} className="bg-blue-500 w-64 h-64 transform-gpu rotate-y-180">
      <div className="bg-red-500 w-full h-full transform-gpu rotate-x-180"><img src='https://www.imgawards.com/wp-content/uploads/2020/03/xminnagallery-330x145.jpg.pagespeed.ic.yigETBZFjS.webp' alt="obgg"/></div>
    </div>
 );
};

export default ThreeDObject;