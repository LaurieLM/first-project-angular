import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class AppComponent {}
