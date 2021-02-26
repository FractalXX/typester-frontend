import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';
import { SimpleInputComponent } from '../components/simple-input/simple-input.component';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  @Input() appAutoFocus = true;

  constructor(
    private elementRef: ElementRef,
    private simpleInputComponent: SimpleInputComponent,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    if (this.appAutoFocus && this.elementRef?.nativeElement) {
      // TODO focus should be handled in the individual components
      if (this.simpleInputComponent) {
        this.simpleInputComponent.focus();
        this.cdr.detectChanges();
      } else {
        this.elementRef.nativeElement.focus();
      }
    }
  }
}
