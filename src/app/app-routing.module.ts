import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients/clients.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ComptesComponent } from './comptes/comptes.component';
import { VoirComptesComponent } from './voir-comptes/voir-comptes.component';
import { VirementsComponent } from './virements/virements.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    {
      path:'clients',component:ClientsComponent
    },
  {   path:'welcome',component:WelcomeComponent},
  {   path:'comptes',component:ComptesComponent},
   {   path:'voirComptes',component:VoirComptesComponent},
   {   path:'virements',component:VirementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
