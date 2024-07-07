import React, { useEffect } from 'react';

const Carbonfootprints = () => {
  useEffect(() => {
    // Open the external link in a new tab when component mounts
    window.open('http://localhost:8501/', '_blank');
  }, []);

  // Render nothing in the component
  return null;
};

export default Carbonfootprints;