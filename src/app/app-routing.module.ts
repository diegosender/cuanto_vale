import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ResultadosComponent } from './components/resultados/resultados.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
