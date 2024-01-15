import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonButton, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

 //Importación del método http
 import { HttpClientModule } from  '@angular/common/http';

 //Importación de la interfaz
 import { Track } from '../interfaces/track';

 //Importación del servicio
 import { ProviderService } from '../services/provider.service'

 //Importación de los constructores del formulario
 import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonButton, IonLabel, IonList, IonItem, CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [ProviderService, FormBuilder]
})
export class Tab1Page {
  //Atributo con el tipo de dato de la interfaz
  public data : Track[] = [];

  checkoutForm = this.formBuilder.group({
    texto: ''
  });

  constructor(private dataProvider: ProviderService , private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.dataProvider.getResponse().subscribe( response => {
      if( response != null) {
        this.data = Object.values(response) as Track[]
      }
        
    })
  }

  onSubmit(): void {
    // Proceso para enviar los datos
    this.dataProvider.postResponse(this.checkoutForm.value).subscribe( (response) => {
            this.checkoutForm.reset();
            this.loadData()
        })
    }

}
