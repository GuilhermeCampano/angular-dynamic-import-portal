import { Component, OnInit, Compiler, Injector, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentPortal, ComponentType, CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('slot1', {static: true, read: ViewContainerRef}) public slot1;
  @ViewChild('slot2', {static: true, read: ViewContainerRef}) public slot2;
  @ViewChild(CdkPortalOutlet, {static: true}) public portalSlot;

  public portalContent: ComponentPortal<any>;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef) {}

  public ngOnInit(): void {

    // Rendering red box in slot 1
    setTimeout(() => {
      import('./red-box/red-box.module')
      .then(({RedBoxModule}) => {
        return this.compiler.compileModuleAndAllComponentsAsync(RedBoxModule);
      })
      .then((compiled) => {
        const redBoxFactory = compiled.componentFactories.find(
          x => x.selector === 'red-box' 
        );
        const componentRef = this.slot1.createComponent(redBoxFactory);
        componentRef.instance.data = 'Placed in slot 1';
      });
    }, 1000);

    // Rendering red box in slot 2
    setTimeout(() => {
      import('./blue-box/blue-box.module')
      .then(({BlueBoxModule}) => {
        return this.compiler.compileModuleAndAllComponentsAsync(BlueBoxModule);
      })
      .then((compiled) => {
        const redBoxFactory = compiled.componentFactories[0];
        const componentRef = this.slot2.createComponent(redBoxFactory);
        componentRef.instance.data = 'Placed in slot 2';
      });
    }, 2000);

    // Rendering blue box using a portal outlet (NOT WORKING)
    // Error: No component factory found for BlueBoxComponent. Did you add it to @NgModule.entryComponents?

    // setTimeout(() => {
    //   import('./blue-box/blue-box.module')
    //   .then(({BlueBoxModule}) => {
    //     return this.compiler.compileModuleAndAllComponentsAsync(BlueBoxModule);
    //   })
    //   .then((compiled) => {
    //     const moduleRef = compiled.ngModuleFactory.create(this.injector);
    //     const blueBoxFactory = compiled.componentFactories.find(
    //       x => x.selector === 'blue-box' 
    //     );
    //     const portalComponent = new ComponentPortal(blueBoxFactory.componentType, this.viewContainerRef, this.injector);
    //     this.portalSlot.attachComponentPortal(portalComponent);
    //   })
    // }, 1500);
    
  }
}