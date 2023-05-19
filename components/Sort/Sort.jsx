import React from 'react';
import './Sort.css';
import { useGlobalContext } from '../../Context';

const DropdownSort = () => {
  const { selectedSort, setSelectedSort } = useGlobalContext();
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <>
      <div className='dropDown-sort'>
        <select id='category-sort' value={selectedSort} onChange={handleChange}>
          <option className='option' value={true}>
            Likes: High to Low
          </option>
          <option className='option' value={false}>
            Likes: Low to High
          </option>
          <option className='option' value={'Date: latest'}>
            Date: Latest
          </option>
          <option className='option' value={'Date: oldest'}>
            Date: Oldest
          </option>
        </select>
      </div>
    </>
  );
};

export default DropdownSort;
