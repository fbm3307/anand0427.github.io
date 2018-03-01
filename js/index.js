(function() {
  "use strict";

  angular
    .module("MyApp", ["ngMaterial", "ngMessages", "material.svgAssetsCache"])
    .config(PanelProviderConfig)
    .controller("PanelProviderCtrl", PanelProviderCtrl)
    .controller("PanelMenuCtrl", PanelMenuCtrl);

  function PanelProviderConfig($mdPanelProvider) {
    $mdPanelProvider.definePreset("sideNav", {
      attachTo: angular.element(document.body),
      controller: PanelMenuCtrl,
      controllerAs: "ctrl",
      template:
        "" +
        '<div class="menu-panel" md-whiteframe="4">' +
        '  <div class="menu-content">' +
        '    <div class="menu-item" ng-repeat="item in ctrl.items">' +
        '      <button class="md-button" ng-click="#">' +
        "        <span>{{item}}</span>" +
        "      </button>" +
        "    </div>" +
        "    <md-divider></md-divider>" +
        '    <div class="menu-item">' +
        '      <button class="md-button" ng-click="ctrl.closeMenu()">' +
        "        <span>Close Menu</span>" +
        "      </button>" +
        "    </div>" +
        "  </div>" +
        "</div>",
      panelClass: "menu-panel-container",
      focusOnOpen: true,
      zIndex: 100,
      propagateContainerEvents: true,
    });
  }

  function PanelProviderCtrl($mdPanel) {
    this.navigation = {
      name: "navigation",
      items: ["Home", "About", "Contact", "Photography"]
    };

    this.showMenu = function($event, menu) {
      $mdPanel.open("sideNav", {
        id: "menu_" + menu.name,
        position: $mdPanel
          .newPanelPosition()
          .relativeTo($event.srcElement)
          .addPanelPosition(
            $mdPanel.xPosition.ALIGN_START,
            $mdPanel.yPosition.BELOW
          ),
        locals: {
          items: menu.items
        },
        openFrom: $event
      });
    };
  }

  function PanelMenuCtrl(mdPanelRef) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    };
  }
})();