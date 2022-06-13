import React from 'react';
import { Container, Icon, SearchInput } from './style';

const Input = ({ width, height, type, mt, mb, mr, ml, pl, onChange, placeholder, onClick, children }) => {
  return (
    <Container
      width={width}
      height={height}
      type={type}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      onClick={onClick}
    >
      <Icon>{children}</Icon>
      <SearchInput 
      placeholder={placeholder}
      onChange={onChange}
      pl={pl} type='text'/>
    </Container>
  );
};

export default Input;