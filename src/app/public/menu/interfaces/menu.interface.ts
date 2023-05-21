import { TooltipOptions } from "primeng/tooltip";

export interface Menu {
  name: string;
  url: string;
  urlActiveClass:string;
  icon: string;
  roles?: string[];
  tooltip:string;
  tooltipOptions:{
    showDelay:number;
    autoHide:boolean;
    tooltipEvent:string;
    tooltipPosition:string;
  }
  visible?: boolean;
  class?: string;
  style?: string;
  badge?:string;
}
