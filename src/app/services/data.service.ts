import { Injectable } from '@angular/core';
import { ObservableStore } from '../core/observable-store';
import { GitHubProfile } from '../models/github-profile.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  GITHUB_PROFILE = new ObservableStore<GitHubProfile>({});
  repos = new ObservableStore<any[]>([]);

  constructor() { }
}
