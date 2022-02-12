import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 1000px;
  padding: 20px 0;
  font-size: 14px;
  margin: 0 auto;
  align-items: stretch;

  ${prop => {
    if (prop.display) {
      return `display: ${prop.display}`;
    }
  }}
`;
