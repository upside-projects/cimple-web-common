import styled, { css } from 'styled-components';

export const Check = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.greyscale.white};
  border: 1px solid ${({ theme }) => theme.colors.greyscale.medium};
  border-radius: ${({ theme }) => theme.radius.small};

  transition: all ${({ theme }) => theme.transition.cubic()};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.light};
    border: 1px solid ${({ theme }) => theme.colors.brand.light};
  }

  ${p =>
    p.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.brand.default};
      border: 1px solid ${({ theme }) => theme.colors.brand.default};

      &:hover {
        background-color: ${({ theme }) => theme.colors.brand.default};
        border: 1px solid ${({ theme }) => theme.colors.brand.default};
      }
    `}

  &:after {
    content: '';
    width: 10px;
    height: 5px;
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.greyscale.white};
    border-left: 2px solid ${({ theme }) => theme.colors.greyscale.white};

    transition: transform ${({ theme }) => theme.transition.cubic()};
    transform: rotate(-45deg) translate(-1px, 4px) scale(${({ checked }) => (checked ? 1 : 0.8)});
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Label = styled.span`
  margin-left: 1.5rem;
  display: inline-block;
  vertical-align: bottom;
  line-height: 1;
  color: black;
`;

export const Holder = styled.div`
  display: block;
  position: relative;
`;
