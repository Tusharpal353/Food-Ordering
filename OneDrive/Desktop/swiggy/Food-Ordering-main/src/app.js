
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import RestrauntMenu from "./Components/RestrauntMenu";
import '../style.css';
import { lazy, Suspense } from "react";
// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const AboutUs = lazy(() => import("./Components/AboutUs"))


const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {

        //USING LAZY LOADING FOR THIS ONE
        path: "about",
        element:
          <Suspense fallback={"ABOUT WILL  LOAD IN SEC"} >
            <AboutUs />
          </Suspense >
        ,
      },
      {
        path: "contact",
        element: <Contact />,
      }, {
        path: "/restaurant/:resId",
        element: <RestrauntMenu />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <RouterProvider router={appRouter} />
  </ErrorBoundary>
);



/* 
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

root.render(<RouterProvider router={appRouter} />);

root.render(<AppLayout />);
 */
/* 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import '../style.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/Aboutus';
import Contact from './Components/Contact';
// import RestrauntMenu from './Components/RestaurantMenu'; // Uncomment if needed

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/contact', element: <Contact /> }
      // { path: '/restaurants/:resId', element: <RestaurantMenu /> } // Uncomment if needed
    ]
  },
  { path: '/about', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
 */