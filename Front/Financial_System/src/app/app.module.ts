import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from './pages/guards/auth-guard.service';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const RxJS = [LoaderInterceptor, HTTPStatus];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports:
    [
      CommonModule
    ]
})
export class AppModule { }
