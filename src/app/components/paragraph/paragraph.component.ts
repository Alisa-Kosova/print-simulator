import { Component, OnInit, Input } from '@angular/core';
import { Theory } from '../../models/theory';

@Component({
  selector: '[app-paragraph]',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})

export class ParagraphComponent implements OnInit {

  @Input('app-paragraph') paragraph: Theory;

  constructor() { }

  ngOnInit(): void { }

}
