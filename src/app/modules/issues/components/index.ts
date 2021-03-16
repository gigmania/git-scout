import { IssuesComponent } from './issues/issues.component';
import { IssuesSearchComponent } from './search/search.component';
import { IssuesResultsComponent } from './results/results.component';
import { IssueCardComponent } from './issue-card/issue-card.component';

export const components = [
  IssuesComponent,
  IssuesSearchComponent,
  IssuesResultsComponent,
  IssueCardComponent,
];

export const exportComponents = [
  IssuesComponent,
  IssuesSearchComponent,
  IssuesResultsComponent,
  IssueCardComponent,
];

export * from './issues/issues.component';
export * from './search/search.component';
export * from './results/results.component';
export * from './issue-card/issue-card.component';
