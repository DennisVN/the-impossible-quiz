import React, { FC, PropsWithChildren } from "react";
import styled from 'styled-components';


export interface TestStyledComponentProps {
label: string;
}

const StyledTestDiv = styled.div`
height:100%; width:100%; background-color:pink;
`;
const StyledTestHeader = styled.h1`
color:white; 
`;

const TestStyledComponent: FC <PropsWithChildren<TestStyledComponentProps>> = ({label}) => {
    return (<StyledTestDiv>
        <StyledTestHeader>{label}</StyledTestHeader>
    </StyledTestDiv>);
}

export default TestStyledComponent;