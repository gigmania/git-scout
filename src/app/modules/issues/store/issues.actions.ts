import { Action } from '@ngrx/store';
import { RepoUrlInterface, GithubIssueInterface } from '../models';

export const ISSUES_FETCH_START = '[Issues] Issues Fetch Start';
export const ISSUES_FETCH_COMPLETE = '[Issues] Issues Fetch Complete';
export const ISSUES_FETCH_ERROR = '[Issues] Issues Fetch Error';
export const ISSUES_RESET = '[Issues] Issues Reset';

export interface IssuesFetchCompletePayload {
  issues: GithubIssueInterface[];
}

export class IssuesFetchComplete implements Action {
  readonly type = ISSUES_FETCH_COMPLETE;

  constructor(public payload: IssuesFetchCompletePayload) {}
}

export class IssuesFetchError implements Action {
  readonly type = ISSUES_FETCH_ERROR;

  constructor() {}
}

export class IssuesFetchStart implements Action {
  readonly type = ISSUES_FETCH_START;

  constructor(public payload: RepoUrlInterface) {}
}

export class IssuesReset implements Action {
  readonly type = ISSUES_RESET;

  constructor() {}
}

export type IssuesActions =
  | IssuesFetchComplete
  | IssuesFetchError
  | IssuesFetchStart
  | IssuesReset;
