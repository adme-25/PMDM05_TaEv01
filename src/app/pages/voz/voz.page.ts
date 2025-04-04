import { CamaraService } from './../../servicios/camara.service';
import { SpeechService } from './../../servicios/speech.service';
import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

@Component({
  selector: 'app-voz',
  templateUrl: './voz.page.html',
  styleUrls: ['./voz.page.scss'],
})
export class VozPage implements OnInit {

  recording = false;
  photo: string | null | undefined = null;

  constructor(public speechRecognition: SpeechService, public camara: CamaraService) {
    SpeechRecognition.requestPermissions();
   }

  ngOnInit() {
  }
  

  async startRecognition() {
    const { available } = await SpeechRecognition.available();

    if (available) {
      this.recording = true;
      SpeechRecognition.start({
        popup: false,
        partialResults: true,
        language: 'en-US',
    });

    SpeechRecognition.addListener ('partialResults', (data:any) => {
      console.log('partialResults was fired', data.matches);
      console.log('Posición 0: ', data.matches[0]);

      if (data.matches[0]?.toLowerCase() === 'foto' || data.matches[0]?.toLowerCase() === 'photo') {
        this.camara.sacarFoto();
      }
    });
    }
  }
  async stopRecognition() {
    this.recording =false;
    await SpeechRecognition.stop();
  }

}