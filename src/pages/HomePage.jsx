import * as React from "react";

import Navigation from "../components/Navigation";
import Item from "../components/Item";

export default function HomePage() {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <Navigation />
      <Item />
    </div>
  );
}
