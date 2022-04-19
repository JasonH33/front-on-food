import { DisheType } from "components/types";
import Image from "next/image";
import { DisheDetails } from "..";
import Styles from "./dishe.module.css";

export function Dishe(props: DisheType) {
  return (
    <div className={Styles.dishe}>
      <div className={Styles.wrapper}>
        <Image
          src={props.picture}
          alt={props.name}
          width={592}
          height={312}
          layout="responsive"
        />
      </div>
      <div>
        <div className={Styles.header}>
          <h2>(props.name)</h2>
        </div>
        <div className={Styles.details}>
          <DisheDetails type="reviews" title={props.reviews} subtitle={props.rate} />
          <DisheDetails type="category" title={props.category} />
          <DisheDetails type="delivery" title={props.deliveryEstimated} />
        </div>
      </div>
    </div>
  );
}
