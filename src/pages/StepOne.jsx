import React, { useEffect, useState } from "react";

import { LinkButton } from "../components/LinkButton";
import { PrograsBar } from "../components/PrograsBar";
import { AppHeader } from "../components/AppHeader";

const StepOne = () => {
  const [answer, setAnswer] = useState('')
  useEffect(() =>{localStorage.setItem('userAnswr', JSON.stringify(answer))},[answer])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <PrograsBar currentStep="1"/>
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос" headerType="h2"/>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
                inputValue={answer}
              />
              <span
               id="error-message"
                errorText="Введите номер в правильном формате например">
              </span>
            </label>
            <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-two"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
