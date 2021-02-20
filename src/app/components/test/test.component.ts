import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestState } from '../../models/test-state';
import { selectText, selectAccuracy, selectLetters, selectSpeed } from '../../store/selectors/test.selector';
import { Observable, Subject } from 'rxjs';
import { ErrorsUpdate, DateUpdate, SpeedUpdate } from '../../store/actions/test.action';
import { takeUntil } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {

  public testText$: Observable<string> = this.store$.select(selectText);
  public accuracy$: Observable<number> = this.store$.select(selectAccuracy);
  public letters$: Observable<number> = this.store$.select(selectLetters);
  public speed$: Observable<number> = this.store$.select(selectSpeed);

  private testText: string;
  public userText: string;
  public errors: boolean = false;
  private lastError: number = 0;

  isStop = new Subject();

  constructor(private store$: Store<TestState>) { }

  ngOnInit(): void {
    this.testText$.subscribe(text => {
      this.testText = text;
      this.userText = '';
      this.store$.dispatch(new DateUpdate(new Date().getTime()));

      const countSpeed = interval(10000);
      countSpeed
      .pipe(
        takeUntil(this.isStop)
      )
      .subscribe({
        next: () => this.store$.dispatch(new SpeedUpdate({letters: this.userText.length, currentDate: new Date().getTime()}))
      });
    });
  }

  checkValue(event) {
    const endletter = event.target.value.length;
    const pattern = this.testText[endletter];

    if (this.userText.length >= this.testText.length-1) {
      this.isStop.next();
      this.store$.dispatch(new SpeedUpdate({letters: this.userText.length+1, currentDate: new Date().getTime()}));
    }

    if (String.fromCharCode(event.charCode).match(pattern)) {
      this.errors = false;
      return event.CharCode;
    } else {
      if (endletter > this.lastError) {
        this.lastError = endletter;
        this.store$.dispatch(new ErrorsUpdate());
      }
      this.errors = true;
      return event.preventDefault();
    }
  }
}