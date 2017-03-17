import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: string;
  books = [];

  constructor(private route: ActivatedRoute, private booksService: BooksService) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

}