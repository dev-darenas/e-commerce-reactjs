import React from 'react';
import './styles.scss';
import { isBrowser } from "react-device-detect";
import HeaderBrowser from "./headerBrowser";
import HeaderMobile from "./headerMobile";

interface PropsHeader {
  changeHeader?: Boolean,
}

const Header = ({ changeHeader=true }:PropsHeader) => {
  return (
    <div>
      { isBrowser ? <HeaderBrowser changeHeader={changeHeader} /> : <HeaderMobile /> }
    </div>
  )
}

export default Header;
