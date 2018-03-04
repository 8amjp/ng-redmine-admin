import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class StyleService {

  private envStyles: object = environment['styles'] || null;

  private _contexts = {
    danger: { bg: 'bg-red', callout: 'callout-danger', alert: 'alert-danger', label: 'label-danger', modal: 'modal-danger', box: 'box-danger' },
    warning: { bg: 'bg-yellow', callout: 'callout-warning', alert: 'alert-warning', label: 'label-warning', modal: 'modal-warning', box: 'box-warning' },
    info: { bg: 'bg-aqua', callout: 'callout-info', alert: 'alert-info', label: 'label-info', modal: 'modal-info', box: 'box-info' },
    primary: { bg: 'bg-light-blue', callout: 'callout-primary', label: 'label-primary', modal: 'modal-primary', box: 'box-primary' },
    success: { bg: 'bg-green', callout: 'callout-success', alert: 'alert-success', label: 'label-success', modal: 'modal-success', box: 'box-success' }
  }

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
    }
  }

  private defaultIcon = { icon: 'fa fa-circle-o' };

  constructor() {
    // environment の styles をマージ
    if(this.envStyles['tracker']) this._styles.tracker = this.envStyles['tracker'];
    if(this.envStyles['status']) this._styles.status = this.envStyles['status'];
    if(this.envStyles['priority']) this._styles.priority = this.envStyles['priority'];

    Object.keys(this._styles).forEach(function (resource) {
      Object.keys(this._styles[resource]).forEach(function (id) {
        this._styles[resource][id] = Object.assign({}, this._styles[resource][id], this._contexts[this._styles[resource][id]['context']])
      }.bind(this));
    }.bind(this));
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

  get danger() {
    return Object.assign({}, this._contexts.danger, this.defaultIcon)
  }
  get warning() {
    return Object.assign({}, this._contexts.warning, this.defaultIcon)
  }
  get info() {
    return Object.assign({}, this._contexts.info, this.defaultIcon)
  }
  get primary() {
    return Object.assign({}, this._contexts.primary, this.defaultIcon)
  }
  get success() {
    return Object.assign({}, this._contexts.success, this.defaultIcon)
  }

}