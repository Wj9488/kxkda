// import { useEffect, useRef } from 'react';

// function Canvas() {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         const context = canvas.getContext('2d');
//         const words = [];
//         const wordSpeed = 1.75; // Speed Var 
//         const colorsArr = ["#fafafa"];

//         context.font = "18px Arial";

//         for(let i = 0; i < 30; i++) {
//             words.push({
//                 text: "kxkda",
//                 x: Math.random() * (canvas.width - context.measureText("kxkda").width),
//                 y: Math.random() * (canvas.height - 20),
//                 dx: (Math.random() - 0.5) * wordSpeed,
//                 dy: (Math.random() - 0.5) * wordSpeed,
//                 color: colorsArr[Math.floor(Math.random() * colorsArr.length)],
//             });
//         }

//         function animate() {
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             for(let i = 0; i < words.length; i++) {
//                 let word = words[i];
//                 context.fillStyle = word.color;
//                 context.fillText(word.text, word.x, word.y);

//                 if (word.x + context.measureText(word.text).width > canvas.width || word.x < 0) word.dx = -word.dx;
//                 if (word.y > canvas.height - 20 || word.y < 0) word.dy = -word.dy;

//                 word.x += word.dx;
//                 word.y += word.dy;
//             }

//             requestAnimationFrame(animate);
//         }

//         animate();
        
//         // Adjust canvas size on window resize
//         window.addEventListener('resize', () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         });
//     }, []);

//     return (
//         <canvas className='z-10' ref={canvasRef} />
//     );
// }

// export default Canvas;


// import React, { useEffect, useRef } from 'react';

// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const lineGap = 10; // The gap between the lines
//   const color = '#fafafa'; // The color of the lines

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Adjust canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const lines = Array(Math.ceil(canvas.height / lineGap)).fill(0); // Initialize lines

//     const animate = () => {
//       // Clear canvas before drawing
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw and update each line
//       lines.forEach((width, index) => {
//         const y = index * lineGap;

//         // Draw line
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(width, y);
//         ctx.strokeStyle = color;
//         ctx.stroke();

//         // Update line width
//         if (width >= canvas.width || width <= 0) lines[index] = Math.random() * canvas.width;
//         else lines[index] += Math.random() - 0.5; // Adjust speed and direction
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, [lineGap, color]);

//   return <canvas ref={canvasRef} />;
// };

// export default Canvas;


// "use client"

// import React, { useEffect, useRef, useState } from "react";

// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ 
//     height: '100vh', // temporary value, this will be updated once the component mounts
//     width: '100vw'  // temporary value
//   });

//   useEffect(() => {
//     // set real dimensions once window is defined
//     setDimensions({
//       height: window.innerHeight,
//       width: window.innerWidth
//     });

//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     context.strokeStyle = '#fafafa'; // Set line color

//     const lineGap = 10;
//     const lines = [];

//     // Create lines
//     for(let i = 0; i < window.innerHeight; i += lineGap){
//       lines.push(new Line(context, i));
//     }

//     const animate = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
      
//       lines.forEach(line => line.update());

//       requestAnimationFrame(animate);
//     }

//     animate();
//   }, []);

//   return <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} />;
// };

// export default Canvas;

// class Line {
//   constructor(context, y){
//     this.context = context;
//     this.y = y;
//     this.length = window.innerWidth;
//     this.speed = Math.random() * 2 + 0.1; // Random speed between 1 and 3
//   }
  
//   update(){
//     this.length -= this.speed;
    
//     if(this.length <= 0){
//       this.length = window.innerWidth;
//       this.speed = Math.random() * 2 + 1;
//     }

//     this.draw();
//   }
  
//   draw(){
//     this.context.beginPath();
//     this.context.moveTo(0, this.y);
//     this.context.lineTo(this.length, this.y);
//     this.context.stroke();
//   }
// }


// import { useEffect, useState } from 'react';

// const getRandomSymbol = () => {
//   const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,<.>/?";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };

// const getRandomDigit = () => Math.floor(Math.random() * 10);

// const scramble = (text) => {
//   let result = '';
//   for (let i = 0; i < text.length; i++) {
//     result += Math.random() > 0.5 ? getRandomSymbol() : getRandomDigit();
//   }
//   return result;
// };

// const Canvas = () => {
//   const [scrambledText, setScrambledText] = useState('KXKDA');

//   useEffect(() => {
//     const scrambleInterval = setInterval(() => {
//       setScrambledText(scramble('KXKDA'));
//     }, 100);

//     return () => {
//       clearInterval(scrambleInterval);
//     };
//   }, []);

//   return <p className='dark:text-white text-xl'>{scrambledText}</p>;
// };

// export default Canvas;

// import { useEffect, useRef } from 'react';

// export default function Canvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const words = '--';
//     ctx.font = '20px Arial';
//     ctx.fillStyle = "yellow"

//     let angle = 0;

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let ring = 1; ring <= 5; ring++) {
//         for (let i = 0; i < 360; i += 15) {
//           ctx.save();
//           ctx.translate(canvas.width / 2, canvas.height / 2);
//           ctx.rotate((i + angle) * (Math.PI / 180));
//           ctx.fillText(words, 0, -ring * 40);
//           ctx.restore();
//         }
//       }
//       angle+= 0.5;
//       requestAnimationFrame(draw);
//     }

//     draw();
//   }, []);

//   return <canvas ref={canvasRef} width={800} height={800}></canvas>;
// }



// import React, { useEffect, useRef } from 'react';

// export default function Canvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const letters = ['K', 'X', 'K', 'D', 'A'];
//     const fontSize = 20;
//     context.font = `${fontSize}px monospace`;

//     const columns = canvas.width / fontSize;
//     const rows = canvas.height / fontSize;

//     const draw = () => {
//       context.fillStyle = '#070707';
//       context.fillRect(0, 0, canvas.width, canvas.height);
//       context.fillStyle = '#adb5bd';

//       for (let i = 0; i < columns; i++) {
//         for (let j = 0; j < rows; j++) {
//           const letter = letters[Math.floor(Math.random() * letters.length)];
//           context.fillText(letter, i * fontSize, j * fontSize);
//         }
//       }
//     };

//     setInterval(draw, 100);
//   }, []);

//   return <canvas ref={canvasRef} />;
// }


// import React, { useEffect, useRef } from 'react';

// export default function Canvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     canvas.width = window.innerWidth /2;
//     canvas.height = window.innerHeight /2;

//     const letters = ['KXKDA', '01010', 'ADKXK', '01010', 'KXKDA'];
//     const fontSize = 20;
//     context.font = `${fontSize}px monospace`;

//     // A place to store existing letters
//     let positions = [];

//     // Function to check if new position is valid (not overlapping)
//     const validPos = (x, y, buffer) => {
//       for(let pos of positions) {
//         if (Math.abs(pos.x - x) < buffer && Math.abs(pos.y - y) < buffer) return false;
//       }
//       return true;
//     }

//     const draw = () => {
//       context.fillStyle = '#070707';
//       context.fillRect(0, 0, canvas.width, canvas.height);
//       context.fillStyle = '#fafafa';

//       positions = [];

//       const letterCount = Math.floor(Math.random() * 50) + 50; 
//       for (let i = 0; i < letterCount; i++) {
//         let x = Math.random() * canvas.width;
//         let y = Math.random() * canvas.height;
        
//         if (validPos(x, y, fontSize)) {
//           const letter = letters[Math.floor(Math.random() * letters.length)];
//           context.fillText(letter, x, y);
//           positions.push({ x, y });
//         } else {
//           i--;
//         }
//       }
//     };

//     setInterval(draw, 10);
//   }, []);

//   return <canvas className='' ref={canvasRef} />;
// }

// ________________________________________________________________

import { useRef, useEffect, useState } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);
    const starCount = 200;
    const starColour = '#fafafa';

    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const stars = [];

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvasSize.width,
                y: Math.random() * canvasSize.height,
                size: Math.random() * 2.5,
                speed: Math.random() * 5 + 1,
            });
        }

        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = starColour;

            for (let star of stars) {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                    star.speed = Math.random() * 5 + 1;
                }
                context.fillRect(star.x, star.y, star.size, star.size);
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, [starColour, canvasSize]);

    useEffect(() => {
        // Set canvas size on the client side
        setCanvasSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ background: '#070707' }}
            width={canvasSize.width}
            height={canvasSize.height}
        ></canvas>
    );
};

export default Canvas;



// ____________________________________________

// import { useEffect, useRef } from 'react';

// export default function Canvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     let particleNumber = 15;
//     let particleColour = "#070707";
//     let particleRingWidth = window.innerWidth / 10;

//     class Particle {
//       constructor(angle) {
//         this.angle = angle;
//         this.radius = particleRingWidth;
//         this.size = Math.random() * 3 + 0.5;
//         this.speed = (Math.random() * 0.02) + 0.005; // Random speed for particles
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(
//           canvas.width / 2 + this.radius * Math.cos(this.angle),
//           canvas.height / 2 + this.radius * Math.sin(this.angle),
//           this.size,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = particleColour;
//         ctx.fill();
//       }

//       update() {
//         this.angle += this.speed;
//         this.draw();
//       }
//     }

//     const particles = Array.from({ length: particleNumber }).map(() => new Particle(Math.random() * 2 * Math.PI));

//     function animate() {
//       requestAnimationFrame(animate);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(particle => particle.update());
//     }

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     animate();
//   }, []);

//   return (
//     <div>
//       <p className='text-[#070707] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><span className="font-semibold">william</span>.loading</p>
//       <canvas className='bg-transparent' ref={canvasRef}></canvas>
//     </div>
//   );
// }
