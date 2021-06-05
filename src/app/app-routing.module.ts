import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients/clients.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
      path:'clients',component:ClientsComponent
    },
  {   path:'welcome',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
