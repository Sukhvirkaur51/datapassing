import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post.model';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts:Post={title:'',
   msg:''};

   @Output() eventpost=new EventEmitter<Post>();

add(f:NgForm)
{
console.log(f.value);
const posts1:Post={
  title:f.value.title,
  msg:f.value.msg
}

this.eventpost.emit(posts1);

}

}

