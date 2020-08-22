import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ConfirmationModalComponent} from '../../components/confirmation-modal/confirmation-modal.component';
import {UploadDocumentComponent} from '../../components/upload-document/upload-document.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-development-path',
  templateUrl: './development-path.component.html',
  styleUrls: ['./development-path.component.scss']
})
export class DevelopmentPathComponent implements OnInit {
  saved = false;
  docURL = 'https://www.tutorialspoint.com/microservice_architecture/microservice_architecture_tutorial.pdf';
  validateConfirm: BsModalRef;
  finalizeConfirm: BsModalRef;
  uploadDocModal: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  saveDocument() {
    this.saved = !this.saved;
  }

  finalizeDocument() {
    this.finalizeConfirm = this.modalService.show(ConfirmationModalComponent, {
      initialState: {
        title: 'Confirmation',
        message: 'Etes-vous sûr de le finir plus tard?',
        callback: (result) => {
          if (result === 'yes'){
              // ToDo: Action here
              this.toastrService.success('Finir le document plus tard', 'Succès');
          }
        }
      }
    });
  }

  validateDocument() {
    this.validateConfirm = this.modalService.show(ConfirmationModalComponent, {
      initialState: {
        title: 'Confirmation',
        message: 'Etes-vous sûr de valider ce document?',
        callback: (result) => {
          if (result === 'yes'){
            // ToDo: Action here
            this.toastrService.success('Document validé', 'Succès');
          }
        }
      }
    });
  }

  uploadDocument() {
    this.uploadDocModal = this.modalService.show(UploadDocumentComponent);
  }

  backClicked() {
    this.location.back();
  }
}
