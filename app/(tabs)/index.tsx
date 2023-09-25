import { Text, Card, Button, Icon } from "@rneui/themed";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, TextInput, View } from "react-native";

const movieFetchData = {
  title: "Scream",
  year: "2000",
};

export default function Home({ path }: { path: string }) {
  const [texto, setTexto] = useState("Scream");
  const [movieData, setMovieData] = useState<OMDbProps | null>(null);

  const fetchMovieList = async () => {
    const response = await axios.get<OMDbProps>(
      `http://www.omdbapi.com/?apikey=${process.env.EXPO_PUBLIC_MOVIE_KEY}&t=${texto}`
    );
    console.log(response.data);

    setMovieData(response.data);
  };

  return (
    <ContainerView
      contentContainerStyle={{
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
      {movieData && (
        <>
          <Card>
            <Card.Title>{movieData?.Title}</Card.Title>
            <Card.Divider />

            <View
              style={{
                flexDirection: "column",
                marginBottom: 6,
              }}
            >
              <Image
                style={{ width: 300, height: 450 }}
                resizeMode="cover"
                source={{ uri: movieData?.Poster }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 5,
                }}
              >
                {movieData?.Plot}
              </Text>
            </View>
          </Card>
          {/* <Text>{movieData?.Title}</Text>
          <Text>{movieData?.Actors}</Text>
          <Text>{movieData?.Plot}</Text>
          <Text>{movieData?.Awards}</Text>
          <Text>{movieData?.Country}</Text>
          <Image
            style={{ width: 300, height: 450 }}
            source={{
              uri: movieData?.Poster,
            }}
          /> */}
        </>
      )}
      <StatusBar style="auto" />
    </ContainerView>
  );
}

//

import styled from "styled-components/native";

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
