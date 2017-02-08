import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeLibraryRoutingModule } from './app-routing.module';

import { Angular2TokenService } from 'angular2-token';
import { AuthGuard } from './auth-guard';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { BookFormComponent } from './book-form/book-form.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    NewBookComponent,
    EditBookComponent,
    NewUserComponent,
    NewUserFormComponent,
    NewUserSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [
    BookService,
    Angular2TokenService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
