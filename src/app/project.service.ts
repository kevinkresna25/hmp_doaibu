import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'https://ubaya.xyz/hybrid/160422075/project/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {}

  private formatBody(params: { [key: string]: any }): string {
    const body = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      body.set(key, params[key]);
    });
    return body.toString();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}login.php`,
      this.formatBody({ username, password }),
      { headers: this.headers }
    );
  }

  register(
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    avatar_url: string
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}register.php`,
      this.formatBody({
        username,
        password,
        first_name,
        last_name,
        avatar_url,
      }),
      { headers: this.headers }
    );
  }

  checkUsername(username: string) {
    const params = { username };
    return this.http.get(`${this.baseUrl}check_username.php`, { params });
  }

  applyTeam(member_id: number, team_id: number, description: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}apply_team.php`,
      this.formatBody({ member_id, team_id, description }),
      { headers: this.headers }
    );
  }

  getTeams(game_id: number): Observable<any> {
    const params = { game_id };
    return this.http.get(`${this.baseUrl}get_teams.php`, { params });
  }

  getTeamMembers(team_id: number): Observable<any> {
    const params = { team_id };
    return this.http.get(`${this.baseUrl}get_team_members.php`, { params });
  }

  getAboutUs(): Observable<any> {
    return this.http.get(`${this.baseUrl}about_us.php`);
  }

  getLikes(about_us_id: number, member_id: number): Observable<any> {
    const params = { about_us_id, member_id };
    return this.http.get(`${this.baseUrl}get_likes.php`, { params });
  }

  updateLike(about_us_id: number, member_id: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}update_likes.php`,
      this.formatBody({ about_us_id, member_id }),
      { headers: this.headers }
    );
  }

  getProposals(member_id: number): Observable<any> {
    const params = { member_id };
    return this.http.get(`${this.baseUrl}apply_team.php`, { params });
  }

  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}get_games.php`);
  }

  getAchievements(game_id: number): Observable<any> {
    const params = { game_id };
    return this.http.get(`${this.baseUrl}get_achievement.php`, { params });
  }

  getSchedules(): Observable<any> {
    return this.http.get(`${this.baseUrl}schedules.php`);
  }

  getScheduleDetail(schedule_id: number, member_id: number): Observable<any> {
    const params = { schedule_id, member_id };
    return this.http.get(`${this.baseUrl}schedule_detail.php`, { params });
  }

  updateNotification(scheduleId: number, memberId: number): Observable<any> {
    const body = this.formatBody({ schedule_id: scheduleId, member_id: memberId });
    return this.http.post(`${this.baseUrl}update_notify.php`, body, {
      headers: this.headers,
    });
  }
}
