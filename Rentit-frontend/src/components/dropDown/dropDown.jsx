import React from 'react';
import './dropDown.css';
import { useGlobalContext } from '../../Context';

function Dropdown() {
  // const [selectedOption, setSelectedOption] = useState('all');
  const { selectedOption, setSelectedOption } = useGlobalContext();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      {/* <label htmlFor='category'>Choose a category:</label> */}
      <div className='dropDown'>
        <select id='category' value={selectedOption} onChange={handleChange}>
          <option className='option' value='all'>
            All
          </option>
          <option className='option' value='electronics'>
            Electronics
          </option>
          <option className='option' value='sports'>
            Sports
          </option>
          <option className='option' value='clothes'>
            Clothes
          </option>
          <option className='option' value='hardware'>
            Hardware
          </option>
          <option className='option' value='accessories'>
            Accessories
          </option>
          {/* <option value='computer hardware'>Computer hardware</option> */}
        </select>
      </div>
      {/* {selectedOption && <p>You have selected {selectedOption}.</p>}     */}
    </>
  );
}

export default Dropdown;
