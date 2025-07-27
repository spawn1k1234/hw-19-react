import { useState, useEffect, useCallback, useMemo } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./styles.css";

const API_KEY = "46871450-555b57350d048403707859ab8";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await res.json();
        setImages((prev) => (page === 1 ? data.hits : [...prev, ...data.hits]));
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = useCallback((newQuery) => {
    setQuery(newQuery);
    setPage(1);
  }, []);

  const openModal = useCallback((imageUrl) => {
    setModalImage(imageUrl);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  const showLoadMore = useMemo(
    () => images.length > 0 && !loading,
    [images, loading]
  );

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {showLoadMore && <Button onClick={() => setPage((p) => p + 1)} />}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
}
