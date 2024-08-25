import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

function ViewCreator() {
    const { id } = useParams(); // Get the creator's ID from the URL
    const [creator, setCreator] = useState(null);
  
    useEffect(() => {
      getCreator();
    }, []);
  
    async function getCreator() {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id) // Filter by the specific creator's ID
        .single(); // Expect a single object rather than an array
      setCreator(data);
    }
  
    if (!creator) return <p>Loading...</p>; // Show loading while fetching data
  
    return (
      <div>
        <Card
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.image_url}
        />
      </div>
    );
  }
  
  export default ViewCreator;