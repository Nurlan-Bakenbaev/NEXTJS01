export interface UserProfileProps {
  params: {
    id: string;
  };
}
export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}