import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'red-box',
  templateUrl: './red-box.component.html',
  styleUrls: ['./red-box.component.scss']
})
export class RedBoxComponent implements OnInit {
  @Input() public data: string = 'empty'; 

  public ngOnInit() {
    console.log('RedBoxComponent initialized');
  }

}