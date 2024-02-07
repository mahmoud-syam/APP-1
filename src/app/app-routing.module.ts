import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './footer/footer.component';

// Imortant Array of routes that i use it
const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home',component: HomeComponent , title: 'Home'},
  { path: 'about', component: AboutComponent , title: 'About'},
  { path: 'contact', component: ContactComponent ,title: 'Contact'},
  { path: 'portfolio', component: PortfolioComponent ,title: 'Portfolio'},
  { path: '**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
