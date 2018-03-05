import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NobleService } from './noble.service';
import { nobleData } from '../nobleData';
import { OnInit } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ImHausListe } from '../../ImHausListe';
import { AnreiseListe } from '../../AnreiseListe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NobleService]
})

export class AppComponent implements OnInit {

nobleData: nobleData[] = [];
nobleDataRaw : any[] = [];
nobleDataFiltered : any[] = [];
filesToUpload: Array<File> = [];
imHausListeElemente: ImHausListe[];
anreiseListeElemente: AnreiseListe[];
interval: any;

  constructor(private nobleService: NobleService, private http: Http,  private _flashMessagesService: FlashMessagesService) {

    this.nobleService.getImHausListe()
      .subscribe(imHausListeElemente => {
        //console.log('IM-HAUS-LISTE before:');
        //console.log(imHausListeElemente);
        this.imHausListeElemente = imHausListeElemente;
        console.log('IM-HAUS-LISTE:');
        console.log(this.imHausListeElemente);
      });

    this.nobleService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        this.anreiseListeElemente = anreiseListeElemente;
        console.log(this.anreiseListeElemente);
      });

    this.refreshData();
  }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 1000);
  }

  refreshData() {




    this.nobleService.getNobleData()
      .subscribe(noble => {
        console.log(noble);
        this.nobleDataRaw = this.nobleDataRaw.concat(noble);

        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }


        this.nobleDataFiltered = this.nobleDataRaw.filter(onlyUnique);

        for (let i: number = 0; i < this.nobleDataFiltered.length; i++) {
          this.nobleData[i] = new nobleData();
        }


        for (let a = 0; a < this.nobleDataFiltered.length; a++) {
          this.nobleData[a].roomNumber = this.nobleDataFiltered[a];
          this.nobleData[a].border = "";
          if (a === this.nobleDataFiltered.length - 1) {
            this.nobleData[a].border = "solid 3px red";

          }

        }
        console.log('noble:');
        console.log(this.nobleData);
      if(this.nobleData && this.anreiseListeElemente) {
        for (let a = 0; a < this.nobleData.length; a++) {
          for (let b = 0; b < this.anreiseListeElemente.length; b++) {
            if (this.nobleData[a].roomNumber === this.anreiseListeElemente[b].zimmernummer) {
              this.nobleData[a].roomNumber += " | " + this.anreiseListeElemente[b].name + " | " + this.anreiseListeElemente[b].abreise + " | " + this.anreiseListeElemente[b].personenAnzahl + " | " + this.anreiseListeElemente[b].notiz2;
            }
          }
        }
      }
      });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
    //console.log(this.successMsg);
    //this.product.photo = fileInput.target.files[0]['name'];
  }


  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res =>
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', {cssClass: 'alert-success', timeout: 10000}))
      .subscribe(files => console.log('files', files));
  }




}
