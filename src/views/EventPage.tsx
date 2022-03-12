import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const EventPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar class={"yellowBar"}>
        <IonTitle color={"secondary"}>Familiar</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>
);

export default EventPage;
