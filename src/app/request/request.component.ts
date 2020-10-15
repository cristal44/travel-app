import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  origin: string;
  dest: string;
  passengers = 0;
  date: string;
  total = 0;
  isShow = false;


  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.total = 150 * this.passengers;
    this.isShow = true;
  }

  clear(): void {
    this.origin = '';
    this.dest = '';
    this.passengers = 0;
    this.date = '';
    this.total = 0;
    this.isShow = false;

  }


}
