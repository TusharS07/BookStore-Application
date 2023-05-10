import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componts/login/login.component';
import { DashbordComponent } from './Componts/dashbord/dashbord.component';
import { AuthguardGuard } from './AuthGuard/authguard.guard';
import { GetAllBooksComponent } from './Componts/get-all-books/get-all-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashbordComponent, canActivate: [AuthguardGuard],
    children: [
      { path: '', component: GetAllBooksComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
