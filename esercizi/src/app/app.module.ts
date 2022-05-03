import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSingleComponent } from './components/user-single/user-single.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderSingleComponent } from './components/order-single/order-single.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
