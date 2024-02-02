import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Search movies..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        style={{ marginRight: '10px' }} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;