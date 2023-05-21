import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Filters } from './interface/filters.interface';
import { FilterEnum } from './enum/filters.enum';
import { FilterService } from './services/filter.service';
import { Method } from './enum/method.enum';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent {
  types = FilterEnum;

  filterValueReturn: any[] = [];

  @Input()
  filters: Filters = {
    autoSend: false,
    method: Method.GET,
    filtersCustom: [
      // {
      //   type: FilterEnum.INPUTTEXT,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Input text 1',
      //   inputStyle: {
      //     // 'margin-left' : "5px"
      //   },
      //   order: 1,
      //   inputClass: 'form-control ml-5',
      //   nameFilter: 'text',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.INPUTTEXT,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Input text 2',
      //   inputStyle: {
      //     // 'margin-left' : "5px"
      //   },
      //   order: 3,
      //   inputClass: 'form-control ml-5',
      //   nameFilter: 'text',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.INPUTTEXT,
      //   col: 'col-12 col-md-12 mt-3 mt-md-2',
      //   title: 'Input text 3',
      //   inputStyle: {
      //     // 'margin-left' : "5px"
      //   },
      //   inputClass: 'form-control ml-5',
      //   nameFilter: 'text',
      //   valueFilter: '',
      //   order: 2,
      // },
      // {
      //   type: FilterEnum.INPUTNUMBER,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Input number',
      //   nameFilter: 'number',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.INPUTPASSWORD,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Input password',
      //   nameFilter: 'password',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.DATE,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Fecha Inicio',
      //   nameFilter: 'startDate',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.DROPDOWN,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Dropdown',
      //   nameFilter: 'MULTI',
      //   valueFilter: '',
      //   items: {
      //     label: 'label',
      //     value: 'value',
      //     items: [
      //       {
      //         label: 'abc',
      //         value: 'valor 1',
      //       },
      //       {
      //         label: 'zyx',
      //         value: 'valor 2',
      //       },
      //     ],
      //   },
      // },
      // {
      //   type: FilterEnum.MULTISELECT,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Multiselect',
      //   nameFilter: 'MULTI',
      //   valueFilter: '',
      //   items: {
      //     label: 'label',
      //     value: 'value',
      //     items: [
      //       {
      //         label: 'abc',
      //         value: 'valor 1',
      //       },
      //       {
      //         label: 'zyx',
      //         value: 'valor 2',
      //       },
      //     ],
      //   },
      // },
      // {
      //   type: FilterEnum.SWITCH,
      //   col: 'col-12 col-md-6 mt-3 mt-md-2',
      //   title: 'Pass',
      //   nameFilter: 'SWITCH',
      //   valueFilter: '',
      // },
      // {
      //   type: FilterEnum.CHECKBOX,
      //   col: 'col-12 mt-3 mt-md-2',
      //   title: 'Prueba Checkbox',
      //   nameFilter: 'CHECKBOX',
      //   valueFilter: '',
      //   checkboxItems: {
      //     column: true,
      //     items: [
      //       {
      //         label: 'Opción 1',
      //         value: 'Valor 1',
      //       },
      //       {
      //         label: 'Opción 2',
      //         value: 'Valor 2',
      //       },
      //       {
      //         label: 'Opción 3',
      //         value: 'Valor 3',
      //       },
      //     ],
      //   },
      // },
      // {
      //   type: FilterEnum.RADIO,
      //   col: 'col-12 mt-3 mt-md-2',
      //   title: 'Prueba Radio',
      //   nameFilter: 'RADIO',
      //   valueFilter: '',
      //   radioItems: {
      //     column: true,
      //     name: 'radioPrueba',
      //     items: [
      //       {
      //         label: 'Opción 1',
      //         value: 'Valor 1',
      //       },
      //       {
      //         label: 'Opción 2',
      //         value: 'Valor 2',
      //       },
      //       {
      //         label: 'Opción 3',
      //         value: 'Valor 3',
      //       },
      //     ],
      //   },
      // },
    ],
  };

  @Output()
  eventFilterEmitter: EventEmitter<any[]> = new EventEmitter();

  constructor(private filterService: FilterService) {}

  filterCustom(
    filterName: string,
    filterValue: any,
    arrayValue: boolean = false
  ) {
    const filterExist = this.filterValueReturn.find(fil => fil.col === filterName);
  
    if (filterExist) {
      const index = this.filterValueReturn.indexOf(filterExist);
      this.filterValueReturn.splice(index, 1);
    }
  
    if (filterValue && !arrayValue) {
      this.filterValueReturn.push({ col: filterName, value: filterValue });
    } else if (arrayValue) {
      const value = (this.filters.method === Method.POST) ? { $all: filterValue } : filterValue;
      this.filterValueReturn.push({ col: filterName, value });
    }

  
    if (this.filters.autoSend) {
      this.sendFilter();
    } else {
      this.filterService.setFilters(this.filterValueReturn);
    }
  }

  sendFilter() {
    this.eventFilterEmitter.emit(this.filterValueReturn);
  }
}
