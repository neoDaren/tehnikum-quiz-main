import React, { useEffect, useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { PrograsBar } from "../components/PrograsBar";
import { Wraper } from "../components/Wraper";
const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      labelText: "Frontend"
    },
    {
      id: "variant-2",
      labelText: "Backend"
    },
    {
      id: "variant-3",
      labelText: "UX/UI"
    },
    {
      id: "variant-4",
      labelText: "Unknown"
    },
  ];
  const [checkedAnswer, setCheckedAnswer] = useState(null);
console.log(checkedAnswer);
useEffect(()=> {
  localStorage.setItem('userCheck', JSON.stringify(checkedAnswer))
}, [checkedAnswer])

  return (
    <div className="container">
      <Wraper>
        <div className="variants-quiz">
        <PrograsBar currentStep="2"/>
          <div className="question">
            <AppHeader headerText="На каком курсу вы обучаетесь?" headerType="h2" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id} 
                  AnswerLabel={elem.labelText} 
                  onChange={() => setCheckedAnswer(elem.labelText)}
                  checked={checkedAnswer === elem.labelText}
                />
              ))}
            </ul>
            <LinkButton isDisabled={false} buttonType="button" linkText="Далее" linkBtn="/step-three"/>
            
          </div>
        </div>
      </Wraper>
    </div>
  );
};

export default StepTwo;

