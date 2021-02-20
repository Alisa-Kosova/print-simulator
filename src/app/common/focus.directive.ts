import {AfterContentChecked, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'textarea[autoFocus]'
})
export class FocusDirective implements AfterContentChecked {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  ngAfterContentChecked(): void {
    this.element.nativeElement.focus();
  }
}