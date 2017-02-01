import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'new-user', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeLibraryRoutingModule { }
