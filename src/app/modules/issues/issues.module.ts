import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromIssuesStore from './store';
import * as fromIssuesServices from './services';

import * as fromIssuesComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(
      fromIssuesStore.FEATURE_NAME,
      fromIssuesStore.issuesReducer
    ),
    EffectsModule.forFeature(fromIssuesStore.effects),
  ],
  providers: [...fromIssuesServices.services],
  declarations: [...fromIssuesComponents.components],
  exports: [...fromIssuesComponents.exportComponents],
})
export class IssuesModule {}
