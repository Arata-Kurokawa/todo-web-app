import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthEffect } from '@app/stores/auth/auth.effect';
import { reducer as authReducer } from '@app/stores/auth/auth.reducer';

import { AppInitializer } from '@app/app-initializer';

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
    EffectsModule.forRoot([AuthEffect])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializer.initialize,
      deps: AppInitializer.deps,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
