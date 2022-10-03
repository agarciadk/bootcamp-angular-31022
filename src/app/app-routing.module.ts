import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'centro', component: CentroComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:curso', component: CursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
