import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleInputComponent } from './components/simple-input/simple-input.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  A11yModule,
];

const commonModules = [
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  TranslateModule,
];

@NgModule({
  declarations: [SimpleInputComponent, AutoFocusDirective],
  imports: [CommonModule, ...commonModules, ...materialModules],
  exports: [
    ...commonModules,
    ...materialModules,
    SimpleInputComponent,
    AutoFocusDirective,
  ],
})
export class SharedModule {}
