import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
function RestrauntMenu() {
    const [resInfo, setResInfo] = useState("");
    // const { resId } = useParams();
    const params = useParams();
    const { resid } = params;
    console.log("resid=" + resid);


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7339&lng=76.7889&restaurantId=" +
                // resId +
                // "&catalog_qa=undefined&submitAction=ENTER"


                //" https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7339&lng=76.7889&restaurantId=" + resId + "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                " https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7339&lng=76.7889&restaurantId= 14256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    //const restaurantName = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name || 'Default Restaurant Name';
    const restaurantName = resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.name ?? 'Default Restaurant Name';
    const costForTwo = resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.
        costForTwo ?? 'Default Restaurant Name';
    const cuisines = resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.cuisines ?? 'Default cuisines';
    const avgRatingString = resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.avgRatingString
        ?? 'Default costfortwo';

    const
        cloudinaryImageId = resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.
            cloudinaryImageId
            ?? 'Default costfortwo';



    return (
        <>
            <h1>{restaurantName}</h1>
            <p>{cuisines}</p>
            <h2>{avgRatingString + " star"}</h2>
            <p>{costForTwo}</p>
            <img src={
                "cloudinaryImageId"} alt="img" />
            <p></p>

            <ul>

                <li>Biryani- <b> Dummy data</b></li>
                <li>Biryani- <b> Dummy data</b></li>
                <li>Biryani- <b> Dummy data</b></li>

            </ul>
        </>
    );
}

export default RestrauntMenu;
