import React from "react";
import {
    IonApp, IonContent,
    IonHeader,
    IonIcon,
    IonLabel, IonList, IonListHeader,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs, IonTitle, IonToolbar
} from "@ionic/react";
import './Form.css';


const eventPage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={'yellowBar'}>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonLabel class='ion-margin-top headerFont'>
                Events
            </IonLabel>
            <IonList>
                <IonListHeader>
                    <IonLabel>Nearby</IonLabel>
                </IonListHeader>
            </IonList>
        </IonContent>
    </IonPage>
);

export default eventPage;