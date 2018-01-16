import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NobleService } from './noble.service';
import { nobleData } from '../nobleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NobleService]
})
export class AppComponent {

nobleData: nobleData;

  constructor(private nobleService: NobleService) {

    this.nobleService.getNobleData()
      .subscribe(noble => {
        //console.log('IM-HAUS-LISTE before:');
        //console.log(imHausListeElemente);
        this.nobleData = noble;
        console.log('noble:');
        console.log(this.nobleData);
      });
}
}
