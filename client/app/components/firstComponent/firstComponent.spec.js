import FirstComponentModule from './firstComponent'
import FirstComponentController from './firstComponent.controller';
import FirstComponentComponent from './firstComponent.component';
import FirstComponentTemplate from './firstComponent.html';

describe('FirstComponent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FirstComponentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FirstComponentController();
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
      expect(FirstComponentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FirstComponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FirstComponentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FirstComponentController);
      });
  });
});
