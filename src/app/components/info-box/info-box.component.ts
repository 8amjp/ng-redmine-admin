import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alt-info-box',
  templateUrl: './info-box.component.html'
})
export class InfoBoxComponent implements OnInit {

  @Input() type: string = 'first';
  @Input() bg: string = 'bg-aqua';
  @Input() icon: string = 'fa fa-info';
  @Input() text: string;
  @Input() number: number;
  @Input() progress: string = '100%';
  @Input() description: string;
  boxBg: string;
  iconBg: string;

  constructor() { }

  ngOnInit() {
    this.boxBg  = (this.type != 'first') ? this.bg : '';
    this.iconBg = (this.type == 'first') ? this.bg : '';
  }

}
