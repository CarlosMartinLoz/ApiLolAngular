import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-modulerouting";
import { PerfilComponent } from './perfil/perfil.component';
import { CampeonesComponent } from './campeones/campeones.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PartidasComponent } from './partidas/partidas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD

=======
import {UserInformationService} from "./services/user-information.service";
import {HttpClientModule} from "@angular/common/http";
>>>>>>> origin/master

@NgModule({
  declarations: [PerfilComponent, CampeonesComponent, EstadisticasComponent, PartidasComponent, DashboardComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    DashboardRoutingModule
  ]
=======
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [UserInformationService],
>>>>>>> origin/master
})
export class DashboardModule { }
