import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

type IProps = {
  //пропсы, приходящие из родительской компоненты
}
//типизация redux-form
// https://www.youtube.com/watch?v=4kxvSDRQOko
// https://www.youtube.com/watch?v=Vaa8iuN1YFE&t=0s
const LoginForm: React.FC<InjectedFormProps<FormDataType> & IProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={"input"} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={"input"} />
      </div>
      <div>
        <Field type={'Checkbox'} name={'rememberMe'} component={"input"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

//для типизации кликаю reduxForm
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
  const onSubmit = (value: FormDataType) => {
    alert(value.login)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

