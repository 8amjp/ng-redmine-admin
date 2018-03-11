import { Component, ElementRef, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: '[select2]',
  templateUrl: './select2.component.html'
})
export class Select2Component implements OnInit {

  @Input() options: any[];

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    $(this.el.nativeElement).select2({
      width: "100%"
    });
  }
}
