import axios from 'axios';
// import { useState } from 'react';

export default function UploadView() {
  const handleSubmit = e => {
    e.preventDefault();
 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="submit">Load</button>
    </form>
  );
}