
const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-200 hover:bg-gray-300 h-[450px] ">
      <img
        className="rounded-lg h-auto w-auto"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="kfc logo"
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;
