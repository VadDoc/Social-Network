import React from "react";
import {Field, InjectedFormProps} from "redux-form";

export type FormDataType = {
  newPost: string
}
type IProps = {
  //пропсы, приходящие из родительской компоненты
}

export const MyPostsForm: React.FC<InjectedFormProps<FormDataType> & IProps> = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Field placeholder={'New post'} name={'newPost'} component={"textarea"}/>
      </p>
      <p>
        <button>Add post</button>
      </p>
    </form>
  )
}