import styled from 'styled-components';

import StyledTag from '../../Tag/Tag';

export const ProductThumb = styled.div`
  background-color: ${({ theme }) => theme.colors.greyscale.lighter};
  background-image: url(${p => p.goodImage});
  background-size: cover;
  background-position: center center;

  height: 14rem;
  width: 100%;
  opacity: 1;

  margin-bottom: 1.5rem;
  transition: ${({ theme }) => theme.transition.cubic()};

  @media only screen and (max-width: 780px) {
    height: 10rem;
    width: 100%;
  }
`;

export const Holder = styled.div`
  cursor: pointer;
  width: 100%;

  &:hover {
    ${ProductThumb} {
      opacity: 0.6;
    }
  }
`;

export const Tag = styled(StyledTag)`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 2.2rem;
  justify-self: end
  
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1rem;
  }
`;

export const Layout = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  max-width: 1440px;
  margin: auto;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem 4rem 1rem;
  }
`;
