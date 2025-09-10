import React, { useState } from 'react';

function RadioGroup() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select a Fruit</h2>
      
      <label>
        <input
          type="radio"
          value="apple"
          checked={selectedOption === 'apple'}
          onChange={handleChange}
        />
        Project Selection 
      </label>

      <br />
      <div
      style={{
        borderLeft: '2px solid black',
        height: '100px',
        margin: '20px'
      }}
    />
      <label>
        <input
          type="radio"
          value="banana"
          checked={selectedOption === 'banana'}
          onChange={handleChange}
        />
        Pesonal Details
      </label>

      <br />
      <div
      style={{
        borderLeft: '2px solid black',
        height: '100px',
        margin: '20px'
      }}
    />
      <label>
        <input
          type="radio"
          value="orange"
          checked={selectedOption === 'orange'}
          onChange={handleChange}
        />
        Payment Details
      </label>



    </div>
  );
}

function Selection() {
  const[selectedProject, setSelectedProject] = useState(' ');
   
  const handleChange = (event) => {
    setSelectedProject(event.target.value);
  }
  return(
    <div>
      <h2> Kindly select a project you would like to support.</h2> <br />
      <label>
        <input 
        type="checkbox"
        value="Gymnasium"
        checked={selectedProject === 'Gymnasium'} 
        onChange={handleChange}
        />
        Gymanasium
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Canteen"
        checked={selectedProject === 'Canteen'} 
        onChange={handleChange}
        />
        Canteen
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Library"
        checked={selectedProject === 'Library'} 
        onChange={handleChange}
        />
        Library
      </label>
    </div>
  )
}

function Provide() {
  const[selectedProvide, setSelectedProvide] = useState(' ');
   
  const handleChange = (event) => {
    setSelectedProvide(event.target.value);
  }
  return(
    <div>
      <h2> Kindly select a project you would like to support.</h2> <br />
      <label>
        <input 
        type="checkbox"
        value="Gymnasium"
        checked={selectedProvide === 'Gymnasium'} 
        onChange={handleChange}
        />
        Gymanasium
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Canteen"
        checked={selectedProvide === 'Canteen'} 
        onChange={handleChange}
        />
        Canteen
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Library"
        checked={selectedProvide === 'Library'} 
        onChange={handleChange}
        />
        Library
      </label>
    </div>
  )
}

function LastProvide() {
  const[selectedLast, setSelectedLast] = useState(' ');
   
  const handleChange = (event) => {
    setSelectedLast(event.target.value);
  }
  return(
    <div>
      <h2> Kindly select a project you would like to support.</h2> <br />
      <label>
        <input 
        type="checkbox"
        value="Gymnasium"
        checked={selectedLast === 'Gymnasium'} 
        onChange={handleChange}
        />
        Gymanasium
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Canteen"
        checked={selectedLast === 'Canteen'} 
        onChange={handleChange}
        />
        Canteen
      </label>
      <br />
            <label>
        <input 
        type="checkbox"
        value="Library"
        checked={selectedLast === 'Library'} 
        onChange={handleChange}
        />
        Library
      </label>
    </div>
  )
}

export default function Support() {
  return(
    <div className='Support'>
      <RadioGroup/>
    </div>
  )
}

