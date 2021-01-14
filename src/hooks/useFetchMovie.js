import {useState, useEffect} from 'react';
import {getMovie} from '../services/movie';

const LIMIT = 20;

function useFetchMovie() {
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState({
    search: '',
    tags: '',
  });

  const fetchMovies = async (body, type) => {
    try {
      const res = await getMovie(body);
      setCount(res.count);
      if (type === 'replace') {
        setMovies(res.results);
        setLoadingMovies(false);
      } else {
        setMovies((prev) => [...prev, ...res.results]);
        setPage((prev) => prev + 1);
        setPaginateLoading(false);
      }
    } catch (err) {
      // TODO: error handeling
      console.log(err);
    }
  };

  useEffect(() => {
    const body = {
      ...searchParams,
      offset: 0,
      limit: LIMIT,
    };
    setLoadingMovies(true);
    fetchMovies(body, 'replace');
  }, [searchParams]); // eslint-disable-line

  const handlePaginate = () => {
    const offset = page * LIMIT;
    if (offset < count) {
      setPaginateLoading(true);
      const body = {
        ...searchParams,
        offset,
        limit: LIMIT,
      };
      fetchMovies(body);
    }
  };

  const changeSearchParams = (name, value) => {
    setPage(1);
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    loadingMovies,
    paginateLoading,
    movies,
    searchParams,
    changeSearchParams,
    handlePaginate,
  };
}

export default useFetchMovie;
