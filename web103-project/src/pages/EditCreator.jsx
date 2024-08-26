import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
  
    useEffect(() => {
      async function fetchCreator() {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();
  
          if (error) {
            console.error('Error updating creator:', error);
          } else {
            alert('Content creator updated successfully!');
            navigate('/'); // Redirect to the home page or a specific page
          }
      }
  
      fetchCreator();
    }, [id]);

    async function handleSubmit(event) {
      event.preventDefault();
  
      const { data, error } = await supabase
        .from('creators')
        .update([
          {
            name: name,
            url: url,
            description: description,
            imageURL: imageURL,
          },
        ])
        .eq('id', id);
  
      if (error) {
        console.error('Error updating creator:', error);
      } else {
        console.log('Content creator updated:', data);
        navigate('/'); // Redirect to the home page or a specific page
      }
    }
    return (
        <div>
          <h2>Edit Content Creator</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              URL:
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Update Creator</button>
          </form>
        </div>
      );
}

export default EditCreator;
    
