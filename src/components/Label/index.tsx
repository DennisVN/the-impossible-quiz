import React, { FC } from "react";
import styled from 'styled-components';
import { FormControl } from "react-bootstrap";

const StyledLabel = styled(FormControl)`
`;

const Label: FC <any> = () => {
    return  <StyledLabel placeholder="Question" readOnly></StyledLabel>;
}
export default Label;