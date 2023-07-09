import React, { useEffect, useState } from "react";
import axios from "axios";

const GetRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {});
};

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhoto = React.useCallback(async () => {
    const images = await GetRandomPhotos(nextPage);
    const newPhoto = [...randomPhotos, ...images];
    setRandomPhotos(newPhoto);
    //   setRandomPhotos(images);
    setNextPage(nextPage + 1);
  }, []);
  useEffect(() => {
    handleLoadMorePhoto();
  }, [handleLoadMorePhoto]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5 ">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.download_url}
              ></img>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhoto}
          className="inline-block px-8 py-4  bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
