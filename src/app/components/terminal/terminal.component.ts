import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'izp-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  @Input() text: string = "";

  constructor() { }

  ngOnInit() {
  }

}
