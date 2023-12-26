import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-state',
  standalone: true,
  imports: [],
  templateUrl: './tweet-state.component.html',
  styleUrl: './tweet-state.component.css',
})
export class TweetStateComponent {
  autoGrow(oField: HTMLTextAreaElement): void {
    if (oField.scrollHeight > oField.clientHeight) {
      oField.style.height = `${oField.scrollHeight}px`;
    }
  }
}
