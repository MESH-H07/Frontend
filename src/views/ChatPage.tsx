import React from "react";
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonSearchbar,
    IonThumbnail,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import chats from "../db/mocks/chats.json";
import woman from "../assets/woman-g9d586d94e_1920.jpg";
import man from "../assets/model-g30f2773d5_1920.jpg";
import arrow from "../assets/toppng.com-right-arrow-icon-221x361.png";

const ChatPage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={"yellowBar"}>
                <IonTitle color={"secondary"}>Familiar</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonLabel class="ion-margin-top headerFont">Chats</IonLabel>
            <IonToolbar>
                <IonSearchbar class={'searchBarStyle'} autocorrect={'on'} autocomplete={'on'} spellcheck={true}
                              animated={true}/>
            </IonToolbar>
            {chats.chats[0].Chat1.map(user => (

                <IonItem key={user.user2.id} onClick={() => console.log(user.user2.username)}
                         button>
                    <IonThumbnail slot={'start'}>
                        <img src={woman} alt={'AWO Icon'}/>
                    </IonThumbnail>
                    <IonThumbnail slot={'end'}>
                        <img src={arrow} alt={'Arrow Icon'}/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>{user.user2.username}</h2>
                        <p>{user.user2.role}</p>
                    </IonLabel>
                </IonItem>
            ))}
            {chats.chats[0].Chat2.map(user => (
                <IonItem key={user.user1.id} onClick={() => console.log(user.user1.username)}
                         button>
                    <IonThumbnail slot={'start'}>
                        <img src={man} alt={'AWO Icon'}/>
                    </IonThumbnail>
                    <IonThumbnail slot={'end'}>
                        <img src={arrow} alt={'Arrow Icon'}/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>{user.user1.username}</h2>
                        <p>{user.user1.role}</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonContent>
    </IonPage>
);

export default ChatPage;
