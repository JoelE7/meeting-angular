import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-request-accept-modal', 
  templateUrl: './request-accept-modal.component.html', 
  styleUrls: ['./request-accept-modal.component.css'], 

})
export class RequestAcceptModalComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1() {
    this.confirmationService.confirm({
        message: 'Estas seguro de querer aceptar?',
        header: 'Confirmacion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Haz aceptado' });
        },
        reject: (type) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Haz rechazado' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Haz cancelado' });
                    break;
            }
        }
    });
}
}
