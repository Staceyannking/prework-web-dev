import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // Insert new creator into the database
    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          name: name,
          url: url,
          description: description,
          imageURL: imageURL,
        },
      ]);

    if (error) {
      console.error('Error adding content creator:', error);
    } else {
      console.log('Content creator added:', data);
      navigate('/'); // Redirect to the main page after successful submission
    }
  }

  return (
    <div>
      <h2>Add a New Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>URL:</label>
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL (Optional):</label>
          <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        <button type="submit">Add Content Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
