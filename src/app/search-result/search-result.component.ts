import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snc-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  visible: boolean;
  test: string = "fdsfsd";

  constructor() {
    this.visible = true;
  }

  ngOnInit(): void {
  }

}
