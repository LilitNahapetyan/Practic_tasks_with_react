function Imagecard({ baseimageurl, copyright, date, technique, alttext }) {
  return (
    <div className="imageCard">
      <img className="cardImg" src={baseimageurl} alt={alttext} />
      <span>Copyright:{copyright}</span>
      <span>Technique:{technique} </span>
      <span>Date:{date}</span>
    </div>
  );
}

export default Imagecard;
