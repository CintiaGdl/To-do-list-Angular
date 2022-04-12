import { Component, OnInit } from '@angular/core';
import { ListService } from '../list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get result() {
    return this.listService.list
  }

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

}
