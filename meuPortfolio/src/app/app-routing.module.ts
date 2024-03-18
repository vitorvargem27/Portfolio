import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path : '', component : HomePageComponent},
  { path : 'home', component : HomePageComponent},
  { path : 'header', component : HeaderComponent},
  { path : 'pessoal', component : PessoalComponent},
  { path : 'footer', component : FooterComponent},
  { path : 'projetos', component : ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
