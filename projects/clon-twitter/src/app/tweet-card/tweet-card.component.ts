import { Component } from '@angular/core';
import { InteractionsButtonsComponent } from '../interactions-buttons/interactions-buttons.component';

@Component({
  selector: 'app-tweet-card',
  standalone: true,
  imports: [InteractionsButtonsComponent],
  templateUrl: './tweet-card.component.html',
  styleUrl: './tweet-card.component.css',
})
export class TweetCardComponent {}
