import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ClientsComponent } from './clients/clients.component';
import {DataTablesModule} from 'angular-datatables';
import { ComptesComponent } from './comptes/comptes.component';
import { VoirComptesComponent } from './voir-comptes/voir-comptes.component';
import { VirementsComponent } from './virements/virements.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    WelcomeComponent,
    ComptesComponent,
    VoirComptesComponent,
    VirementsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DataTablesModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
