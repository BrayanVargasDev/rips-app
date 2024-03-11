import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-top-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent { }
