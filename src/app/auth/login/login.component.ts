import { Component,OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from 'src/app/models/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
    identification:any = "";
    password:any = "";
constructor(public authService:AuthService){}

ngOnInit(): void {
    
}

login(){
  let auth:any = {email:this.identification,password:this.password}
  this.authService.login(auth).subscribe(data=>console.log(data));
  
}


}