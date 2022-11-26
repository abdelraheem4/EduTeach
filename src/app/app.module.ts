import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreventionComponent,
    SymptomsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  
  ],
    
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
