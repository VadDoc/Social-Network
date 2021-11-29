import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../../Сommon/FormsControls/FormsControls";
import {maxLength, required} from "../../../../utilites/validators/validators";

export type FormDataType = {
  newMessage: string
}
type IProps = { //пропсы, приходящие из родительской компоненты
}

const maxLength100 = maxLength(100)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType> & IProps> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Field
          placeholder={'New message'}
          name={'newMessage'}
          component={Textarea}
          validate={[required, maxLength100]}
        />
      </p>
      <p>
        <button>Add message</button>
      </p>
    </form>
  )
}