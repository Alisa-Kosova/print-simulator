import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TestState } from '../../models/test-state';
import { TextLoad } from '../../store/actions/test.action';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})

export class PopupTestComponent implements OnInit {

  constructor(public router: Router, private store$: Store<TestState>) { }

  ngOnInit(): void { }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  startTest() {
    this.router.navigate(['/test']).then(() => this.closePopup());
    this.store$.dispatch(new TextLoad());
  }

}