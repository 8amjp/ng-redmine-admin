import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square-widget',
  templateUrl: './square-widget.component.html'
})
export class SquareWidgetComponent implements OnInit {

  @Input() context: string = 'info';
  @Input() icon: string = 'fa fa-info';
  @Input() number: number;
  @Input() text: string;
  @Input() progress: string = '100%';
  @Input() link: any = ['/'];
  cardstyle;

  constructor() { }

  ngOnInit() {
    this.cardstyle = 'bg-' + this.context;
  }

}
