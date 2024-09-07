'use client';

import { useState } from 'react';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile) {
      // Handle file upload logic here (e.g., send to server)
      console.log('Uploading file:', selectedFile);

      // You would typically use FormData to send the file to your backend API
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Example fetch request (replace with your actual API endpoint and method)
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully!');
          // Optionally, reset the selected file and provide feedback to the user
          setSelectedFile(null);
        } else {
          console.error('File upload failed.');
          // Handle error and provide feedback to the user
        }
      } catch (error) {
        console.error('Error during file upload:', error);
        // Handle error and provide feedback to the user
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Upload File</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            className="form-control" 
            type="file" 
            id="formFile" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!selectedFile}>
          Upload
        </button>
      </form>

      {selectedFile && (
        <div className="mt-3">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default UploadPage;