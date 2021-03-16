import * as fromIssuesActions from './issues.actions';
import { GithubIssueInterface } from '../models';

export interface IssuesState {
  issues: GithubIssueInterface[];
  repoUrl: URL;
}

const initialState: IssuesState = {
  issues: null,
  repoUrl: null,
};

export function issuesReducer(
  state: IssuesState = initialState,
  action: fromIssuesActions.IssuesActions
): IssuesState {
  switch (action.type) {
    case fromIssuesActions.ISSUES_FETCH_COMPLETE: {
      return {
        ...state,
        issues: action.payload.issues,
      };
    }
    case fromIssuesActions.ISSUES_FETCH_START: {
      return {
        ...state,
        repoUrl: action.payload.url,
      };
    }
    case fromIssuesActions.ISSUES_RESET: {
      return {
        ...state,
        issues: null,
        repoUrl: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
