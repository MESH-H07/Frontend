import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbox, person, ticket, informationCircle } from "ionicons/icons";

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
import React from "react";

import EventPage from "./views/EventPage";
import ChatPage from "./views/ChatPage";
import MentorPage from "./views/MentorPage";
import PoiPage from "./views/PointsOfInterestPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/mentors" component={MentorPage} exact={true} />
          <Route path="/events" component={EventPage} exact={true} />
          <Route path="/poi" component={PoiPage} exact={true} />
          <Route path="/chat" component={ChatPage} exact={true} />
          <Route
            path=""
            render={() => <Redirect to="/mentors" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" class={"yellowBar"}>
          <IonTabButton tab="mentorPage" href="/mentors">
            <IonIcon icon={person} />
          </IonTabButton>
          <IonTabButton tab="eventPage" href="/events">
            <IonIcon icon={ticket} />
          </IonTabButton>
          <IonTabButton tab="pointsOfInterestPage" href="/poi">
            <IonIcon icon={informationCircle} />
          </IonTabButton>
          <IonTabButton tab="chatPage" href="/chat">
            <IonIcon icon={chatbox} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
