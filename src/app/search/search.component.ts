import { Component } from '@angular/core';
import { APIService, SearchableBookFilterInput, Book } from '../API.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  bookList: Book[] = []

  // filterOption = { "Book": ["id", "genre", "title", "authorid"], "Author": ["id", "name"] }
  constructor(private api: APIService) { }
  filterOption = ["fantasy", "horror", 'romatinc', 'Science Fiction', 'Action', 'adventure']
  isFilterDropdownOpen: boolean = false;



  filtertoggleDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  filterSelectOption(filterOption: string) {
    this.filterSelectedValue = filterOption
    this.isFilterDropdownOpen = false
  }

  bookName: string = ''
  filterSelectedValue: string = ''
  search() {
    this.api.SearchAuthors({ name: { eq: this.bookName } })
      .then(data => {
        console.log(data)
        // for(let author=0;author.)
        this.bookList = []
        if (this.filterSelectedValue !== '') {
          for (let i = 0; i < data.items[0]!.books!.items.length; i++) {
            if (data.items[0]!.books!.items[i]?.genre === this.filterSelectedValue) {
              this.bookList.push(data.items[0]!.books!.items[i] as Book)
            }
          }
        }
        else {
          this.bookList = data.items[0]?.books?.items as Book[]
        }
      })

  }

}

