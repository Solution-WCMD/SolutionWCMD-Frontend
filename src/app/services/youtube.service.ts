import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of, timeout, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface YouTubeVideo {
  title: string;
  link: YouTubeLink
}

export interface YouTubeLink {
  href: string;
}

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  constructor(private http: HttpClient) {}

  async getLatestVideos(): Promise<YouTubeVideo[]> {
    return await this.fetchList(`${environment.backendBaseUrl}/api/youtube/videos`);
  }

  async getLatestShorts(): Promise<YouTubeVideo[]> {
    return await this.fetchList(`${environment.backendBaseUrl}/api/youtube/shorts`);
  }

  private async fetchList(endpoint: string): Promise<YouTubeVideo[]> {
    return await firstValueFrom(
      this.http.get<YouTubeVideo[]>(endpoint).pipe(
        timeout(5000),
        catchError(err => {
          console.warn('YouTube API error:', err);
          return of([]);
        })
      )
    );
  }
}