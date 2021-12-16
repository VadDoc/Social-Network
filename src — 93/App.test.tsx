import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import {DialogPropsType, MessagePropsType} from "./components/Content/Dialogs/Dialogs";
// import {PostItemType} from "./components/Content/Profile/MyPosts/MyPosts";

// let dialogsData: Array<DialogPropsType>;
// let messagesData: Array<MessagePropsType>;
// let myPostsData: Array<PostItemType>

test('renders learn react link', () => {
  render(<App
    // dialogsData={dialogsData}
    // messagesData={messagesData}
    // myPostsData={myPostsData}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
