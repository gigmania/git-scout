import { Component, Output, EventEmitter } from '@angular/core';
import { RepoUrlInterface } from '../../models';

interface IssuesScoutFormValue {
  url: string;
}

const URL_PLACEHOLDER = 'Github Repo URL';
const VALID_HOSTNAME = 'github.com';

@Component({
  selector: 'app-issues-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class IssuesSearchComponent {
  @Output() fetchRepoIssues = new EventEmitter<RepoUrlInterface>();

  urlPlaceholder = URL_PLACEHOLDER;

  constructor() {}

  getRepoIssues(formValue: IssuesScoutFormValue) {
    try {
      const url = new URL(formValue.url);
      if (url.hostname === VALID_HOSTNAME) {
        this.fetchRepoIssues.emit({ url });
      } else {
        // TODO: v2 handle invalid hostname
      }
    } catch (error) {
      // TODO: v2 handle type error
    }
  }
}
