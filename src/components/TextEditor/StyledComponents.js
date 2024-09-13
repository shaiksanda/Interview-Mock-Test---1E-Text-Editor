import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
`

export default Button
