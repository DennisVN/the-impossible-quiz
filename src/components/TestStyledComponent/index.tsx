import React, { FC, PropsWithChildren } from "react";
import styled from 'styled-components';
import InputField from "../InputField";

export interface TestStyledComponentProps {}
    
//styled.className
const StyledTestDiv = styled.main`
background-color:pink; flex-grow: 1; min-height:100vh;
`;
const StyledTestHeader = styled.h1`
color:white; 
`;
// TODO alle componenten in div komen terug als TSC
// Alles tussen component (bv label) word herkend door PWC
const TestStyledComponent: FC <any> = ({ children}) => {
    return (    <StyledTestDiv>
                    <StyledTestHeader>{"THE IMPOSSIBLE QUIZ"}</StyledTestHeader>
                    {children}
                </StyledTestDiv>);
}

export default TestStyledComponent;