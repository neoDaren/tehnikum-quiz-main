import React, { useEffect, useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { PrograsBar } from "../components/PrograsBar";
import { Wraper } from "../components/Wraper";
// const StepTwo = () => {
//   const variants = [
//     {
//       id:"variant-1",
//       labelText:"Fronted"
//     },
//     {
//       id:"variant-2",
//       labelText:"BackEnd"
//     },
//     {
//       id:"variant-3",
//       labelText:"UX/UI"
//     },
//     {
//       id:"variant-4",
//       labelText:"Uzum"
//     },
//   ]
//   const [checkedAnswer,setCheckedAnswer]= useState(null)
//   return (
//     <div className="container">
//       <Wraper>
//         <div className="variants-quiz">
//           <PrograsBar/>
//           <div className="question">
//             <AppHeader headerText="На каком курсу вы обучаетесь ?" headerType="h2" />
//             <ul className="variants">
//               {variants.map((elem)=> {
//                 return<AnswerItem
//                  key={elem.id}
//                   labelText={elem.labelText}
//                   onChange={()=> setCheckedAnswer(elem.id)}
//                   checked={checkedAnswer===elem.id}
//                   />
//               })}
//               {/* <li className="variant-wrapper">
//                 <input required type="radio" name="variant-1" id="variant-1" />
//                 <label htmlFor="variant-1">Ваш ответ</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant-2" id="variant-2" />
//                 <label htmlFor="variant-2">Ваш ответ</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant-3" id="variant-3" />
//                 <label htmlFor="variant-3">Ваш ответ</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant-4" id="variant-4" />
//                 <label htmlFor="variant-4">Ваш ответ</label>
//               </li> */}
//             </ul>
//             <LinkButton isDisabled={false} linkType="Button" linkText="Далее" linkBtn="/step-three"/>
//           </div>
//         </div>
//       </Wraper>
//       </div>
    
//   );
// };

// StepTwo component
// const StepTwo = () => {
//   const variants = [
//     {
//       id: "variant-1",
//       labelText: "Frontend"
//     },
//     {
//       id: "variant-2",
//       labelText: "Backend"
//     },
//     {
//       id: "variant-3",
//       labelText: "UX/UI"
//     },
//     {
//       id: "variant-4",
//       labelText: "Uzum"
//     },
//   ];
//   const [checkedAnswer, setCheckedAnswer] = useState(null);

//   return (
//     <div className="container">
//       <Wraper> {/* Assuming Wraper is correctly imported */}
//         <div className="variants-quiz">
//           <PrograsBar /> {/* Assuming PrograsBar is correctly imported */}
//           <div className="question">
//             <AppHeader headerText="На каком курсу вы обучаетесь?" headerType="h2" /> {/* Assuming AppHeader is correctly imported */}
//             <ul className="variants">
//               {variants.map((elem) => {
//                 return (
//                   <AnswerItem
//                     key={elem.id}
//                     labelText={elem.labelText}
//                     onChange={() => setCheckedAnswer(elem.id)}
//                     checked={checkedAnswer === elem.id}
//                   />
//                 );
//               })}
//             </ul>
//             <LinkButton isDisabled={false} buttonType="button" linkText="Далее" linkBtn="/step-three" /> {/* Assuming LinkButton is correctly imported */}
//           </div>
//         </div>
//       </Wraper>
//     </div>
//   );
// };
// StepTwo component
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

