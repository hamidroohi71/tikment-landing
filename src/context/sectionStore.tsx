import React, { useContext, useState } from "react";

const sectionContext = React.createContext<any>({});

export default function SectionContext({
  children,
}: {
  children: JSX.Element;
}) {
  const [activeSection, setActiveSection] = useState<any>(1);
  const [nextSection, setNextSection] = useState(4);

  return (
    <sectionContext.Provider
      value={{ activeSection, setActiveSection, nextSection, setNextSection }}
    >
      {children}
    </sectionContext.Provider>
  );
}

const useSection = () => {
  return useContext(sectionContext);
};

export { useSection };
