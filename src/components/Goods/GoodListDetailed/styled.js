import styled from 'styled-components';

import * as Typography from '../../Typography/Typography';
import Thumbnail from '../../Thumbnail/Thumbnail';

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const GoodThumbnail = styled(Thumbnail)`
  align-self: center;
`

export const Text = styled(Typography.Text)`
  margin-bottom: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GoodInfo = styled.div`
  flex: 1;
  margin: 0 1rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;