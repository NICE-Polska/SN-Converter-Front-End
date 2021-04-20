import {Component, Injectable, OnInit} from '@angular/core';
import {DeviceDatum, DeviceRootObject, SearchFormService} from '../services/search-form/search-form.service';

@Component({
  selector: 'snc-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  searchResults: DeviceRootObject = {} as DeviceRootObject;

  constructor(private searchFormService: SearchFormService) {
  }

  ngOnInit(): void {
    this.searchResults = this.searchFormService.searchResults;
  }
}
