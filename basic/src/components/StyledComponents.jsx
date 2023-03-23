import React from 'react';
import styled from 'styled-components';

const StyledComponents = () => {
  return (
    <div>
      <Container>
        <Button>Normal Button</Button>
      </Container>
    </div>
  );
};

export default StyledComponents;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0.1rem;
  padding: 0.25rem 1rem;
`;
