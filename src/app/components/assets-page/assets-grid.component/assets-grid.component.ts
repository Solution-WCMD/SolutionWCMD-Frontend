import {Component} from '@angular/core';
import {Asset, AssetCardComponent} from '../asset-card.component/asset-card.component';

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
    protected asset: Asset = {
        title: "2D Reflections | Mirror & Puddle",
        blobUrl: "https://assetstorev2-prd-cdn.unity3d.com/20251103/videos/f2edb542-f6e0-46d6-b879-d0c1f84a6f09/thumbnail.png",
        unityAssetUrl: "https://assetstore.unity.com/packages/2d/environments/2d-reflections-mirror-puddle-334898"
    }
}
