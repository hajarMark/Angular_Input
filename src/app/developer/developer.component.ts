import { Component, OnInit } from '@angular/core';
import { Developer} from '../common/Developer';
import { Skill}     from '../common/Skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }
  public developer:Developer | undefined;

  ngOnInit(): void {
    this.developer=new Developer ("Markaoui","Hajar",32,"ll","yes",
    [
      new Skill("comp angular", "logoA", "angular.io"),
        new Skill("comp java", "logoJ", "java.com"),
        new Skill("comp html", "logoH", "http")
    ]);
  }

}
