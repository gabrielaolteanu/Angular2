import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { UserContainerComponent } from './components/user-container/user-container.component';

const routes: Routes = [
  {
    path: "users", component:UserContainerComponent
  }, {
    path:"orders", component: OrderContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
