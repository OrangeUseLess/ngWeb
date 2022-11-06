import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.less']
})
export class PageIndexComponent implements OnInit {

  videoUrl = "https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toRegister = () => {
    this.router.navigateByUrl('login');
  }

}
