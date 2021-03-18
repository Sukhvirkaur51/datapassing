import { Component } from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datapassing';

  storedPost:Post[]=[];

  onAddingPost(posts1:Post){
    this.storedPost.push(posts1);
  }
}
