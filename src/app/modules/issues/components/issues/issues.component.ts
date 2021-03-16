import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { shareReplay, takeUntil, switchMap } from 'rxjs/operators';

import { IssuesDispatcher, IssuesSelector } from '../../store';
import { RepoUrlInterface, GithubIssueInterface } from '../../models';

export enum IssuesFiltersEnum {
  ALL_ISSUES = 'All Issues',
  OPEN = 'Open',
  CLOSED = 'Closed',
  PULL_REQUESTS = 'Pull Requests',
}

@Component({
  selector: 'app-issues',
  templateUrl: 'issues.component.html',
  styleUrls: ['issues.component.scss'],
})
export class IssuesComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject<boolean>();
  private _issuesFilter = new BehaviorSubject<IssuesFiltersEnum>(
    IssuesFiltersEnum.ALL_ISSUES
  );

  filteredIssues$: Observable<GithubIssueInterface[]>;
  issues$: Observable<GithubIssueInterface[]>;
  issuesFilter$: Observable<IssuesFiltersEnum> = this._issuesFilter.asObservable();
  repoUrl$: Observable<URL>;

  constructor(
    private _issuesDispatcher: IssuesDispatcher,
    private _issuesSelector: IssuesSelector
  ) {}

  ngOnInit() {
    this.issues$ = this._issuesSelector.issues$.pipe(shareReplay(1));
    this.repoUrl$ = this._issuesSelector.repoUrl$.pipe(shareReplay(1));

    this.filteredIssues$ = combineLatest([
      this.issues$,
      this.issuesFilter$,
    ]).pipe(
      switchMap(([issues, filter]) => {
        let filteredIssues;

        switch (filter) {
          case IssuesFiltersEnum.ALL_ISSUES:
            filteredIssues = issues;
            break;
          case IssuesFiltersEnum.PULL_REQUESTS:
            filteredIssues = issues?.filter((issue) => issue.pull_request);
            break;
          case IssuesFiltersEnum.OPEN:
            filteredIssues = issues?.filter(
              (issue) => issue.state === IssuesFiltersEnum.OPEN.toLowerCase()
            );
            break;
          case IssuesFiltersEnum.CLOSED:
            filteredIssues = issues?.filter(
              (issue) => issue.state === IssuesFiltersEnum.CLOSED.toLowerCase()
            );
            break;
          default:
            filteredIssues = issues;
            break;
        }
        return of(filteredIssues);
      }),
      takeUntil(this._destroyed),
      shareReplay(1)
    );
  }

  ngOnDestroy() {
    this._destroyed.next(true);
    this._destroyed.unsubscribe();
  }

  fetchRepoIssues(repoUrl: RepoUrlInterface) {
    this._issuesDispatcher.fetchRepoIssues(repoUrl);
  }

  filterIssues(filter: IssuesFiltersEnum) {
    this._issuesFilter.next(filter);
  }

  resetIssues() {
    this._issuesDispatcher.resetIssues();
    this._issuesFilter.next(IssuesFiltersEnum.ALL_ISSUES);
  }
}
