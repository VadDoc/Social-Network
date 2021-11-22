import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../../Сommon/FormsControls/FormsControls";
import {required} from "../../../utilites/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../../Redux/redux-store";

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}
type IProps = {
  //пропсы, приходящие из родительской компоненты
}
type MapStateToPropsType = {
  isAuth: boolean
}
type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType
//типизация redux-form
// https://www.youtube.com/watch?v=4kxvSDRQOko
// https://www.youtube.com/watch?v=Vaa8iuN1YFE&t=0s
const LoginForm: React.FC<InjectedFormProps<FormDataType> & IProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          type={'password'}
          name={'password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={'Checkbox'}
          name={'rememberMe'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

//для типизации кликаю reduxForm
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
  const onSubmit = (value: FormDataType) => {
    props.login(value.email, value.password, value.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth
})

export const ConnectedLogin = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(
  mapStateToProps, {login})(Login)

