import { Component, OnInit } from '@angular/core';
import { Theory } from '../../models/theory';
import { TheoryData } from '../../mock/theory-data';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {

  public theory: Theory[];

  constructor() { }

  ngOnInit(): void {
    this.addTheory();
  }

  addTheory() {
    this.theory = TheoryData;
  }
}