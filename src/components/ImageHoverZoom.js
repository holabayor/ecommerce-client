const ImageHoverZoom = ({ imagePath }) => {
  return (
    <div className="img-wrapper">
      <img src={imagePath} alt="" className="img-fluid w-100 hover-zoom" />
    </div>
  );
};
export default ImageHoverZoom;
