import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(params => this.bookId = params['id']);
  }

}
