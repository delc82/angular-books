import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = [];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

}