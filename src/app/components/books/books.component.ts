import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [];

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}