'use client';

import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import NavbarComponent from '@/components/Navbar'; 

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you'll eventually make an API call to your backend to fetch search results
    console.log('Searching for:', searchTerm); 
  };

  return (
    <div>
      <NavbarComponent /> {/* Include Navbar here */}
      <div className="container mt-4">
        <h1>Search Manuscripts</h1>
        <Form onSubmit={handleSearch}>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by title, keyword, author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-secondary" type="submit" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Form>

        {/* Display search results here */}
        <div>
          {/* You'll map over the search results and display them */}
        </div>
      </div>
    </div>
  );
}

const mockSearchResults = [
    { id: 1, title: 'Thesis on Machine Learning', author: 'John Doe', year: 2023 },
    { id: 2, title: 'Capstone Project on Web Development', author: 'Jane Smith', year: 2022 },
    // Add more mock data as needed
  ];

  <div>
  {mockSearchResults.map((result) => (
    <div key={result.id} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{result.title}</h5>
        <p className="card-text">Author: {result.author}</p>
        <p className="card-text">Year: {result.year}</p>
        {/* Add a link or button to view the document */}
      </div>
    </div>
  ))}
</div>