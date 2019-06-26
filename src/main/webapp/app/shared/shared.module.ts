import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BugtrackerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BugtrackerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BugtrackerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugtrackerSharedModule {
  static forRoot() {
    return {
      ngModule: BugtrackerSharedModule
    };
  }
}
