import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksPageComponent {

}
