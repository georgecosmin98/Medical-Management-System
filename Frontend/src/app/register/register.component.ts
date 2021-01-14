import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    
    this.authService.register(f.value).subscribe(
      data => {
        console.log(data);
        if(data=="CREATED"){
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log("Succesful?: " +  this.isSuccessful);
        console.log("Failed?: " +  this.isSignUpFailed );
        }
        else
        {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log("Succesful?: " +  this.errorMessage);
        console.log("Failed?: " +  this.isSignUpFailed );
      }
    );
  }
    // this.authService.register(f.value).subscribe(() => { })
    // //location.reload();
    // }
}


