import React from 'react';
import { SearchInputProps } from '@/types/InputsTypes';

const SearchInput = (props: SearchInputProps) => {
    const {placeholder} = props;
  return (
    <input
    type='search'
    placeholder={placeholder}
    className='border'
    />
  )
}

export default SearchInput