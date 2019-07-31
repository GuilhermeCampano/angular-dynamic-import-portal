import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.scss']
})
export class BlueBoxComponent implements OnInit {

  @Input() public data: string = 'empty'; 

  public ngOnInit() {
    console.log('BlueBoxComponent initialized');
  }

}