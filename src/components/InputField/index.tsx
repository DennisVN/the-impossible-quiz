import React, { FC } from "react";
import styled from 'styled-components';
import {FormControl} from 'react-bootstrap';

const StyledInputField = styled(FormControl)`
 `;
// ...props altijd als laatste benoemen
const InputField: FC <any> = ({placeholder, label, ...props}) => {
    return <StyledInputField type="text" label={label} placeholder={placeholder} {...props} />;
}
export default InputField;