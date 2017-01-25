import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get('/api/books.json');
  }

  get(bookId: number) {
    return this.http.get('/api/books/' + bookId + '.json');
  }

  delete(book) {
    return this.http.delete('/api/books/' + book.id + '.json');
  }

  save(book) {
    let body = JSON.stringify({ book: book });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (typeof book.id !== 'undefined') {
      return this.http.put('/api/books/' + book.id + '.json', body, options);
    } else {
      return this.http.post('/api/books.json', body, options);
    }
  }
}
