export default function ImageGalleryItem({ small, large, onClick }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(large)}>
      <img className="ImageGalleryItem-image" src={small} alt="" />
    </li>
  );
}
