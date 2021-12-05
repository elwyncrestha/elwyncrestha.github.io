import { environment } from "src/environments/environment";

export class UrlConstant {
  static GITHUB_PROFILe = `${environment.GITHUB_URL}/users/elwyncrestha`;
  static GITHUB_REPO = (repoName: string) => `${environment.GITHUB_URL}/repos/elwyncrestha/${repoName}`;
}
