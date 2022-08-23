import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { SampleformvalidatorComponent } from './sampleformvalidator/sampleformvalidator.component';
import { ScreenDetailsComponent } from './screen-details/screen-details.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { ShowmoviewComponent } from './showmoview/showmoview.component';
import { ShowmultipleimagesComponent } from './showmultipleimages/showmultipleimages.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"register",component:RegistrationComponent},
  {path:"search",component:SerachDeleteComponent},
  {path:"login", component:LoginComponent},
  {path:"menu", component:MenuComponent},
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"showmovie", component:ShowmoviewComponent},
  {path:"movie",component:ShowmultipleimagesComponent},
  {path:"ticketbook",component:TicketbookingComponent},
  {path:"screenshow",component:ScreenDetailsComponent},
  {path:"payment", component:PaymentComponent},
  {path: "showticket", component:ShowTicketComponent},
  {path: "contact", component:ContactComponent},
  {path: "formvalidator", component:SampleformvalidatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
