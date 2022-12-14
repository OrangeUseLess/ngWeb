import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public message: { data: string }
  ) { }

  ngOnInit(): void {
  }

}
