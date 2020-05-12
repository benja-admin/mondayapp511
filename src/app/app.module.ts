import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { Home2Component } from './pages/home2/home2.component';
import { ElementsComponent } from './pages/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    ClientsComponent,
    Nav2Component,
    Home2Component,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
