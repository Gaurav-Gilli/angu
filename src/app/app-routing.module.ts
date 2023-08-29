import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueerComponent } from './queer/queer.component';
import { GayComponent } from './gay/gay.component';

const routes: Routes = [
  {path:"queerpath",component:QueerComponent},
  {path:'gaypath', component:GayComponent},
  {path:'',redirectTo:'/gaypath', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
