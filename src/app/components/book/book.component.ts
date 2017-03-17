import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: number;
  sub: any;
  books = [];

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    
  }

}