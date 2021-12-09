import React from "react";
import styles from "./FormsControls.module.scss";

//приходят особые пропсы, в которых есть input, meta.
type PropsType = {
  input: {}
  meta: {error: boolean, touched: boolean}
}

//с помощью rest оператора сначала прокидываем п пропсы input, meta, а потом все остальное
export const Textarea = ({input, meta, ...restProps}: PropsType) => {
  const hasError = meta.touched && meta.error
  // debugger

  return (
    <div className={styles.formsControls + ' ' + (hasError && styles.error)}>
      <textarea {...input} {...restProps} />
      {hasError && <div className={styles.errorText}>{meta.error}</div>}
    </div>
  )
}

export const Input = ({input, meta, ...restProps}: PropsType) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.formsControls + ' ' + (hasError && styles.error)}>
      <input {...input} {...restProps} />
      {hasError && <div className={styles.errorText}>{meta.error}</div>}
    </div>
  )
}