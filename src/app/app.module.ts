import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { DemandecreationComponent } from './demandecreation/demandecreation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TokenInterceptor } from './service/token-interceptor.service';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    DemandeListComponent,
    DemandecreationComponent,
    LoginComponent,
    ListUsersComponent

  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
}, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
