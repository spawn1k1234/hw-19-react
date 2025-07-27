import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          small={image.webformatURL}
          large={image.largeImageURL}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
}
