// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogComponent } from './home-page/components/dialog/dialog.component';

// material ui
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// router
import { AppRoutingModule } from './app-routing.module';

// http
import { HttpClientModule } from '@angular/common/http';
import { SnackBarComponent } from './home-page/components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageIndexComponent,
    HomePageComponent,
    DialogComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
