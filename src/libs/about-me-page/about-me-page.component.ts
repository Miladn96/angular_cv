import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMePageComponent {

}
