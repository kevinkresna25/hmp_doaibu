import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.SchedulePageModule)
  },
  {
    path: 'schedule-detail/:schedule_id',
    loadChildren: () => import('./schedule-detail/schedule-detail.module').then(m => m.ScheduleDetailPageModule)
  },
  {
    path: 'achievement/:game_id',
    loadChildren: () => import('./achievement/achievement.module').then(m => m.AchievementPageModule)
  },
  {
    path: 'teams/:game_id', 
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'apply',
    loadChildren: () => import('./apply/apply.module').then( m => m.ApplyPageModule)
  },
  {
    path: 'apply-team-new',
    loadChildren: () => import('./apply-team-new/apply-team-new.module').then( m => m.ApplyTeamNewPageModule)
  },
  {
    path: 'team-member/:team_id',
    loadChildren: () => import('./team-member/team-member.module').then( m => m.TeamMemberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
