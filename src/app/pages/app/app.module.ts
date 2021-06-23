import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InitEffect } from '@app/stores/init/init.effect';
import { AuthEffect } from '@app/stores/auth/auth.effect';
import { reducer as authReducer } from '@app/stores/auth/auth.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: "csrfToken", headerName: "Csrf-Token" }),
    RouterModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([InitEffect, AuthEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
