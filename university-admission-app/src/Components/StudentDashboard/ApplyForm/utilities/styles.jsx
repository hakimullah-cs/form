import Styled,{css} from 'styled-components';
export const Input=Styled.input`
width: 100%;
outline: none;
border: none;
color:#212528;
font-weight:550;

`;
export const Select=Styled.select`
width: 100%;
background:transparent;
outline: none;
border: none;
color:#212528;
font-weight:550;

`;
export const InputLabel=Styled.label`
display: block;
color:#1B4E69;
// font-weight:500;
white-space:nowrap;
`;

export const InputField=Styled.div`
background-color:#fff;
box-shadow:0px 0px 3px grey;
height:3.2rem;
box-sizing: border-box;
color: #fff;
overflow:hidden;
padding: 0px 10px;
border-left:8px solid #1B4E69;
border-radius: 4px;
// margin-bottom:10px;
${(props) =>
  props.error &&
  css`
    border: 1px solid red;
  `}`;
  export const InputContainer = Styled.div`
  background-color: #212121;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  ${(props) =>
    props.error &&
    css`
      border-top: 2px solid crimson;
    `}
`;
export const Flex = Styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
export const InputError=Styled.span`
margin-left:5px;
color: crimson;
white-space:nowrap;
`;
export const Button = Styled.button`
  box-sizing: border-box;
  padding: 10px 30px;
  margin-left:8px;
  font-size: 18px;
  font-weight:bold;
  font-family: 'DM Sans';
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  background-color: #1B4E69;`;
