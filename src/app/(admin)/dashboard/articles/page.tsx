'use client'
import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'mathquill/build/mathquill.css';

const MathQuillEditor = ({ onChange }) => {
   const mathQuillRef = useRef(null);

   useEffect(() => {
      const mathField = mathQuillRef.current;
      const mathQuill = window.MathQuill.getInterface(2);

      if (mathField) {
         const mathFieldInstance = mathQuill.MathField(mathField, {
            spaceBehavesLikeTab: true,
            handlers: {
               edit: () => {
                  // Handle changes in the MathQuill field
                  if (onChange) {
                     onChange(mathFieldInstance.latex());
                  }
               },
            },
         });
      }
   }, [onChange]);

   return <div ref={mathQuillRef} />;
};

const MyEditor = () => {
   const [content, setContent] = useState('');

   const handleMathQuillChange = latex => {
      // Handle changes from the MathQuill editor
      // You can choose to append the LaTeX to the existing content or handle it as needed
      setContent(prevContent => prevContent + latex);
   };

   const handleQuillChange = newContent => {
      // Handle changes from the regular Quill editor
      setContent(newContent);
   };

   return (
      <div>
         <h2>MathQuill + React-Quill Example</h2>
         <MathQuillEditor onChange={handleMathQuillChange} />
         <ReactQuill value={content} onChange={handleQuillChange} />
      </div>
   );
};

export default MyEditor;
