import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../../../services/modalService/modal-service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
