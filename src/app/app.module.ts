import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchService} from "./principal/search-service.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {DashboardModule} from "./dashboard/dashboard.module";
<<<<<<< HEAD
import {AccumulationChartModule} from "@sys"
=======
>>>>>>> origin/master


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
