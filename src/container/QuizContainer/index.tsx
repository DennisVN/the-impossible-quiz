import React, { FC } from "react";
import match ,{ Redirect, Route, Switch } from "react-router-dom";
import InputField from "../../components/InputField";
import TestStyledComponent from "../../components/TestStyledComponent";
// Eindcomponenten komen hier terecht. 
// TSC is main container aka form
const QuizContainer: FC <any> = () => {
    return <TestStyledComponent><InputField placeholder="Enter your guess here" label="userInput" /></TestStyledComponent>
}

export default QuizContainer; 