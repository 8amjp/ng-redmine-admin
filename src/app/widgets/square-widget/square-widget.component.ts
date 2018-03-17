import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square-widget',
  templateUrl: './square-widget.component.html'
})
export class SquareWidgetComponent implements OnInit {

  @Input() bg: string = 'bg-aqua';
  @Input() number: number;
  @Input() text: string;
  @Input() icon: string = 'fa fa-info';
  @Input() link: any = ['/'];
  @Input() footer: string = 'More info';

  constructor() { }

  ngOnInit() {
  }

}
