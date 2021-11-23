import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
  callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = ({callBack, className, children}) => {
  const finalClassName = `${styles.button} ${className}`

  return (
    <button className={finalClassName} onClick={callBack}>{children}</button>
  )
}