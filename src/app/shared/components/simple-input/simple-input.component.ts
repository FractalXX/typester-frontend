import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { keys as _keys } from 'lodash';
import { distinctUntilChanged } from 'rxjs/operators';
import { BaseDirective } from '../../base/base.directive';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleInputComponent
  extends BaseDirective
  implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() hint: string;
  @Input() type: 'password' | 'number' | 'text' = 'text';
  @Input() required = false;
  @Input() icon?: string;
  @Input() iconType?: 'PREFIX' | 'SUFFIX';

  @ViewChild('inputElement') inputElement: ElementRef;

  public internalControl = new FormControl();

  public trackByIdentity = (index: number, item: any) => item;
  public onTouched = () => {};
  public onChange = (value: any) => {};

  constructor(private control: NgControl) {
    super();
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {
    this.managedSubscriptions.push(
      this.control.statusChanges.subscribe(() =>
        this.internalControl.setErrors(this.control.errors),
      ),

      this.internalControl.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((value) => this.onChange(value)),
    );
  }

  focus(): void {
    this.inputElement.nativeElement.focus();
  }

  writeValue(obj: any): void {
    this.internalControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.internalControl.disable();
    } else {
      this.internalControl.enable();
    }
  }

  getFirstError(): string {
    return _keys(this.control.errors)[0];
  }
}
