import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post.model'
@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  constructor() { }

  @Input() posts:Post[]=[];

  ngOnInit(): void {
  }

}
