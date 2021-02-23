import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
/**
 * Componente que muestra una ventana modal
 * @class
 * @name ModalComponent
 */
export class ModalComponent {
  public isVisible = false;
  /**
   * Método que setea el valor que se le pasa para indicar si el modal es visible o no
   *
   */
  constructor(private el: ElementRef) { }

  public toggle = (visible?: boolean) =>
    this.isVisible = visible !== undefined ? visible : !this.isVisible;

}
