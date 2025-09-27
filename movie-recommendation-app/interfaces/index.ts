export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface MovieDetailProps {
  movie: Movie;
}

export interface FavoriteMovie {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
}


export interface Movie {
  id: number;
  title: string;              
  overview: string;          
  poster_path: string | null;
  backdrop_path?: string | null; 
  release_date?: string;      
  vote_average: number;       
  genre_ids?: number[];       
}

export interface MovieListProps {
  movies: Movie[];
  loading: boolean;
}

export interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
}