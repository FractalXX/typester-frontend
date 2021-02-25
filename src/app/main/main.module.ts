import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingPageComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class MainModule {}
