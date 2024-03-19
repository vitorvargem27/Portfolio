import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Material UI imports
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

//Componentes
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { GithubconectService } from './githubconect.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PessoalComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    NgFor,
    NgIf,
    HttpClientModule,
    MatCardModule

  ],
  providers: [GithubconectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
