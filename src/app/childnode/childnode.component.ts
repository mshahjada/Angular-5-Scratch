import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-childnode',
  templateUrl: './childnode.component.html',
  styleUrls: ['./childnode.component.css'],
})
export class ChildnodeComponent implements OnInit {
  url = 'data';
  name = '';
  constructor(public dataset: Dataset) {
    this.url = 'hello';
   }

  add_name() {
    this.dataset.developer_list.push({Name: this.name, Age: 20, Designation: 'Student'});
  }

  ngOnInit() {
  }

}
