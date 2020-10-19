import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleInputComponent } from './components/simple-input/simple-input.component';

const materialModules = [MatInputModule, MatFormFieldModule, MatButtonModule];

const commonModules = [
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  TranslateModule,
];

@NgModule({
  declarations: [SimpleInputComponent],
  imports: [CommonModule, ...commonModules, ...materialModules],
  exports: [...commonModules, ...materialModules, SimpleInputComponent],
})
export class SharedModule {}
