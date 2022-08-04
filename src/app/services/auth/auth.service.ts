import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CredentialsModel } from 'src/app/models/credentials.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthActionType, AuthStore } from 'src/app/redux/auth-state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    public async register(user: UserModel): Promise<void>{
        const token = await firstValueFrom(this.http.post<string>(environment.registerUrl, user));
        AuthStore.dispatch({type: AuthActionType.Register, payload: token});
    }
    public async login(credentials: CredentialsModel ): Promise<void>{
        const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credentials));
        AuthStore.dispatch({type: AuthActionType.Login, payload: token});
    }
    public logout():void{
        AuthStore.dispatch({type: AuthActionType.Logout});
    }
}
