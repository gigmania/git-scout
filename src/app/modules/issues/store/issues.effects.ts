import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromIssuesActions from './issues.actions';
import { IssuesService } from '../services';

@Injectable()
export class IssuesEffects {
  constructor(
    private _actions$: Actions,
    private _issuesApiService: IssuesService
  ) {}

  fetchIssues$ = createEffect(
    (): Observable<
      fromIssuesActions.IssuesFetchComplete | fromIssuesActions.IssuesFetchError
    > => {
      return this._actions$.pipe(
        ofType(fromIssuesActions.ISSUES_FETCH_START),
        switchMap((action: fromIssuesActions.IssuesFetchStart) => {
          return this._issuesApiService.fetchRepoIssues(action.payload).pipe(
            map((issues) => {
              return new fromIssuesActions.IssuesFetchComplete({ issues });
            }),
            catchError((error) => of(new fromIssuesActions.IssuesFetchError()))
          );
        })
      );
    }
  );
}
