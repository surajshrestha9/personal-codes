import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
  useParams,
  Outlet,
} from "react-router-dom";
import { Pages } from "./pages";
import { useCallback, useEffect, useState } from "react";
import CustomComponent from "./components";

// id receive in Brand Page
// server ma request client ma response

const BrandPage = () => {
  // hook data store - state hook
  let [brandDetail, setBrandDetail] = useState("apple");
  let [product, setProduct] = useState();
  let [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  let [query, setQuery] = useSearchParams();

  // let formik=useFormik()
  let params = useParams();

  /*   // always executable whenever state variable in the current component changes
  useEffect(()=>{
    // event call
    console.log("i am always called");
  });
  // always at first component is loaded
  
  // dependent on some variable
   // event or actions
  // setBrandDetail("new updated");
  useEffect(()=>{
    
  },[loading]);
   useEffect(() => {
    // first time
    // api call - brand data fetch,product data fetch,category data fetch
    
  }, []);
 */

  useEffect(() => {
    // first time
    // api call - brand data fetch,product data fetch,category data fetch
    // brand =>setBrandDetail(brand api response)
    // product=> setProductDetail(product api response)
    // category=> setCategoryDetail(category api response)
  }, [brandDetail]);
  // event brand add event
  useEffect(() => {
    // updated brand fetch api
    setBrandDetail("test brand");
  });
  // category
  useEffect(() => {
    // only execute when  category state gets changed
  });

  return (
    <table>
      <thead>
        <th>SN</th>
        <th>NAME</th>
        <th>STATUS</th>
        <th>ACTION</th>
      </thead>
      <tbody>{brandDetail ? <>component</> : <>loading.....</>}</tbody>
    </table>
  );
};

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        {/* <CustomComponent.MenuComponent /> */}
        <Routes>
          <Route path="/" element={<Pages.HomeLayout />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="register" element={<Pages.AuthPage />} />
            <Route path="login" element={<Pages.AuthPage />} />
            <Route path="brand/:id" element={<BrandPage />} />
            <Route
              path="/category/:slug"
              element={<>smartphones categoty list</>}
            />
          </Route>
          <Route path="/admin" element={<Pages.AdminLayout />}>
            <Route index element={<CustomComponent.AdminDashboard/>} />
            <Route path="product" element={<>admin product</>} />
            <Route path="user" element={<>admin user</>} />
            <Route path="user/:id" element={<>admin user detail or update</>} />
          </Route>

          {/* <Route path="/admin" element={} />
          <Route path="/admin/brand" element={} />
          <Route path="/admin/brand/create" element={} />
          <Route path="/admin/banner" element={} />
          <Route path="/admin/banner/create" element={} />
          <Route path="/category" element={} />
          <Route path="/category/create" element={} /> */}
          <Route path="*" element={<Pages.ErrorPage />} />
        </Routes>
        {/* <CustomComponent.HomePageFooterComponent /> */}
      </BrowserRouter>
    </>
  );
};
export default Routing;
