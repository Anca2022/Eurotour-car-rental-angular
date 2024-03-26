import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FAQ } from '../../types';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ContentfulService } from '../../services/contentful.service';
import { fakeQuestions } from '../../fake-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss', '../conditions/conditions.component.scss']
})
export class FaqComponent implements OnInit{
  // questions:FAQ[]=[];
  questions$!:Observable<any>;
  // constructor(private titleService:Title){}

  // ngOnInit(): void {
  //     this.titleService.setTitle('Intrebari Frecvente | Eurotour - Inchirieri masini Cluj-Napoca');
  //     this.questions = fakeQuestions; 
  // }

  constructor(private titleService:Title, 
      private contentful: ContentfulService){}
  ngOnInit(): void {
    this.titleService.setTitle('Intrebari Frecvente | Eurotour - Inchirieri masini Cluj-Napoca')
    this.questions$ = this.contentful.questions$;  
  }
  
  toggleAnswer(t:any){
    t.classList.toggle('active');
  }

}
