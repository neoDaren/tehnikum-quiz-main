import React from "react";
import { Wraper } from "../components/Wraper";

const Thanks = () => {
  return (
    <div className="container">
      <Wraper>

        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </Wraper>
      </div>
  );
};

export default Thanks;
