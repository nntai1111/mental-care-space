import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRouter from "./router/index.jsx";
import { BreadcrumbProvider } from "./contexts/BreadcrumbContext";

function App() {
  return (
    <Provider store={store}>
      <BreadcrumbProvider>
        <AppRouter />
      </BreadcrumbProvider>
    </Provider>
  );
}

export default App;