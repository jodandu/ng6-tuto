class TabController {
  constructor() {
    this.$onInit = function () {
      this.tab = {
        label: this.label,
        selected: false
      };
      //this.tabs === require: { tabs: '^^' }
      this.tabs.addTab(this.tab);
    };
  }
}

export default TabController;
