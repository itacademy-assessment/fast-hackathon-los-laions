import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IRepository } from '../models/irepository';

const URL_GITHUB = "https://api.github.com/users/{usuario}/repos"

@Injectable({
  providedIn: 'root'
})

//

export class GithubRepos {
  private http = inject(HttpClient);

  getRepositories$(id: string) {
    return this.http
      .get<IRepository[]>(URL_GITHUB.replace('{usuario}', id));
  }
}
