import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubRepos } from './shared/services/github-repos';
import { IRepository } from './shared/models/irepository';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('github-hackathon');


  gitServ = inject(GithubRepos);
  repos = computed<IRepository[]>(() => {
    return [...this.reposJuan(), ...this.reposCarlosB(), ...this.reposCarlosM(), ...this.reposVania(), ...this.reposEdgar(), ...this.reposSergi()];
  });
  reposJuan = signal<IRepository[]>([])
  reposCarlosM = signal<IRepository[]>([])
  reposCarlosB = signal<IRepository[]>([])
  reposVania = signal<IRepository[]>([])
  reposEdgar = signal<IRepository[]>([])
  reposSergi = signal<IRepository[]>([])
  usuarios =["soyjuandelgado", "milenialdev", "Carlos-Martorell", "vaniaferreresteban"]
  
  constructor(){
    this.obtenerRepos();
  }

  obtenerRepos(){
    this.gitServ.getRepositories$("soyjuandelgado").subscribe((response) => {
      this.reposJuan.set(response);
    })
    this.gitServ.getRepositories$("milenialdev").subscribe((response) => {
      this.reposCarlosB.set(response);
    })
    this.gitServ.getRepositories$("Carlos-Martorell").subscribe((response) => {
      this.reposCarlosM.set(response);
    })
    this.gitServ.getRepositories$("vaniaferreresteban").subscribe((response) => {
      this.reposVania.set(response);
    })
    this.gitServ.getRepositories$("EdgarZerpaZG").subscribe((response) => {
      this.reposEdgar.set(response);
    })
    this.gitServ.getRepositories$("sbondia").subscribe((response) => {
      this.reposSergi.set(response);
    })
  }


}
