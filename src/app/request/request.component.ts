import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  reset(): void {
    this.origin = '';
    this.dest = '';
    this.passengers = 0;
    this.date = '';
    this.total = null;
    this.isShow = false;
  }
}
