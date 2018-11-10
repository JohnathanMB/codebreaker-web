import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCodebreakerService } from '../api-codebreaker.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  constructor(private codeService: ApiCodebreakerService) { }

  ansGuess: String;

  ngOnInit() {
  }

  guess(form: NgForm) {
    let numGuess = form.value.numGuess;
    console.log("Hola mundo de mierdA!" + numGuess);
    //this.ansGuess=numGuess;
    this.codeService.getGuess(numGuess)
      .subscribe(result => this.ansGuess = result.resultado);
  }

}
