import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataList;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
