import {Component, Input} from '@angular/core';

export interface Asset {
  title: string,
  blobUrl: string,
  unityAssetUrl: string
}

@Component({
  selector: 'app-asset-card',
  imports: [],
  templateUrl: './asset-card.component.html',
  styleUrl: './asset-card.component.css',
  standalone: true
})
export class AssetCardComponent {

  @Input( { required: true } ) asset!: Asset;

  onCardClick() {
    window.open(this.asset.unityAssetUrl, "_blank")
  }
}
