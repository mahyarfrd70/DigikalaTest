import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import HomeLayout from '../../Components/HomeLayout';
import Loading from '../../Components/Loading';
import MovieCard from '../../Components/MovieCard';
import useFetchMovie from '../../hooks/useFetchMovie';

function Home() {
  const {
    loadingMovies,
    paginateLoading,
    movies,
    searchParams,
    changeSearchParams,
    handlePaginate,
  } = useFetchMovie();

  const renderMovieItem = ({item}) => <MovieCard item={item} />;

  return (
    <HomeLayout value={searchParams} onFilter={changeSearchParams}>
      {loadingMovies ? (
        <Loading />
      ) : (
        <>
          <FlatList
            listKey={(item) => item.id}
            keyExtractor={(item) => item.name}
            data={movies}
            renderItem={renderMovieItem}
            onEndReached={!paginateLoading && handlePaginate}
            onEndReachedThreshold={0.5}
          />
          {paginateLoading && <Loading />}
        </>
      )}
    </HomeLayout>
  );
}

export default Home;
