import { supabase } from "../client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from "../components/Card";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []); // Add an empty dependency array to avoid infinite loops

  async function getCreators() {
    const { data } = await supabase
      .from('creators')
      .select('*');
    setCreators(data); // Update state with fetched data
  }

  return (
    <div>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <Link to={`/creator/${creator.id}`} key={creator.id}> {/* Link to the individual creator page */}
            <Card
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.image_url}
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
