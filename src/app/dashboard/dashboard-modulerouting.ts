import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonesComponent } from './campeones/campeones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PartidasComponent } from './partidas/partidas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:"campeones",component:CampeonesComponent},
  {path:"dashboard/:nombre",component:DashboardComponent},
  {path:"estadisticas",component:EstadisticasComponent},
  {path:"partidas",component:PartidasComponent},
  {path:"perfil",component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
