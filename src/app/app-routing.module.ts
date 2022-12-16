import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from '../app/pages/under-construction/under-construction.component';


const routes: Routes = [
  { path: '', component: UnderConstructionComponent },
  { path: '**', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
