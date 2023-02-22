import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterBox } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <FilterBox>
      <span>Find contact by name</span>
      <input type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};

export default Filter;
