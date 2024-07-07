import React, { useEffect } from 'react';

const Aires = () => {
  useEffect(() => {
    // Open the external link in a new tab when component mounts
    window.open('https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430', '_blank');
  }, []);

  // Render nothing in the component
  return null;
};

export default Aires;


