import React, { FC } from "react";
import { InputGroup } from "react-bootstrap";
import match ,{ Redirect, Route, Switch } from "react-router-dom";
import CustomButton from "../../components/Button";
import InputField from "../../components/InputField";
import TestStyledComponent from "../../components/TestStyledComponent";
// Eindcomponenten komen hier terecht. 
// TSC is main container aka form
const handleClick = () => {
    console.log('clickedy');
}
const QuizContainer: FC <any> = () => {
    return  <TestStyledComponent>
                <div>
                <InputGroup className="m-2">
                    <InputField placeholder="Enter your guess here" label="userInput" />
                    <CustomButton label="Submit" variant="secondary" onClick={handleClick}/>
                </InputGroup>
                </div>
            </TestStyledComponent>
}

export default QuizContainer; 