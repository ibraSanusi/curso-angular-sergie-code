import { Component } from '@angular/core';
import { LikeIconComponent } from '../icons/like-icon/like-icon.component';
import { RetweetIconComponent } from '../icons/retweet-icon/retweet-icon.component';
import { CommentIconComponent } from '../icons/comment-icon/comment-icon.component';
import { InteractionsIconComponent } from '../icons/interactions-icon/interactions-icon.component';
import { DownloadIconComponent } from '../icons/download-icon/download-icon.component';
import { SaveIconComponent } from '../icons/save-icon/save-icon.component';

@Component({
  selector: 'interactions-buttons',
  standalone: true,
  imports: [
    LikeIconComponent,
    RetweetIconComponent,
    CommentIconComponent,
    InteractionsIconComponent,
    DownloadIconComponent,
    SaveIconComponent,
  ],
  templateUrl: './interactions-buttons.component.html',
  styleUrl: './interactions-buttons.component.css',
})
export class InteractionsButtonsComponent {}
