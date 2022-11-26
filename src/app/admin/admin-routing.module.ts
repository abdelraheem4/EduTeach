import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent
  },
  {
    path:'user',
    component:ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
