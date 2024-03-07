export interface Movie {
    id: number; // Unique identifier for the movie
    title: string;
    genre: string; // Array of genres
    releaseDate: Date;
    imageUrl: string; // URL of the movie poster image
    language: string;
    duration: number 
    
  }