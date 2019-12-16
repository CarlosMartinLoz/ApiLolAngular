import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-modulerouting";
import { PerfilComponent } from './perfil/perfil.component';
import { CampeonesComponent } from './campeones/campeones.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PartidasComponent } from './partidas/partidas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserInformationService} from "./services/user-information.service";
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [PerfilComponent, CampeonesComponent, EstadisticasComponent, PartidasComponent, DashboardComponent,NavBarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [UserInformationService],
})
export class DashboardModule { }
