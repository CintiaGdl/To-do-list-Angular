import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../list-service.service';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;

  constructor(private litsService: ListService) { }


  add() {
    // console.log(document.querySelector('input')?.value)
    // document.querySelector('input')!.value = ''
    console.log(this.txtInput.nativeElement.value)

    this.litsService.addItem(this.txtInput.nativeElement.value)
    this.txtInput.nativeElement.value = ''

  }

  ngOnInit(): void {
  }

}
