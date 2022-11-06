import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  logoImgUrl: string = "https://material.angular.cn/assets/img/homepage/angular-white-transparent.svg";
  userName: string = '';
  durationInSeconds = 4;

  constructor(
    private router: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // 获取 user info （name）
    this.router.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.openMatSnackBar(this.userName);
    })
  }

  // 展示欢迎弹窗
  openMatSnackBar = (message: string) => {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: 'hi,' + message + ',welcome ! 😊'
    })
  }
}

