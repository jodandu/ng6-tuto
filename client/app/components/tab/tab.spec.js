import TabModule from './tab'
import TabController from './tab.controller';
import TabComponent from './tab.component';
import TabTemplate from './tab.html';

describe('Tab', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TabModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TabController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TabTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TabComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TabTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TabController);
      });
  });
});
