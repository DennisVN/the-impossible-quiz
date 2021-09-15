import React, { FC } from "react";
import styled from 'styled-components';

const StyledInputField = styled.input`
height:1rem; width:250px; `;
// ...props altijd als laatste benoemen
const InputField: FC <any> = ({placeholder, label, ...props}) => {
    return <StyledInputField type="text" label={label} placeholder={placeholder} {...props} />;
}
export default InputField;