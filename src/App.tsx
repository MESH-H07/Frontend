import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {ellipse, square, triangle} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from "react";

import eventPage from "./views/EventPage";
import chatPage from "./views/ChatPage";
import mentorPage from "./views/MentorPage";
import pointsOfInterestPage from "./views/PointsOfInterestPage";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/eventPage" component={eventPage} exact={true}/>
                    <Route path="/chatPage" component={chatPage} exact={true}/>
                    <Route path="/mentorPage" component={mentorPage} exact={true}/>
                    <Route path="/pointsOfInterestPage" component={pointsOfInterestPage} exact={true}/>
                    <Route path="" render={() => <Redirect to='/mentorPage'/>} exact={true}/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom" class={'yellowBar'}>
                    <IonTabButton tab="mentorPage" href="/mentorPage">
                        <IonIcon icon={square}/>
                    </IonTabButton>
                    <IonTabButton tab="eventPage" href="/eventPage">
                        <IonIcon icon={square}/>
                    </IonTabButton>
                    <IonTabButton tab="chatPage" href="/chatPage">
                        <IonIcon icon={square}/>
                    </IonTabButton>
                    <IonTabButton tab="pointsOfInterestPage" href="/pointsOfInterestPage">
                        <IonIcon icon={square}/>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;