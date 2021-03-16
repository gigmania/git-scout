import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RepoUrlInterface, GithubIssueInterface } from '../models';

const BASE_API_URL = 'https://api.github.com';
const REPOS_ENDPOINT = '/repos';
const ISSUES_ENDPOINT = '/issues';
const PER_PAGE_QUERY = 'per_page=100';
const ALL_STATE_QUERY = 'state=all';

@Injectable()
export class IssuesService {
  constructor(private _http: HttpClient) {}

  fetchRepoIssues(
    repoUrl: RepoUrlInterface
  ): Observable<GithubIssueInterface[]> {
    //TODO: compose query string
    const {
      url: { pathname },
    } = repoUrl;
    return this._http
      .get<GithubIssueInterface[]>(
        `${BASE_API_URL}${REPOS_ENDPOINT}${pathname}${ISSUES_ENDPOINT}?${PER_PAGE_QUERY}&${ALL_STATE_QUERY}`
      )
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
