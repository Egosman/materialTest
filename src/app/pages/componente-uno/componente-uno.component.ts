import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/shared/models/field.interface';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calcularArray();
  }

  calcularArray():void {

    const array = [{ value: 1, name: 'CampoUno' }, 
                    { value: 2, name: 'CampoDos' }, 
                    { value: 3, name: 'CampoTres' }, 
                    { value: 4, name: 'CampoCuatro' }, 
                    { value: 5, name: 'CampoCinco' }, 
                    { value: 6, name: 'CampoSeis' },];

    const obj = { CampoUno: 1, CampoDos: 2, CampoTres: 3, CampoCuatro: 4, CampoCinco: 5, CampoSeis: 6 }


    let resultado = new Object;

    const newArrayKeys = Object.keys(array);
    const newArrayValues = Object.values(array);

    console.log(newArrayKeys);
    console.log(newArrayValues);

    resultado = array.map(objeto => {
      let newObjeto = {}
      newObjeto[objeto.name] = objeto.value
      return Object.entries(newObjeto)
    })

    let field: Field = {
      
    }
    
    console.log(resultado);
    console.log(obj);
    

  }

}
