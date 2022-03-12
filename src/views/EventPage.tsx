import React from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Form.css";

const EventPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar class={"yellowBar"}>
        <IonTitle color={"secondary"}>Familiar</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonLabel class="ion-margin-top headerFont">Events</IonLabel>
      <IonList>
        <IonListHeader>
          <IonLabel>Nearby</IonLabel>
        </IonListHeader>
      </IonList>
    </IonContent>
  </IonPage>
);

export default EventPage;
