import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GithubIssueInterface } from '../../models';
import { IssuesFiltersEnum } from '../issues/issues.component';

const GIT_SCOUT_BRAND = 'Git Scout';

@Component({
  selector: 'app-issues-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.scss'],
})
export class IssuesResultsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() issues: GithubIssueInterface[];
  @Input() issuesFilter: IssuesFiltersEnum;
  @Input() repoUrl: URL;
  @Input() hasIssues: boolean;

  @Output() resetIssues = new EventEmitter();
  @Output() filterIssues = new EventEmitter<IssuesFiltersEnum>();

  issuesFilterEnum = IssuesFiltersEnum;
  noIssuesMessage: string;
  gitScoutBrand = GIT_SCOUT_BRAND;

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit() {
    this._document.body.classList.add('results');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.issuesFilter) {
      const filter = changes.issuesFilter.currentValue;
      switch (filter) {
        case IssuesFiltersEnum.ALL_ISSUES:
          this.noIssuesMessage = `The repo at ${this.repoUrl?.href} has no issues`;
          break;
        case IssuesFiltersEnum.CLOSED:
          this.noIssuesMessage = `The repo at ${this.repoUrl?.href} has no closed issues`;
          break;
        case IssuesFiltersEnum.OPEN:
          this.noIssuesMessage = `The repo at ${this.repoUrl?.href} has no open issues`;
          break;
        case IssuesFiltersEnum.PULL_REQUESTS:
          this.noIssuesMessage = `The repo at ${this.repoUrl?.href} has no pull requests`;
          break;
        default:
          this.noIssuesMessage = `The repo at ${this.repoUrl?.href} has no issues`;
          break;
      }
    }
  }

  ngOnDestroy() {
    this._document.body.classList.remove('results');
  }

  clearResults() {
    this.resetIssues.emit();
  }

  selectIssuesFilter(filter: IssuesFiltersEnum) {
    this.filterIssues.emit(filter);
  }
}
