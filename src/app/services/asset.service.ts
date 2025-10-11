import {inject, Injectable} from '@angular/core';
import {Asset} from '../components/assets-page/asset-card.component/asset-card.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, firstValueFrom, of, timeout} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  assets: Asset[] = [];

  private httpClient = inject(HttpClient);
  private assetsUrl = `${environment.backendBaseUrl}/api/assets`;

  constructor() {
    this.initAssets().then(() => console.log("Assets fetched!"));
  }

  async initAssets(): Promise<void> {
    this.assets = this.dummyData;

    try {
      this.assets = await firstValueFrom(
        this.httpClient.get<Asset[]>(this.assetsUrl).pipe(
          timeout(5000),
          catchError(error => {
            console.warn('Backend request failed or timed out:', error);
            return of(this.dummyData);
          })
        )
      );
    } catch (error) {
      console.error('Unexpected error during asset fetch:', error);
    }
  }

  private dummyData: Asset[] = [
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
    {
      title: "Some fancy asset",
      blobUrl: "placeholder.jpg",
      unityAssetUrl: "noUrlYet"
    },
  ]
}
