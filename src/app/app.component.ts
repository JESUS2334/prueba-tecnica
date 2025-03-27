import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Color, colorSets, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calendario';
  data: any[] = [];
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal, 
    selectable: true,
    name: 'custom',
  
  };

 onDateChange(event: MatDatepickerInputEvent<Date>) {
  const date = event.value?.toISOString().slice(0, 10);
  this.generateData(date);
}


generateData(date: string | undefined) {
  if (!date) return;

  this.data = [
    {
      name: date,
      series: Array.from({ length: 24 }, (_, i) => ({
        name: `${i}:00`,
        value: Math.floor(Math.random() * 100)
      }))
    }
  ];
}

}
