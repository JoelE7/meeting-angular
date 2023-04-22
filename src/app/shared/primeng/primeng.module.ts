import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DockModule } from 'primeng/dock';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  providers: [ConfirmationService],
  declarations: [],
  exports: [
    TreeModule,
    SidebarModule,
    MenubarModule,
    MenuModule,
    DockModule,
    ProgressBarModule,
    DividerModule,
    MessagesModule,
    MessageModule,
    InputNumberModule,
    FileUploadModule,
    CalendarModule,
    CheckboxModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    MultiSelectModule,
    PasswordModule,
    CardModule,
    DialogModule,
    ToastModule,
    PaginatorModule,
    TooltipModule,
    AutoCompleteModule,
    BreadcrumbModule,
    DropdownModule,
    ChipsModule,
    TableModule,
    SelectButtonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    InputSwitchModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
  ],
})
export class PrimengModule {}
