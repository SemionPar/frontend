import {NgbProgressbarConfig} from "@ng-bootstrap/ng-bootstrap";
import {Component} from "@angular/core";

@Component({
  selector: 'custom-progressbar',
  templateUrl: './progressbar-config.html',
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class CustomProgressbarConfig {
  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.showValue = true;
  }
}
