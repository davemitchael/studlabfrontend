import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

import { ModalService } from '../../services/modalService/modal-service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-modal',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: JQuery;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = $(el.nativeElement);
  }

  ngOnInit(): void {
    const modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    this.element.appendTo('body');

    this.element.on('click', function (e: any) {
      const target = $(e.target);
      if (!target.closest('._modal-body').length) {
        $(`#${this.id} form`)[0].reset();
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  _open(): void {
    this.element.show();
    $('body').addClass('modal-open');
  }

  close(): void {
    this.element.hide();
    $('body').removeClass('modal-open');
  }
}
