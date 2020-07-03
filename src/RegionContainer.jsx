import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectRegion } from './actions';

import Regions from './Regions';

export default function RegionContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  function handleClick(e) {
    const { value } = e.target;
    dispatch(selectRegion(value));
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      handleClick={handleClick}
    />
  );
}
