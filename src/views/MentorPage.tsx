import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
} from "@ionic/react";
import Tag from "../components/Tag/Tag";

const mockedData = {
  imgSrc: "http://placekitten.com/g/500/640",
  name: "Mike",
  description: "This is a description",
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
      <IonCard>
        <IonCardHeader>
          <IonItem>
            <IonImg src={mockedData.imgSrc} />
          </IonItem>
          <IonCardTitle>{mockedData.name}</IonCardTitle>
          <IonCardSubtitle>{mockedData.description}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Hello world
          <Tag content="Trait"></Tag>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default MentorPage;
