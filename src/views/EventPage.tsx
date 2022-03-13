import React from "react";
import {
    IonContent,
    IonHeader, IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Form.css";
import inYourCity from "../db/mocks/inYourCity.json"
import hostedByMentors from "../db/mocks/hostedByMentors.json"
import nearbyEvents from "../db/mocks/nearbyEvents.json"
import city from '../assets/92.jpg'

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
                        <IonLabel class='showAllLabel'>Show all &gt;</IonLabel>
                    </IonListHeader>
                    {nearbyEvents.events.map((occasion: any) => (
                        <IonItem key={occasion.name} onClick={() => console.log(occasion.name)}
                                 button>
                            <IonThumbnail slot="start">
                                <img src={city} alt={'image of new york'}/>
                            </IonThumbnail>
                            <IonLabel>
                                <h2>{occasion.name}</h2>
                                <p>{occasion.location.id}</p>
                                <p>23</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Hosted by Mentors</IonLabel>
                        <IonLabel class='showAllLabel'>Show all &gt;</IonLabel>
                    </IonListHeader>
                    {hostedByMentors.events.map((occasion: any) => (
                        <IonItem key={occasion.name} onClick={() => console.log(occasion.name)}
                                 button>
                            <IonThumbnail slot="start">
                                <img src={city} alt={'image of new york'}/>
                            </IonThumbnail>
                            <IonLabel>
                                <h2>{occasion.name}</h2>
                                <p>{occasion.location.id}</p>
                                <p>23</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonLabel>In your City</IonLabel>
                        <IonLabel class='showAllLabel'>Show all &gt;</IonLabel>
                    </IonListHeader>
                    {inYourCity.events.map((occasion: any) => (
                        <IonItem key={occasion.name} onClick={() => console.log(occasion.name)}
                                 button>
                            <IonThumbnail slot="start">
                                <img src={city} alt={'image of new york'}/>
                            </IonThumbnail>
                            <IonLabel>
                                <h2>{occasion.name}</h2>
                                <p>{occasion.location.id}</p>
                                <p>23</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
;

export default EventPage;
