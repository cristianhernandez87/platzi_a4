import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a4';
  lugares:any = [
    {plan:'pagado', cercania:1, distancia:10, active:true, edad:19, nombre:'cosa uno'},
    {plan:'gratuito', cercania:1, distancia:190, active:false, edad:8, nombre:'cosa dos'},
    {plan:'pagado', cercania:2, distancia:60, active:false, edad:22, nombre:'cosa tres'},
    {plan:'pagado', cercania:3, distancia:67, active:true, edad:56, nombre:'cosa persona'},
    {plan:'pagado', cercania:2, distancia:2, active:true, edad:10, nombre:'cosa perro'}
  ];
  lat: number = 4.6031256;
  lng: number = -74.190991;
  constructor() {

  }

}
