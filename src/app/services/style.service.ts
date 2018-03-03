import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class StyleService {
  private contexts = {
    danger: { bg: 'bg-red', callout: 'callout-danger', alert: 'alert-danger', label: 'label-danger', modal: 'modal-danger' },
    warning: { bg: 'bg-yellow', callout: 'callout-warning', alert: 'alert-warning', label: 'label-warning', modal: 'modal-warning' },
    info: { bg: 'bg-aqua', callout: 'callout-info', alert: 'alert-info', label: 'label-info', modal: 'modal-info' },
    primary: { bg: 'bg-light-blue', callout: 'callout-primary', label: 'label-primary', modal: 'modal-primary' },
    success: { bg: 'bg-green', callout: 'callout-success', alert: 'alert-success', label: 'label-success', modal: 'modal-success' }
  }

  private styles = {
    tracker: {
      '1': { context: 'danger', icon: 'fa fa-bug' }, // バグ
      '2': { context: 'warning', icon: 'fa fa-cog' }, // 機能
      '3': { context: 'info', icon: 'fa fa-support' } // サポート
    },
    status: {
      '1': { context: 'danger', icon: 'fa fa-bug' }, // 新規
      '2': { context: 'warning', icon: 'fa fa-cog' }, // 進行中
      '3': { context: 'info', icon: 'fa fa-support' }, // 解決
      '4': { context: 'warning', icon: 'fa fa-support' }, // フィードバック
      '5': { context: 'success', icon: 'fa fa-support' }, // 終了
      '6': { context: 'success', icon: 'fa fa-support' } // 却下
    },
    priority: {
      '1': { context: 'info', icon: 'fa fa-bug' },  // 低め
      '2': { context: 'primary', icon: 'fa fa-cog' }, // 通常
      '3': { context: 'warning', icon: 'fa fa-support' }, // 高め
      '4': { context: 'warning', icon: 'fa fa-support' }, // 急いで
      '5': { context: 'danger', icon: 'fa fa-support' } // 今すぐ
    }
  }

  private myStyles: object = (environment['styles']) ? environment['styles'] : null;

  constructor() {
    if(this.myStyles['tracker']) this.styles.tracker = this.myStyles['tracker'];
    if(this.myStyles['status']) this.styles.status = this.myStyles['status'];
    if(this.myStyles['priority']) this.styles.priority = this.myStyles['priority'];

    Object.keys(this.styles).forEach(function (resource) {
      Object.keys(this.styles[resource]).forEach(function (id) {
        this.styles[resource][id] = Object.assign({}, this.styles[resource][id], this.contexts[this.styles[resource][id]['context'])
      }.bind(this));
    }.bind(this));
  }

  get tracker() {
    return this.styles.tracker;
  }
  get status() {
    return this.styles.status;
  }
  get priority() {
    return this.styles.priority;
  }
}