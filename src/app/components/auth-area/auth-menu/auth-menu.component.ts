import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import { UserModel } from 'src/app/models/user.model';
import { AuthStore } from 'src/app/redux/auth-state';

@Component({
    selector: 'app-auth-menu',
    templateUrl: './auth-menu.component.html',
    styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit, OnDestroy {

    public user: UserModel;
    private unsubscribe: Unsubscribe;

    constructor() { }


    ngOnInit(): void {

        this.user = AuthStore.getState().user;
        this.unsubscribe = AuthStore.subscribe(() => {
            this.user = AuthStore.getState().user;
        });

    }
    ngOnDestroy(): void {
        this.unsubscribe();
    }

}
