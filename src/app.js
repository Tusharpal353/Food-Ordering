<<<<<<< HEAD
import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/Body";
import '.././style.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
// const heading = React.createElement("h1", {}, "Hello world")
// const heading1 = <h1>This is heading</h1>

const Kfcobj = {
  data: {
    id: "48344",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Phase 3",
    areaName: "Sector 60",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 15,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-26 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-phase-3-sector-60-chandigarh-48344",
    type: "WEBLINK",
  },
};







const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />

    </div>
  );
};




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },



      {
        path: "/about",
        element: <Aboutus />
      },
      {
        path: "/contact",
        element: <Contact />
      }]

  },
  {
    path: "/about",
    element: <Aboutus />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));
<<<<<<< HEAD
root.render(<RouterProvider router={appRouter} />);
=======
root.render(<AppLayout />);
=======
import React from "react";
import ReactDom from "react-dom";
import Header from "./Components/header";
import Body from "./Components/Body";

// const heading = React.createElement("h1", {}, "Hello world")
// const heading1 = <h1>This is heading</h1>

const Kfcobj = {
  data: {
    id: "48344",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Phase 3",
    areaName: "Sector 60",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 15,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-12-26 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-phase-3-sector-60-chandigarh-48344",
    type: "WEBLINK",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
>>>>>>> 9f64da325ef260fc7e84d7b8f5e4c15c6130ee79
>>>>>>> 4d9aca63547f9b55f501ba633b97db1c8edc2033
