import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import{environment} from '../environments/environment';
//components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { LoginComponent } from './login/login.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
//
import { HttpClientModule } from '@angular/common/http';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule,AngularFireDatabase} from '@angular/fire/database';
import{AngularFireAuth,AngularFireAuthModule} from '@angular/fire/auth';
import{AuthService} from './service/auth.service';
import{AuthGuard } from './service/auth.guard';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
//angular material
import {MatDialogModule,  MatTableModule,MatMenuModule,MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarRatingComponent,
    NavbarComponent,
    AddNewProductComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,  
    
    RouterModule.forRoot(
      [
         {path: ' ',redirectTo:'Login',pathMatch:'full',canActivate:[AuthGuard]},
         {path: 'ProductList' , component:ProductListComponent},
         {path: 'AddNewProducts' , component:AddNewProductComponent,canActivate:[AuthGuard]},
         {path: 'Home' , component:HomeComponent},
         {path: 'Login' , component: LoginComponent},
         {path: 'Register' , component: RegisterComponent},
         {path: '**' ,redirectTo:'Login',canActivate:[AuthGuard]}

      ],
    )
  ],
  providers: [AuthService,AngularFireAuth,AngularFireDatabase,AuthGuard],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { 

}
