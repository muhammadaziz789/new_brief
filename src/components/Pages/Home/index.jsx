import { useState } from "react";
import BrandingWrapper from "../Branding";
import NamingWrapper from "../Naming";
import BrifWrapper from "../Brif";

export default function HomePageWrapper() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <div className="flex space-x-2 justify-center py-4">
        <button onClick={() => setCurrentTab(0)}>Branding</button>
        <button onClick={() => setCurrentTab(1)}>Naming</button>
        <button onClick={() => setCurrentTab(2)}>Brif</button>
      </div>
      {currentTab === 0 && <BrandingWrapper />}
      {currentTab === 1 && <NamingWrapper />}
      {currentTab === 2 && <BrifWrapper />}
    </>
  );
}
