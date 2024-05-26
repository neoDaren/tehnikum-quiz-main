import React from "react";

// export const AnswerItem = ({ id, AnswerLable, onChange, checked }) => {
//   return (
//     <li className="variant-wrapper">
//       <input
//         required
//         type="radio"
//         name="question"
//         id={id}
//         onChange={onChange}
//         checked={checked}
//       />
//       <label htmlFor={id}>{AnswerLable}</label>
//     </li>
//   );
// };
// export const AnswerItem = ({ id, AnswerLabel, onChange, checked }) => {
//   return (
//     <li className="variant-wrapper">
//       <input
//         required
//         type="radio"
//         name="question"
//         id={id}
//         onChange={onChange}
//         checked={checked}
//       />
//       <label htmlFor={id}>{AnswerLabel}</label>
//     </li>
//   );
// };
// AnswerItem component
export const AnswerItem = ({
  id,
  AnswerLabel,
  onChange,
  checked,
  src,
  alt,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="question"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>
        {AnswerLabel}
        {src && <img src={src} alt={alt} />}
      </label>{" "}
      {/* Use AnswerLabel here */}
    </li>
  );
};
