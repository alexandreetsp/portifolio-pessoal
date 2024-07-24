import { NAV_ACTION_TYPES } from "./nav.types";
 const createAction = (type:string, payload: any) => ({ type, payload });

export const setNavCurrentTab = (tab: any) => createAction(NAV_ACTION_TYPES.SET_CURRENT_TAB, tab)