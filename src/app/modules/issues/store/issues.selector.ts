import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IssuesState } from './issues.reducer';
import { GithubIssueInterface } from '../models';

export const FEATURE_NAME = 'issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesSelector {
  private readonly _featureSelector = createFeatureSelector<IssuesState>(
    FEATURE_NAME
  );

  constructor(private _store: Store<IssuesSelector>) {}

  issues$ = this._select<GithubIssueInterface[]>((state) => state.issues);
  repoUrl$ = this._select<URL>((state) => state.repoUrl);

  private _select<T>(transformer: (state: IssuesState) => T): Observable<T> {
    return this._store.select(
      createSelector(this._featureSelector, transformer)
    );
  }
}
