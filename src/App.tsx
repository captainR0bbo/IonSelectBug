import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Select test</IonLabel>
        <IonSelect>
          <IonSelectOption key={1} value={1}>
            1
          </IonSelectOption>
          <IonSelectOption key={2} value={2}>
            2
          </IonSelectOption>
          <IonSelectOption key={3} value={3}>
            3
          </IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonContent>
  </IonApp>
);

export default App;
