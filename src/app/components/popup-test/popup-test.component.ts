import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})

export class PopupTestComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void { }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}