import React from "react";
import { AppHeader } from "../components/AppHeader";  
import { PrograsBar } from "../components/PrograsBar";
import { LinkButton } from "../components/LinkButton";
import { Wraper } from "../components/Wraper";
const StepFour = () => {
  return (
    <div className="container">
      <Wraper>
        <div className="emoji-quiz">
        <PrograsBar currentStep="4"/>
          <div className="question">
          <AppHeader headerText="4. Занимательный вопрос" headerType="h2"/>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/thanks"/>
          </div>
        </div>
      </Wraper>
      </div>
    
  );
};

export default StepFour;
