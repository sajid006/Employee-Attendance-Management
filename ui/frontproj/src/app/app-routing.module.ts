import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MemberComponent} from './member/member.component';
import {AdminComponent} from './admin/admin.component'

const routes: Routes = [
  {path:'member',component:MemberComponent},
{path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }