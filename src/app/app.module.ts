import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ApresentacaoComponent,
    TecnologiaComponent,
    FooterComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
