export const environment = {
  production: false,
  redmine_protocol: "http",
  redmine_host_name: "localhost/redmine",
  redmine_api_format: ".json",
  redmine_api_key: "",

  layout: 'sidebar-collapse sidebar-mini skin-purple-light',
  styles: {
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
};
