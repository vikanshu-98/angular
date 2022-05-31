import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { InlineCssComponent } from './inline-css/inline-css.component';
import { InlineComponentComponent } from './inline-component/inline-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    InlineCssComponent,
    InlineComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
