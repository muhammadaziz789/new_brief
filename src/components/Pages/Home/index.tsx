import { FC, useState } from "react";
import BrandingWrapper from "../Branding";
import NamingWrapper from "../Naming";
import BrifWrapper from "../Brif";

const MainPageWrapper: FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const [text, setText] = useState("")

  return (
    <>
      <div className="flex space-x-2 justify-center py-4">
        <button onClick={() => setCurrentTab(0)}>Branding</button>
        <button onClick={() => setCurrentTab(1)}>Naming</button>
        <button onClick={() => setCurrentTab(2)}>Brif</button>
      </div>
      <div>
        {currentTab === 0 ? (
          <BrandingWrapper setText={setText} />
        ) : currentTab === 1 ? (
          <NamingWrapper />
        ) : (
          <BrifWrapper />
        )}
      </div>
    </>
  );
};

export default MainPageWrapper;
