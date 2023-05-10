import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/booksService/book-service.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {


  selectedValue: any = "";
  allBooksData = [];


  constructor(private bookService: BookServiceService) {

  }

  SortOption: any[] = [
    { value: 'lowToHigh', viewValue: 'Price: Low to High' },
    { value: 'HighToLow', viewValue: 'Price: High to Low' },
    { value: 'newestArrivals', viewValue: 'Newest Arrivals' }
  ]


  ngOnInit(): void {
    this.getAllDisplay();
  }

  sortBooks() {

  }

  getAllDisplay() {
    this.bookService.getAllBooks().subscribe((res: any) => {
      console.log(res.result);
      this.allBooksData = res.result.reverse();
      console.log(this.allBooksData);
    })
  }
}
