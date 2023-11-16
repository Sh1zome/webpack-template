import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";
import Page404 from "../pages/Page404/page404";
import News from "../pages/News/news";
import Offers from "../pages/Offers/offers";
import ServiceCenter from "../pages/ServiceCenter/serviceCenter";
import ITService from "../pages/ITService/itService";
import SKUD from "../pages/SKUD/skud";
import Print3D from "../pages/Print3D/print3d";
import OwnProducts from "../pages/OwnProducts/ownProducts";
import PriceList from "../pages/PriceList/priceList";
import Delivery from "../pages/Delivery/delivery";
import Guarantee from "../pages/Guarantee/guarantee";
import GovPurchases from "../pages/GovPurchases/govPurchases";
import FZ from "../pages/FZ/fz";
import Disposal from "../pages/Disposal/disposal";
import UsefulTips from "../pages/UsefulTips/usefulTips";
import Partnership from "../pages/Partnership/partnership";
import Certificates from "../pages/Certificates/certificates";
import Info from "../pages/Info/info";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path={ROUTES.OFFERS} element={<Offers />} />
      <Route path={ROUTES.SERVICE_CENTER} element={<ServiceCenter />} />
      <Route path={ROUTES.IT_SERVICE} element={<ITService />} />
      <Route path={ROUTES.SKUD} element={<SKUD />} />
      <Route path={ROUTES.PRINT_3D} element={<Print3D />} />
      <Route path={ROUTES.OWN_PRODUCTS} element={<OwnProducts />} />
      <Route path={ROUTES.PRICE_LIST} element={<PriceList />} />
      <Route path={ROUTES.DELIVERY} element={<Delivery />} />
      <Route path={ROUTES.GUARANTEE} element={<Guarantee />} />
      <Route path={ROUTES.GOV_PURCHASES} element={<GovPurchases />} />
      <Route path={ROUTES.FZ_44_223} element={<FZ />} />
      <Route path={ROUTES.DISPOSAL} element={<Disposal />} />
      <Route path={ROUTES.USEFUL_TIPS} element={<UsefulTips />} />
      <Route path={ROUTES.PARTNERSHIP} element={<Partnership />} />
      <Route path={ROUTES.CERTIFICATES} element={<Certificates />} />
      <Route path={ROUTES.INFO} element={<Info />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
