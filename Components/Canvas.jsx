import { useEffect, useState } from 'react';

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,<.>/?";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const getRandomDigit = () => Math.floor(Math.random() * 10);

const scramble = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += Math.random() > 0.5 ? getRandomSymbol() : getRandomDigit();
  }
  return result;
};

const Canvas = () => {
  const [scrambledText, setScrambledText] = useState('KXKDA');

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      setScrambledText(scramble('KXKDA'));
    }, 100);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, []);

  return <p className='dark:text-white text-xl'>{scrambledText}</p>;
};

export default Canvas;

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

//     canvas.width = window.innerWidth / 2;
//     canvas.height = window.innerHeight / 2;

//     const letters = ['K', 'X', 'K', 'D', 'A'];
//     const fontSize = 20;
//     context.font = `${fontSize}px monospace`;

//     const columns = canvas.width / fontSize;
//     const rows = canvas.height / fontSize;

//     const draw = () => {
//       context.fillStyle = '#070707';
//       context.fillRect(0, 0, canvas.width, canvas.height);
//       context.fillStyle = '#fafafa';

//       for (let i = 0; i < columns; i++) {
//         for (let j = 0; j < rows; j++) {
//           const letter = letters[Math.floor(Math.random() * letters.length)];
//           context.fillText(letter, i * fontSize, j * fontSize);
//         }
//       }
//     };

//     setInterval(draw, 500);
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

