import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './components/logo/logo.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionEstudiosComponent } from './components/educacion-estudios/educacion-estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobreComponent,
    LogoComponent,
    ExperienciasComponent,
    EducacionEstudiosComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
