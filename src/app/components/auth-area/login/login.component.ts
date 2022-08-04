import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsModel } from 'src/app/models/credentials.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public credentials = new CredentialsModel();

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {

    }

    public async send() {
        try {
            await this.authService.login(this.credentials);
            alert("welcome Back!");
            this.router.navigateByUrl("/home");
        }
        catch (err: any) {
            alert(err.message);
        }

    }
}
