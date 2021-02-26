import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { BaseDirective } from './shared/base/base.directive';
import { AppState } from './store/app.reducer';
import * as AppSelectors from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseDirective implements OnInit {
  title = 'Typedemon';

  @ViewChild('mainContainer', { static: true }) mainContainer: ElementRef<
    HTMLElement
  >;

  constructor(
    private translateService: TranslateService,
    private store: Store<AppState>,
    private renderer: Renderer2,
  ) {
    super();
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.managedSubscriptions.push(
      this.store
        .pipe(
          select(AppSelectors.mainBackground),
          tap((background) => {
            console.log(background);
            this.renderer.setStyle(
              this.mainContainer.nativeElement,
              'background-image',
              background ? `url(${background})` : null,
            );
          }),
        )
        .subscribe(),
    );
  }
}
