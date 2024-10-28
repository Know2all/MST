import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task7';
  imgUrl="https://cdn.vectorstock.com/i/500p/43/98/student-education-logo-vector-14724398.jpg";
    sixtamil=89;
    sixeng=90;
    sixmaths=99;
    sixsci=78;
    sixss=99;
    sixtot=455;
    sixavg=91;
    seventamil=98;
    seveneng=97
    sevenmaths=89
    sevensci=76
    sevenss=90
    seventot=450
    sevenavg=90
    eighttamil=78
    eighteng=89
    eightmaths=79
    eightsci=87
    eightss=77
    eighttot=410
    eightavg=82
    ninetamil=89
    nineeng=90
    ninemaths=90
    ninesci=70
    niness=94
    ninetot=433
    nineavg=86
    tentamil=90;
    teneng=76
    tenmaths=69
    tensci=90
    tenss=100
    tentot=424
    tenavg=84
}
