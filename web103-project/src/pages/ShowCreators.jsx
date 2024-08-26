import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/card';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []); // Add an empty dependency array to avoid infinite loops

  async function getCreators() {
    const { data, error } = await supabase
      .from('creators')
      .select('*');
    if (error) {
      console.error('Error fetching creators:', error);
    } else {
      setCreators(data); // Update state with fetched data
    }
  }

  return (
    <div>
      <h1>Content Creators</h1>
      <Link to="/add">
        <button className="add-creator-button">Add New Creator</button>
      </Link>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <Link to={`/creator/${creator.id}`} key={creator.id}>
            <Card
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          </Link>
        ))
      ) : (
        <p>No content creators found.</p>
      )}
    </div>
  );
}

export default ShowCreators;

