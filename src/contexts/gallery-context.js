import { createContext, useContext, useState } from "react";
import useLocalStorage from ".././hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1689165082031-fcd0b554a51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1689308609307-c1410e455a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1689085383708-8d62ccea8035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    isFavorite: true,
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1688522732585-9c1021a0a021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1688362378089-23fbdd87eaa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1689426308960-6917b05ab2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isFavorite: false,
  },
];

const Gallerycontext = createContext();

function GaleeryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }

  function addToCart(newItem) {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCartItems((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      console.log("setCartItems ~ isExisted", isExisted);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Chưa tồn tại thì thêm vào giỏ hàng
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      setStoredCart(result);

      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setFavoriteList,
    setCartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <Gallerycontext.Provider value={value} {...props}></Gallerycontext.Provider>
  );
}

function useGallery() {
  const context = useContext(Gallerycontext);
  if (typeof context === "undefined")
    throw new Error("Gallery must be used a CountProvider");
  return context;
}

export { GaleeryProvider, useGallery };
