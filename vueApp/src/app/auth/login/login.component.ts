import { Component } from '@angular/core';
import {User} from 'src/app/shared/user';
// import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    name:'',
    email: '',
    password: '',
    confirm:''
}
users: any;


constructor(public router: Router, private authService: AuthServiceService) { }

signin() {
  this.authService.login(this.user.email, this.user.password).subscribe(
      data => {
        console.log(data);
          localStorage.setItem('access_token',data.token+'');
           localStorage.setItem('currentUser',data.name+'')
          this.router.navigate(['/app/aa']);
      }
  )
  }
     
}

 
