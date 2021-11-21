import React from "react";
import {Field, InjectedFormProps} from "redux-form";

export type FormDataType = {
  newMessage: string
}
type IProps = { //пропсы, приходящие из родительской компоненты
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType> & IProps> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Field placeholder={'New post'} name={'newMessage'} component={"textarea"}/>
      </p>
      <p>
        <button>Add post</button>
      </p>
    </form>
  )
}