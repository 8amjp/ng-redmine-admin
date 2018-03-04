import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private _layout: string = environment['layout'] || 'skin-blue sidebar-mini';

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
    let layout = this._layout.split(' ');
    layout.forEach(function (className) {
      this.renderer.addClass(document.body, className);
    }.bind(this));

  }

}
