import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { Home2Component } from './pages/home2/home2.component';
import { ElementsComponent } from './pages/elements/elements.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'landing', component: Home2Component },
  { path: 'elements', component: ElementsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
