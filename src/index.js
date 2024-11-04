import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./assets/css/GeneratedChecklistCard.css";
import "./assets/css/BuildingPermitPrintable.css";
import "./assets/css/GeneratedChecklist.css";
import "./assets/css/CustomTableSummary.css";
import "./assets/css/DefaultStyle.css";

import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </PersistGate>
  </Provider>
);

serviceWorker.unregister();
