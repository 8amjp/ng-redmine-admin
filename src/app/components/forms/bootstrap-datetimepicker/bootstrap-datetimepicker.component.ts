import { Component, ElementRef, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: '[bootstrap-datetimepicker]',
  template: ''
})
export class BootstrapDatetimepickerComponent implements OnInit {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    $(this.el.nativeElement).datetimepicker({
    });
  }

}
