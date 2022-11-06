import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageIndexComponent } from './page-index/page-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/pageIndex', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pageIndex', component: PageIndexComponent },
  { path: 'homePage', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
