import React, { useEffect, useState } from "react";
import NavButtons from "./NavButtons";
import NavButtonsMobile from "./NavButtonsMobile";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);

  useEffect(() => {
    setmobile(window.innerWidth < 1280);
  }, [mobile]);

  return <>{mobile ? <NavButtonsMobile /> : <NavButtons />}</>;
};

export default Navbar;
