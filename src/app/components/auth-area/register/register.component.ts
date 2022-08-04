import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public user = new UserModel();
  

  ngOnInit(): void {
  }
  public async send(){
    try{
        await this.authService.register(this.user);
        alert("welcome!");
        this.router.navigateByUrl("/home");
    }
    catch(err: any){
        alert(err.message);
    }
  }
}
