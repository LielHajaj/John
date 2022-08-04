import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from './services/jwt.interceptor';

@NgModule({
    declarations: [
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, //ajax requests
        LayoutModule

    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
