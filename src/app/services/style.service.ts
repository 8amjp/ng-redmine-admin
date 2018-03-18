import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class StyleService {

  private env = environment['styles'] || null;

  private _styles = {
    tracker: {
      1: { context: 'danger', icon: 'fa fa-bug' }, // バグ
      2: { context: 'warning', icon: 'fa fa-cog' }, // 機能
      3: { context: 'info', icon: 'fa fa-support' } // サポート
    },
    status: {
      1: { context: 'danger', icon: 'fa fa-circle-o' }, // 新規
      2: { context: 'warning', icon: 'fa fa-circle-o' }, // 進行中
      3: { context: 'info', icon: 'fa fa-circle-o' }, // 解決
      4: { context: 'warning', icon: 'fa fa-circle-o' }, // フィードバック
      5: { context: 'success', icon: 'fa fa-fa-check-circle-o' }, // 終了
      6: { context: 'success', icon: 'fa fa-check-circle-o' } // 却下
    },
    priority: {
      1: { context: 'info', icon: 'fa fa-info-circle' },  // 低め
      2: { context: 'primary', icon: 'fa fa-info-circle' }, // 通常
      3: { context: 'warning', icon: 'fa fa-exclamation-triangle' }, // 高め
      4: { context: 'warning', icon: 'fa fa-exclamation-triangle' }, // 急いで
      5: { context: 'danger', icon: 'fa fa-exclamation-triangle' } // 今すぐ
    },
    default: { context: 'primary', icon: 'fa fa-info-circle' }
  }

  private defaultIcon = { icon: 'fa fa-circle-o' };

  constructor() {
    // environment の styles をマージ
    if(this.env && this.env.hasOwnProperty('tracker')) this._styles.tracker = this.env['tracker'];
    if(this.env && this.env.hasOwnProperty('status')) this._styles.status = this.env['status'];
    if(this.env && this.env.hasOwnProperty('priority')) this._styles.priority = this.env['priority'];
  }

  get tracker() {
    return this._styles.tracker;
  }
  get status() {
    return this._styles.status;
  }
  get priority() {
    return this._styles.priority;
  }
  get default() {
    return this._styles.default;
  }

}
