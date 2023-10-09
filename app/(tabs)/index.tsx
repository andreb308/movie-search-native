import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { TouchableOpacityProps, ImageBackground } from "react-native";

export default function Home({ path }: { path: string }) {
  const [texto, setTexto] = useState("Scream");
  const [movieData, setMovieData] = useState<OMDbProps | null>(null);
  const [recentMovies, setRecentMovies] =
    useState<Array<OMDbProps>>(initialMovieData);

  const fetchMovieList = async () => {
    const response = await axios.get<OMDbProps>(
      `http://www.omdbapi.com/?apikey=${process.env.EXPO_PUBLIC_MOVIE_KEY}&t=${texto}`
    );
    // console.log(response.data);

    setRecentMovies((prevList) => [response.data, prevList[0], prevList[1]]);
    setMovieData(response.data);
  };

  useEffect(() => {
    console.log(recentMovies);
  }, [movieData]);

  return (
    <ContainerView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledText>Escolha um filme?</StyledText>
      <Input
        onChangeText={(texto: string) => setTexto(texto)}
        value={texto}
        onSubmitEditing={() => fetchMovieList()}
      />
      <CardsContainer>
        {
          // Reversing the array

          // Displays on screen every recentMovie title
          recentMovies.map((movie) => {
            return (
              <Card key={movie.imdbID}>
                <ImageBackground
                  source={{ uri: movie.Poster }}
                  resizeMode="cover"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                ></ImageBackground>
                <StyledTitle>{movie.Title}</StyledTitle>
              </Card>
            );
          })
        }
      </CardsContainer>
      <StatusBar style="auto" />
    </ContainerView>
  );
}

// STYLES

import styled from "styled-components/native";

interface CardProps extends TouchableOpacityProps {
  url: string;
}

export const CardsContainer = styled.View`
  height: 80%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  /* background-color: pink; */
`;

export const Card = styled.TouchableOpacity`
  margin-top: 10px;
  position: relative;
  width: 100%;
  height: 150px;
  flex-direction: row;
`;

export const StyledImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 40%;
  height: 100%;
  /* border-radius: 5px; */
`;

export const StyledTitle = styled.Text`
  font-size: 40px;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* width: 60%; */
  color: white;
  text-align: center;
  text-align-vertical: center;
`;

const ContainerView = styled.ScrollView`
  margin-bottom: 10px;
`;

const Input = styled.TextInput.attrs({
  placeholder: "Teste",
  // keyboardType: "numeric",
  returnKeyType: "search",
  // secureTextEntry: true,
})`
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: white;
  /* // paddingLeft: 20px; */
  border-radius: 50px;
  margin: 5px;
`;

export const StyledText = styled.Text``;

const obj = {
  Title: "Teste di cocco",
  Year: "2000",
  Rated: "N/A",
  Released: "03 Nov 2000",
  Runtime: "95 min",
  Genre: "Comedy",
  Director: "Ugo Fabrizio Giordani",
  Writer: "Alfredo Arciero, Leonardo Benvenuti, Piero De Bernardi",
  Actors: "Alessandro Gassmann, Gianmarco Tognazzi, Manuela Arcuri",
  Plot: "N/A",
  Language: "Italian",
  Country: "Italy",
  Awards: "N/A",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZGYwY2FjZmYtMjFkOS00ZDQ5LWJmZDAtMTI4YjM1YTIxZjRiXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "4.4/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "4.4",
  imdbVotes: "162",
  imdbID: "tt0205718",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "N/A",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

type OMDbProps = typeof obj;

const initialMovieData: Array<OMDbProps> = [
  {
    Actors: "Neve Campbell, Courteney Cox, David Arquette",
    Awards: "12 wins & 11 nominations",
    BoxOffice: "$103,046,663",
    Country: "United States",
    DVD: "21 Apr 2016",
    Director: "Wes Craven",
    Genre: "Horror, Mystery",
    Language: "English",
    Metascore: "65",
    Plot: "A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg",
    Production: "N/A",
    Rated: "R",
    Ratings: [],
    Released: "20 Dec 1996",
    Response: "True",
    Runtime: "111 min",
    Title: "Scream",
    Type: "movie",
    Website: "N/A",
    Writer: "Kevin Williamson",
    Year: "1996",
    imdbID: "tt0117571",
    imdbRating: "7.4",
    imdbVotes: "370,797",
  },
  {
    Actors: "Miranda Cosgrove, Jennette McCurdy, Nathan Kress",
    Awards: "N/A",
    BoxOffice: "N/A",
    Country: "United States",
    DVD: "N/A",
    Director: "Steve Hoefer",
    Genre: "Adventure, Comedy, Family",
    Language: "English",
    Metascore: "N/A",
    Plot: 'Carly, Sam, and Freddie are thrilled when their web show is nominated for a prestigious iWeb Award in the "Best Comedy Web Show" category, but when one of the nominees plots to sabotage their act, the gang must get to the show on ...',
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzk2NmRkYzAtM2Y3NC00ZDM0LWJjZTktYmJkYTA4MTE2NDNjL2ltYWdlXkEyXkFqcGdeQXVyNDQxOTcxOTg@._V1_SX300.jpg",
    Production: "N/A",
    Rated: "TV-G",
    Ratings: [],
    Released: "08 Nov 2008",
    Response: "True",
    Runtime: "71 min",
    Title: "iCarly: iGo to Japan",
    Type: "movie",
    Website: "N/A",
    Writer: "Dan Schneider, Andrew Hill Newman",
    Year: "2008",
    imdbID: "tt1286124",
    imdbRating: "6.3",
    imdbVotes: "4,240",
  },
];
