import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.less',
  ],
})
export class LoginComponent implements OnInit {

  // 构造原始form数据
  loginFormControl = new FormGroup({
    userName: new FormControl('Yao.Xiao'),
    passWord: new FormControl('123456789')
  });

  public matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  // submit form value
  onSubmit = () => {
    // 验证不通过的话  直接return
    if (!this.loginFormControl.valid) return;
    const { value } = this.loginFormControl;
  
    this.loginService.loginPost(value).subscribe({
      next: (val) => {
        console.log(val)
        this.router.navigate(['homePage'], { queryParams: { name: value.userName } });
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
