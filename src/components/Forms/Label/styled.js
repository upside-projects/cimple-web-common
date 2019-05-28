import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.greyscale.light};
`;
