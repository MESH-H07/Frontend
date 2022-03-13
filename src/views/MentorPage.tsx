import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Card from "../components/Card/Card";

const mockedData = {
  imgSrc: "http://placekitten.com/g/500/640",
  name: "Mike",
  description: "This is a description",
  skills: ["English", "German", "Russian"],
};

const MentorPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar class={"yellowBar"}>
        <IonTitle color={"secondary"}>Familiar</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonTitle size="large">Your Recommendations</IonTitle>
      <Card
        imgSrc={mockedData.imgSrc}
        name={mockedData.name}
        description={mockedData.description}
        skills={mockedData.skills}
      ></Card>
    </IonContent>
  </IonPage>
);

export default MentorPage;
