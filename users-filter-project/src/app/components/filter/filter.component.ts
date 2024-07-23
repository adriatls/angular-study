import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output('onFilter') clickEmmiter = new EventEmitter<IFilterOptions>();
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusOptions = [
    {
      value: true,
      viewValue: 'Ativo',
    },
    {
      value: false,
      viewValue: 'Inativo',
    },
  ];

  onFilter() {
    this.clickEmmiter.emit(this.filterOptions);
  }
}
