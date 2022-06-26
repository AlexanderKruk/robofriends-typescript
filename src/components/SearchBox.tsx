import * as React from 'react';

interface SearchBoxProps {
  searchChange: (event: React.FormEvent<HTMLInputElement>) => void
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;