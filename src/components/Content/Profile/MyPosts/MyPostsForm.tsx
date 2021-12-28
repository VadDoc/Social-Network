import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLength, required} from "../../../../utilites/validators/validators";
import {Textarea} from "../../../Сommon/FormsControls/FormsControls";
import {Button} from "../../Button/Button";

const maxLength30 = maxLength(30)

export const MyPostsForm: React.FC<InjectedFormProps<FormDataType> & IProps> = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={'New post'}
          name={'newPost'}
          component={Textarea}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Button>Add post</Button>
      </div>
    </form>
  )
}

export type FormDataType = {
  newPost: string
}
type IProps = {
  //пропсы, приходящие из родительской компоненты
}