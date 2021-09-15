import React, { FC } from "react";
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const StyledButton = styled(Button)`
 width:auto; `;
// ...props altijd als laatste benoemen
const CustomButton: FC <any> = ({label, variant, onClick}) => {
    return  <StyledButton onClick={onClick} variant={variant} label={label}>{label}</StyledButton>;
}
export default CustomButton;