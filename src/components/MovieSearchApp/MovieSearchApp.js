/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieSearchApp = () => {
  const [movie, setMovies] = useState([]);
  const [query, setQuery] = useState("home");
  const queryDebunce = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query='${queryDebunce}'`
      );
      if (response.data.results) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [queryDebunce]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-400 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_.2)"
          placeholder="Search Movie"
          onChange={handleChange}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading &&
          movie.length > 0 &&
          movie.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};
// https://image.tmdb.org/t/p/original
const MovieItem = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col">
      <div className="h-[297px]">
        <img
          className="w-full h-[297px] object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-lg text-black mb-4">{data.title}</h3>
        <p className="text-[#999] text-sm mb-6">{data.overview}</p>
        <div className="flex items-center gap-x-3  mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-sm text-[#333]">{data.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

const MovieItemLoading = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="16px"
        ></LoadingSkeleton>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-lg text-black mb-4">
          <LoadingSkeleton height="20px" />
        </h3>
        <p className="text-[#999] text-sm mb-6">
          <LoadingSkeleton height="10px" />
        </p>
        <div className="flex items-center gap-x-3  mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm text-[#333]">
            <LoadingSkeleton height="10px" width="100px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
