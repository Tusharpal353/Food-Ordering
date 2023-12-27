const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="kfc-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="kfc logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;
