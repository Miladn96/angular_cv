import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsPageComponent {

}
