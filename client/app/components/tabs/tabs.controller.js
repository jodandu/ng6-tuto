class TabsController {
  constructor() {
    this.tabs = [];
  }

  addTab(tab) {
    this.tabs.push(tab);
  }

  selectTab(index) {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].selected = false;
    }
    this.tabs[index].selected = true;
  }

}

export default TabsController;
