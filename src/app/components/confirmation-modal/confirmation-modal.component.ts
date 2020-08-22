import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  template: `<div class="modal-header">
                <h4 class="modal-title pull-left">{{title}}</h4>
                <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h6>{{message}}</h6>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default ml-2" (click)="decline()">Non</button>
                <button type="button" class="btn btn-danger" (click)="confirm()" >Oui</button>
              </div>`
})
export class ConfirmationModalComponent implements OnInit {
  message: string;
  title: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  confirm() {
    if (this.bsModalRef.content.callback != null){
      this.bsModalRef.content.callback('yes');
      this.bsModalRef.hide();
    }
  }

  decline() {
    if (this.bsModalRef.content.callback != null){
      this.bsModalRef.content.callback('no');
      this.bsModalRef.hide();
    }
  }
}
