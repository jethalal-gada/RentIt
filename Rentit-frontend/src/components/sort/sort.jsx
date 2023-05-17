import React from 'react';
import './Sort.css';
import { useGlobalContext } from '../../Context';

function DropdownSort() {
  const { selectedSort, setSelectedSort } = useGlobalContext();
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <>
      <div className='dropDown-sort'>
        <select id='category-sort' value={selectedSort} onChange={handleChange}>
          <option className='option' value={true}>
            Likes: high to low
          </option>
          <option className='option' value={false}>
            Likes: low to high
          </option>
          <option className='option' value={'Date: latest'}>
            Date: latest
          </option>
          <option className='option' value={'Date: oldest'}>
            Date: oldest
          </option>
        </select>
      </div>
    </>
  );
}

export default DropdownSort;
