import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthServiceService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User={
    name:'',
    email: '',
    password: '',
    confirm:''
   
  }
  constructor(public router: Router,private authService:AuthServiceService) {}



///////////////////////////////Backend////////////////////////////////////////////////////////////
signup() {
	this.authService.register(this.user).subscribe(
		(data) => {
   
		 this.router.navigate(['/auth/login'])
		},
		
	);
}

}
