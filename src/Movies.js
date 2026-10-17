const useMovies =()=>{
const getData = async () => {
  const res = await fetch(
    'https://movies-api.accel.li/api/v2/list_movies.json',
  );
  const data = await res.json();
  console.log(data.data.movies[0]['torrents'][0]['url']);
   console.log(data.data.movies[0]['synopsis']);
};
return{getData}
}
