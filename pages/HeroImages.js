import { useState, useRef, useEffect } from 'react';
import styles from '../styles/hero-images.module.css';

export default function HeroImages() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [startTimestamp, setStartTimestamp] = useState(0);
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseUp = () => {
            setIsDragging(false);
            setDragOffset({ x: 0, y: 0 });
            document.body.style.cursor = 'grab !important';

          };
          
        const handleMouseMove = (event) => {
            if (isDragging) {
                document.body.style.cursor = 'grabbing !important';
                event.preventDefault();
                
                const x = event.clientX;
                const y = event.clientY;
                
                imagesRef.current.forEach((imageRef) => {
                    const { width, height } = imageRef.getBoundingClientRect();
                    
                    const newX = x - dragOffset.x;
                    const newY = y - dragOffset.y;
                    
                    imageRef.style.left = `${newX}px`;
                    imageRef.style.top = `${newY}px`;
                });
            }
        };
        
        
        
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            document.addEventListener('mouseup', handleMouseUp);
            
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, startX, startY, startTimestamp, rotation]);
    
    const handleMouseDown = (event, index) => {
        event.preventDefault();
        
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRef = imagesRef.current[index];
        const imageRect = imageRef.getBoundingClientRect();
        
        setIsDragging(true);
        document.body.style.cursor = 'grabbing';
        setStartX(event.clientX);
        setStartY(event.clientY);
  setStartTimestamp(Date.now());
  setDragOffset({
    x: event.clientX - (imageRect.left - containerRect.left),
    y: event.clientY - (imageRect.top - containerRect.top)
  });
};

      
  
const handleMouseUp = () => {
  setIsDragging(false);
  setDragOffset({ x: 0, y: 0 });
};

  
    return (
      <div
        ref={containerRef}
        className={styles.heroImages}
        onMouseUp={handleMouseUp}
      >
        <img
          ref={(ref) => (imagesRef.current[0] = ref)}
          src="https://uploads-ssl.webflow.com/6097a2499efec713b2cb1c07/63ffd3084985030a1596178c_circle2.svg"
          style={{ transform: `rotate(${rotation}deg)` }}
          onMouseDown={(event) => handleMouseDown(event, 0)}
        />
        <img
          ref={(ref) => (imagesRef.current[1] = ref)}
          src="https://uploads-ssl.webflow.com/6097a2499efec713b2cb1c07/60984275a2aff775283fc930_RPS%20Hand.svg"
          style={{ transform: `rotate(${rotation * -1}deg)` }}
          onMouseDown={(event) => handleMouseDown(event, 1)}
        />
        <img
          ref={(ref) => (imagesRef.current[2] = ref)}
          src="https://uploads-ssl.webflow.com/6097a2499efec713b2cb1c07/60984282b2ffc0f517826701_RPS%20logo.svg"
          style={{ transform: `rotate(${rotation}deg)` }}
          onMouseDown={(event) => handleMouseDown(event, 2)}
        />
      </div>
    );
  }
  
