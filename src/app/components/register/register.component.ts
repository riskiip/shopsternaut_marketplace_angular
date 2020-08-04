import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

// tslint:disable-next-line: typedef
function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors( {passwordMatch: true});
  } else {
    confirmPassword.setErrors(null);
  }

  return null;
}

// tslint:disable-next-line: typedef
function symbolValidator(control) {
  if (control.hasError('required')) {
    return null;
  }
  if (control.hasError('minlength')) {
    return null;
  }

  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.buildingForm();
  }

  // tslint:disable-next-line: typedef
  buildingForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordMatchValidator
    });
  }

  // tslint:disable-next-line: typedef
  register() {
    console.log(this.registerForm.value);
  }

}
