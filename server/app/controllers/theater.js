/**
 * Created by cgcladera on 08/01/14.
 */

exports.movies = function(req, res){
  res.json([
    {
      id: 'brave-2012',
      year: 2013,
      imageUrl: 'http://ia.media-imdb.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_SX640_SY720_.jpg',
      name: 'Brave',
      genders: [
        "animation",
        "fantasy"
      ]
    }
  ]);
}
exports.movie = function(req, res){
  res.json({
    id: 'brave-2012',
    year: 2012,
    imageUrl: 'http://ia.media-imdb.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_SX640_SY720_.jpg',
    name: 'Brave',
    genders: [
      "animation",
      "fantasy"
    ],
    imdbUrl: '',
    filmaffinityUrl: '',
    urls: {
      fullHD: 'https://s3.amazonaws.com/theater-club-movies/brave.mp4',
      HD: 'https://s3.amazonaws.com/theater-club-movies/brave.mp4',
      SD: 'https://s3.amazonaws.com/theater-club-movies/brave.mp4'
    }
  });
}