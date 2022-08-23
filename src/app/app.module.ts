import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { UserRegistationService } from './user-registation.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonService } from './common.service';
import { AdminComponent } from './admin/admin.component';
import { MovieallocationService } from './movieallocation.service';
import { ShowmoviewComponent } from './showmoview/showmoview.component';
import { ShowmultipleimagesComponent } from './showmultipleimages/showmultipleimages.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ScreenDetailsComponent } from './screen-details/screen-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { SampleformvalidatorComponent } from './sampleformvalidator/sampleformvalidator.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SerachDeleteComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    ShowmoviewComponent,
    ShowmultipleimagesComponent,
    TicketbookingComponent,
    ScreenDetailsComponent,
    PaymentComponent,
    ShowTicketComponent,
    ContactComponent,
    SampleformvalidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserRegistationService,LoginService,CommonService, MovieallocationService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
