import styled from 'styled-components';

import { AiFillLike } from 'react-icons/ai';

export default styled(AiFillLike)`
  color: ${(props) => (props.like ? 'blue' : '#d3d3d3')};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
