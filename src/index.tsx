import * as React from "react";
import { render } from "react-dom";

import { FroalaEditor } from "./FroalaEditor";

const App: React.FC = () => {
  return <FroalaEditor />;
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
