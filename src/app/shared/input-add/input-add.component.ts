import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add',
  templateUrl: './input-add.component.html',
  styleUrls: ['./input-add.component.scss']
})
export class InputAddComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void { }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  };
}
