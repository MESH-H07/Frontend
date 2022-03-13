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
import organizations from '../db/mocks/organizations.json'
import awoLogo from '../assets/AWO-logo.jpg'
import arrow from '../assets/toppng.com-right-arrow-icon-221x361.png'

const PoiPage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={"yellowBar"}>
                <IonTitle color={"secondary"}>Familiar</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonLabel class="ion-margin-top headerFont">Information</IonLabel>
            <IonToolbar>
                <IonSearchbar class={'searchBarStyle'} autocorrect={'on'} autocomplete={'on'} spellcheck={true}
                              animated={true}/>
            </IonToolbar>
            {organizations.locations.map(organization => (
                <IonItem key={organization.id} onClick={() => console.log(organization.OrganisationExtension.name)}
                         button>
                    <IonThumbnail slot={'start'}>
                        <img src={awoLogo} alt={'AWO Icon'}/>
                    </IonThumbnail>
                    <IonThumbnail slot={'end'}>
                        <img src={arrow} alt={'Arrow Icon'}/>
                    </IonThumbnail>
                    <IonLabel>
                        <h2>{organization.OrganisationExtension.name}</h2>
                        <p>{organization.street} {organization.number}</p>
                        <p>{organization.zip} {organization.city}</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonContent>
    </IonPage>
);

export default PoiPage;
