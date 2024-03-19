import { Component, OnInit } from '@angular/core';
import { GithubconectService } from '../githubconect.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  repositories: any[] = []; 

  constructor(private githubService: GithubconectService) {}

  ngOnInit() {
    this.githubService.getRepositories('vitorvargem27').subscribe(
      (repos: any[]) => {
        this.repositories = repos;
      },
      (error) => {
        console.error('Erro ao obter repositórios do GitHub:', error);
      }
    );
  }

}
