import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewspeech',
  templateUrl: './viewspeech.component.html',
  styleUrls: ['./viewspeech.component.css']
})
export class ViewspeechComponent {

   
      
  playAudio() { 
    let x=(<HTMLInputElement>document.getElementById("myUnit"));
    x.play();
  } 
  
  
  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = ".\src\assets\boom.wav";
  //   audio.load();
  //   audio.play();
  //   }
  //   this.playAudio();
    

}
