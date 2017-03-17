import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  books = [];

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
