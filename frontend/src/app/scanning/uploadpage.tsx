// 'use client';

// import { useState, useEffect } from 'react';
// import * as pdfjsLib from 'pdfjs-dist';

// const UploadPage = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [pdfRendered, setPdfRendered] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setSelectedFile(file);
      
//       reader.onload = async (e) => {
//         // ... (other code)
      
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d'); 
      
//         if (context) { // Add null check here
//           canvas.height = viewport.height;
//           canvas.width = viewport.width;
//           await page.render({ canvasContext: context, viewport: viewport }).promise;   
      
//           setPdfRendered(canvas.toDataURL());
//         } else {
//           console.error('Failed to get 2D context from canvas'); 
//           // Handle the error appropriately (e.g., show an error message to the user)
//         }
//       };

//       // Attempt to "scan" (render first page) immediately after upload
//       const reader = new FileReader();
//       reader.onload = async (e) => {
//         const pdf = await pdfjsLib.getDocument(e.target?.result as string).promise;
//         const page = await pdf.getPage(1);
//         const viewport = page.getViewport({ scale: 1 });
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;
//         await page.render({ canvasContext: context, viewport: viewport }).promise;
//         setPdfRendered(canvas.toDataURL());
//       };
//       reader.readAsDataURL(file); 
//     } else {
//       setSelectedFile(null);
//       setPdfRendered(null);
//     }
//   };

//   // ... (rest of the handleSubmit function, which you might not need in this simplified scenario)

//   return (
//     <div className="container mt-5">
//       {/* ... (your upload form) ... */}

//       {pdfRendered && (
//         <div className="mt-3">
//           <p>Scanned First Page:</p>
//           <img src={pdfRendered} alt="Scanned PDF" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadPage;