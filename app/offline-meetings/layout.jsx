import Navigation from "@components/Services/Offline-meetings/Navigation/Navigation";
import React from "react";

const OfflineMeetingsLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default OfflineMeetingsLayout;
