import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(` https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);
  return (
    <div>
      <h1>{detail.title}</h1>
      <div>
        <img src={detail.medium_cover_image} />
        <ul>
          <li>year: {detail.year}</li>
          <li>rating: {detail.rating}/10</li>
          <li>runtime: {detail.runtime} min</li>
        </ul>
      </div>
      <button onClick={() => {navigate(-1)}}>뒤로가기</button>
    </div>
  );
}

export default Detail;