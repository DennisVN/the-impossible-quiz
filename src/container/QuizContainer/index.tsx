import React, { FC, useEffect } from "react";
import { InputGroup } from "react-bootstrap";
import CustomButton from "../../components/Button";
import InputField from "../../components/InputField";
import TestStyledComponent from "../../components/TestStyledComponent";
import StyledLabel from "../../components/Label"
// Eindcomponenten komen hier terecht. 
// TSC is main container aka form

const getData=()=>{
    fetch('Questions.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(function(response) {
        //console.log(response)
        return response.json();
    })
    .then(function(Questions) {
        console.log(Questions);
    });
}

const handleClick = () => {
    console.log('clickedy');
}
const QuizContainer: FC <any> = () => {
    useEffect (() => {
        getData()
    }, [])

    return  <TestStyledComponent>
                <div>
                <InputGroup>
                    <StyledLabel placeholder="question comes here" label="quizLabel"></StyledLabel>
                    <InputField placeholder="Enter your guess here" label="userInput" />
                    <CustomButton label="Submit" variant="secondary" onClick={handleClick}/>
                </InputGroup>
                </div>
            </TestStyledComponent>
}

export default QuizContainer; 