import "./Tag.css";
import { IonLabel, IonItem } from "@ionic/react";

interface ITag {
  content: string;
}

const Tag: React.FC<ITag> = (props) => {
  return (
    <IonItem>
      <div className="container">
        <IonLabel color={"dark"}>{props.content}</IonLabel>
      </div>
    </IonItem>
  );
};

export default Tag;
