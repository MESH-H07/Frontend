import "./Card.css";
import {
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonItemGroup,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonList,
} from "@ionic/react";
import Tag from "../Tag/Tag";

interface ICard {
  imgSrc: string;
  name: string;
  description: string;
  skills: string[];
}

const Card: React.FC<ICard> = (props) => {
  return (
    <IonCard color="warning">
      <IonCardHeader>
        <IonItemGroup color="warning">
          <IonItem color="warning">
            <IonImg src={props.imgSrc} />
          </IonItem>
          <IonItem color="warning">
            <IonCardTitle color="dark">{props.name}</IonCardTitle>
            <IonCardSubtitle color="warning">
              {props.description}
            </IonCardSubtitle>
          </IonItem>
        </IonItemGroup>
      </IonCardHeader>

      <IonCardContent color="warning">
        {props.skills.map((skill) => (
          <Tag key={skill} content={skill} />
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
