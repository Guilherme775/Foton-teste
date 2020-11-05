import styled from 'styled-components';

export default styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.favorite ? 'red' : '#6c38b6')};
  border-radius: 50%;
  border: none;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.5s;
`;
