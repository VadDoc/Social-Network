import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLength, required} from "../../../../utilites/validators/validators";
import {Textarea} from "../../../Сommon/FormsControls/FormsControls";
import {Button} from "../../Button/Button";

const maxLength30 = maxLength(30)

export const MyPostsForm: React.FC<InjectedFormProps<FormDataType> & IProps> = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Field
          placeholder={'New post'}
          name={'newPost'}
          component={Textarea}
          validate={[required, maxLength30]}
        />
      </p>
      <p>
        <Button>Add post</Button>
      </p>
    </form>
  )
}

export type FormDataType = {
  newPost: string
}
type IProps = {
  //пропсы, приходящие из родительской компоненты
}