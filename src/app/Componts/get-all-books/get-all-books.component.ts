import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { BookServiceService } from 'src/app/Services/booksService/book-service.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {


  selectedValue: any = "";
  allBooksData = [];


  constructor(
    private bookService: BookServiceService,
    private dataService: DataServiceService
    ) {

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.sortBooks();
  // }

  SortOption: any[] = [
    { value: 'lowToHigh', viewValue: 'Price: Low to High' },
    { value: 'HighToLow', viewValue: 'Price: High to Low' },
    { value: 'newestArrivals', viewValue: 'Newest Arrivals' }
  ]


  ngOnInit(): void {
    this.getAllDisplay();
  }

  onSortOptionChange(){
    console.log(this.selectedValue);
    // this.sortBooks();
    this.dataService.sendSearchValueSort(this.selectedValue);
  }

  // sortBooks() {
  //   if (this.selectedValue === 'lowToHigh') {
  //     this.allBooksData = this.allBooksData.sort((a:any,b:any) => {
  //       return a.discountPrice - b.discountPrice;
  //     })
  //     console.log(this.allBooksData);
      
  //   } else if (this.selectedValue === 'HighToLow') {
  //     this.allBooksData = this.allBooksData.sort((a:any,b:any) => {
  //       return b.discountPrice - a.discountPrice;
  //     })
  //     console.log(this.allBooksData);
  //   } 
  // }

  getAllDisplay() {
    this.bookService.getAllBooks().subscribe((res: any) => {
      console.log(res.result);
      this.allBooksData = res.result.reverse();
      console.log(this.allBooksData);
    })
  }
}
