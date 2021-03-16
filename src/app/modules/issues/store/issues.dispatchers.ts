import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IssuesState } from './issues.reducer';
import * as fromIssuesActions from './issues.actions';
import { RepoUrlInterface } from '../models';

@Injectable({
  providedIn: 'root',
})
export class IssuesDispatcher {
  constructor(private _store: Store<IssuesState>) {}

  fetchRepoIssues(repoUrl: RepoUrlInterface) {
    this._store.dispatch(new fromIssuesActions.IssuesFetchStart(repoUrl));
  }

  resetIssues() {
    this._store.dispatch(new fromIssuesActions.IssuesReset());
  }
}
