import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'
import {MyPostsPropsType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {FormDataType, MyPostsForm} from "./MyPostsForm";

const MyPostsReduxForm = reduxForm<FormDataType>({form: 'newPost'})(MyPostsForm)

//наследование от React.PureComponent (вместо React.Component)  - оболочка, которая делает проверку в
//ShouldComponentUpdate на новые пропсы и не дает компоненте лишний раз перерисовываться мемоизация
//- это аналог React.memo в функциональной компоненте

export class MyPosts extends React.PureComponent<MyPostsPropsType> {
  render() {
    let {profilePage, addPost} = this.props;
    const onSubmit = (value: FormDataType) => {
      addPost(value.newPost)
    }
    return (
      <div className={styles.myPosts}>
        <h2>MyPosts</h2>
        <MyPostsReduxForm onSubmit={onSubmit}/>
        <Posts posts={profilePage.myPostsData}/>
      </div>
    )
  }
}