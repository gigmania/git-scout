import { Component, Input } from '@angular/core';
import { GithubIssueInterface } from '../../models';
import { IssuesFiltersEnum } from '../issues/issues.component';

const NO_BODY_TEXT = 'No desciption provided';

@Component({
  selector: 'app-issue-card',
  templateUrl: 'issue-card.component.html',
  styleUrls: ['issue-card.component.scss'],
})
export class IssueCardComponent {
  @Input() issue: GithubIssueInterface;

  noBodyText = NO_BODY_TEXT;
  issuesFiltersEnum = IssuesFiltersEnum;

  constructor() {}
}
