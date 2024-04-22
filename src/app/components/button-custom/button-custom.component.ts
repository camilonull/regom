import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.css'
})
export class ButtonCustomComponent {
  @Input() buttonText: string = "";
  @Input() route: string = "";
  @Input() typeButton: boolean = false;
}
