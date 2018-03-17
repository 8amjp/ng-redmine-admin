import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-widget',
  templateUrl: './icon-widget.component.html'
})
export class IconWidgetComponent implements OnInit {

  @Input() bg: string = 'bg-aqua';
  @Input() icon: string = 'fa fa-info';
  @Input() text: string;
  @Input() number: number;
  @Input() progress: string = '100%';

  constructor() { }

  ngOnInit() {
  }

}
