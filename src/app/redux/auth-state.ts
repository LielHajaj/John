import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { UserModel } from "../models/user.model";

export class AuthState {
    public token: string = null;
    public user: UserModel = null;

    constructor(){
        this.token = localStorage.getItem("token");
        if(this.token){
            const container: { user: UserModel } = jwtDecode(this.token);
            this.user = container.user
        }
    }

}
export enum AuthActionType {
    Register,
    Login,
    Logout
}
export interface AuthAction {
    type: AuthActionType;
    payload?: string;

}

export function authReducer(currentState = new AuthState, action: AuthAction): AuthState {
    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Register: // Here the payload is the token from the backend.
        case AuthActionType.Login:// Here the payload is the token from the backend.
            newState.token = action.payload;
            //npm i jwt-decode --> will extract the user from the token
            const container: { user: UserModel } = jwtDecode(newState.token);
            newState.user = container.user
            localStorage.setItem("token", newState.token);
            break;
        case AuthActionType.Logout:// Here we don't have any payload.
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
    }
    return newState;
}
export const AuthStore = createStore(authReducer);