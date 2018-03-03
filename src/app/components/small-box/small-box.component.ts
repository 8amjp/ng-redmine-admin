import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'small-box-component',
  templateUrl: './small-box.component.html'
})
export class SmallBoxComponent implements OnInit {

  @Input() color: string = 'bg-aqua';
  @Input() number: number;
  @Input() text: string;
  @Input() icon: string = 'fa fa-info';
  @Input() link: any = ['/'];
  @Input() footer: string = 'More info';

  constructor() { }

  ngOnInit() {
  }

}
