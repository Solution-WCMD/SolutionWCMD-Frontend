export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
}

export interface YouTubeVideoId {
  videoId: string;
}

export interface YouTubeSnippet {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: YouTubeThumbnails;
}

export interface YouTubeSearchItem {
  id: YouTubeVideoId;
  snippet: YouTubeSnippet;
}