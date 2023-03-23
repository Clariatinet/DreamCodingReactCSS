import React from 'react';
import styled from 'styled-components';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponents from './components/StyledComponents';
import TailwindComponents from './components/TailwindComponents';

const App = () => {
  return (
    <div>
      <Button1 />
      <Button2 />
      <StyledComponents />
      <TailwindComponents />
    </div>
  );
};

export default App;
