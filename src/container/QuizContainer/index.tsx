import React, { FC } from "react";
import match ,{ Redirect, Route, Switch } from "react-router-dom";
import TestStyledComponent from "../../components/TestStyledComponent";

const QuizContainer: FC <any> = () => {

    return <TestStyledComponent label={"hello world"}/>

}

export default QuizContainer; 