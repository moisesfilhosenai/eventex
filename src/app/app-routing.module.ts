import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalestrasComponent } from './palestras/palestras.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "palestras", component: PalestrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
