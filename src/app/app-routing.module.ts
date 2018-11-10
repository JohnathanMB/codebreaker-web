import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewgameComponent} from './newgame/newgame.component';
import { GuessComponent} from './guess/guess.component';

const routes: Routes = [
  { path: '', redirectTo: '/newgame', pathMatch: 'full'},
  { path: 'newgame', component: NewgameComponent},
  { path: 'guess', component: GuessComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
