import {Component, inject} from '@angular/core';
import {AssetCardComponent} from '../asset-card.component/asset-card.component';
import {AssetService} from '../../../services/asset.service';

@Component({
  selector: 'app-assets-grid',
  imports: [
    AssetCardComponent
  ],
  templateUrl: './assets-grid.component.html',
  styleUrl: './assets-grid.component.css',
  standalone: true
})
export class AssetsGridComponent {

  assetService = inject(AssetService);
}
