import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of, timeout, catchError } from 'rxjs';
import { YouTubeSearchItem } from '../components/social-page/social-content.component/youtube.types';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  constructor(private http: HttpClient) {}

  async getLatestVideos(): Promise<YouTubeSearchItem[]> {
    return await this.fetchList('/api/youtube/videos');
  }

  async getLatestShorts(): Promise<YouTubeSearchItem[]> {
    return await this.fetchList('/api/youtube/shorts');
  }

  private async fetchList(endpoint: string): Promise<YouTubeSearchItem[]> {
    return await firstValueFrom(
      this.http.get<YouTubeSearchItem[]>(endpoint).pipe(
        timeout(5000),
        catchError(err => {
          console.warn('YouTube API error:', err);
          return of([]);
        })
      )
    );
  }
}