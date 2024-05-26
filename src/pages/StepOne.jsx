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

          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
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
