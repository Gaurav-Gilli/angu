import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GayComponent } from './gay/gay.component';
import { QueerComponent } from './queer/queer.component';
import { HttpClientModule} from '@angular/common/http';
import { EmpComponent } from './emp/emp.component'

@NgModule({
  declarations: [
    AppComponent,
    GayComponent,
    QueerComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
