import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'izp-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
