import {ActionType, StateType} from "./state";
import {NavigationType} from "../components/Navbar/Navbar";

export type NavBarType = {
  navigation: Array<NavigationType>
}

export const navbarReducer = (state: NavBarType, action: ActionType) => {
  return state
}