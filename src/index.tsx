import reportWebVitals from './reportWebVitals';
import {state} from "./Redux/state";
import {rerenderEntireTree} from "./render";

// const rerenderEntireTree = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         addPost={addPost}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

rerenderEntireTree(state)

reportWebVitals();
