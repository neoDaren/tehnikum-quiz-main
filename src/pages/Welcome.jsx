import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";
import { Wraper } from "../components/Wraper";
const Welcome = () => {
  const regex = /^[A-Za-zА-Яа-я]+$/
  const regexNum = /^\+?\d+$/
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [buttonError,setButtonError] =useState(true)
  
  const handleClick = () => {
    if (!regex.test(name)) {
      setNameError(true);
    } else if (!regexNum.test(phone))
    {
       setPhoneError(true) 
    } else {
      setNameError(false)
      setPhoneError(false)
      navigate("/step-one")
      localStorage.setItem('userInfo', JSON.stringify(name))
      localStorage.setItem('userPhone', JSON.stringify(phone))

    }
  };
  useEffect(()=>{
    if(!name || !phone) {
      setButtonError(true)
    } else {
      setButtonError(false)
    }
  },[name,phone])
  return (
    <div className="container">
      <Wraper>
        <div className="welcome">
          <AppHeader
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
            headerType="h1"
          />
          <form className="welcome__form">
            <AppInput
              inputLable="Ваше имя"
              inputPlaceholder="Ваш ответ"
              inputType="text"
              id="username"
              errorText="Ведите в правильном формате имя"
              hasError={nameError}
              inputValue={name}
              inputChange={setName}
            />
            <AppInput
              inputLable="Ваш номер"
              inputPlaceholder="+998-90"
              inputType="tel"
              id="phone"
              errorText="Ведите номер в правильном формате"
              hasError={phoneError}
              inputValue={phone}
              inputChange={setPhone}
            />

            <AppButton
              isDisabled={buttonError}
              buttonType="button"
              buttonText="Далее"
              buttonClick={handleClick}
            />
          </form>
        </div>
        </Wraper>
    </div>
  );
};

export default Welcome;
