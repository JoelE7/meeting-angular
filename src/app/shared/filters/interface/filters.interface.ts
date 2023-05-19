import { Item } from '../../models/model-forms/item-form.interface';
import { FilterEnum } from '../enum/filters.enum';
import { Method } from '../enum/method.enum';

export interface Filters{
  autoSend:boolean;
  method:Method
  filtersCustom:FilterCustom[];
}

export interface FilterCustom {
  title: string;
  type: FilterEnum;
  col: string;
  nameFilter: string;
  valueFilter: any;
  order?:number;
  titleStyle?: any;
  titleClass?: string;
  inputStyle?: any;
  inputClass?: string;
  items?: Items;
  checkboxItems?: CheckboxItems;
  radioItems?: RadioItems;
}

export interface Items {
  label: string;
  value: any;
  items: Item[];
}

export interface CheckboxItems {
  items: any[];
  column: boolean;
}

export interface RadioItems {
  items: any[];
  name: string;
  column: boolean;
}
