

// import React, { useState } from 'react';

// const Market = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Depending on the selected option, redirect or render different content
//     if (selectedOption === 'option1') {
//       // Redirect to a different page
//       window.location.href = '/Marketplace';
//     } else if (selectedOption === 'option2') {
//       // Render content for Option 2
//       // You can replace this with rendering a different component or content
//       window.location.href = '/Givemachines';
//       console.log('Option 2 selected');
//     } else {
//       console.log('Please select an option');
//     }
//   };

//   return (
//     <div>


//       <h2>Want to buy a machine or give it on renting</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="radio"
//             id="option1"
//             name="option"
//             value="option1"
//             checked={selectedOption === 'option1'}
//             onChange={() => setSelectedOption('option1')}
//           />
//           <label htmlFor="option1" className='option'><h4>Want to buy the machine</h4></label>
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="option2"
//             name="option"
//             value="option2"
//             checked={selectedOption === 'option2'}
//             onChange={() => setSelectedOption('option2')}
//           />
//           <label htmlFor="option2" className='option'><h4>Want to give the machine on rent</h4></label>
//         </div>
//         {/* <input type="submit" value="Submit" /> */}
//         <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
//       </form>
//     </div>



//   );
// };

// export default Market;


// import React, { useState } from 'react';


// const Market = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedOption === 'option1') {
//       window.location.href = '/Marketplace';
//     } else if (selectedOption === 'option2') {
//       window.location.href = '/Givemachines';
//       console.log('Option 2 selected');
//     } else {
//       console.log('Please select an option');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2 className="market-header">Want to buy a machine or give it on renting</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="radio-option">
//           <input
//             type="radio"
//             id="option1"
//             name="option"
//             value="option1"
//             checked={selectedOption === 'option1'}
//             onChange={() => setSelectedOption('option1')}
//           />
//           <label htmlFor="option1"><h4>Want to buy the machine</h4></label>
//         </div>
//         <div className="radio-option">
//           <input
//             type="radio"
//             id="option2"
//             name="option"
//             value="option2"
//             checked={selectedOption === 'option2'}
//             onChange={() => setSelectedOption('option2')}
//           />
//           <label htmlFor="option2"><h4>Want to give the machine on rent</h4></label>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Market;


import React, { useState } from 'react';


const Market = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'option1') {
      window.location.href = '/Marketplace';
    } else if (selectedOption === 'option2') {
      window.location.href = '/Givemachines';
      console.log('Option 2 selected');
    } else {
      console.log('Please select an option');
    }
  };

  return (
    <div className="market-container">
      <h2 className="market-header">Want to buy a machine or give it on renting</h2>
      <form onSubmit={handleSubmit} className="market-form">
      <div className='option'>
        <div className="radio-option">
          <input
            type="radio"
            id="option1"
            name="option"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => setSelectedOption('option1')}
          />
          <label htmlFor="option1"><h4>Want to buy the machine</h4></label>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="option2"
            name="option"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => setSelectedOption('option2')}
          />
          <label htmlFor="option2"><h4>Want to give the machine on rent</h4></label>
        </div>
        </div>
        <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Market;


