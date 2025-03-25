import { categories } from './../../../../mock-api/apps/academy/data';
import { NgClass, CurrencyPipe, I18nPluralPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { courses } from './mock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        NgClass,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        RouterLink,
        PercentPipe,
        I18nPluralPipe,
        MatTabsModule,
        FuseFindByKeyPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
    //  encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  courses: any = []
  categories: any = []

  middle: any = [];
  hard: any = [];

  ngOnInit(): void {
      this.courses = courses
      this.categories = categories
      
      this.middle = courses.slice(0, 3)
      this.hard = courses.slice(0, 1)
  }

   trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
