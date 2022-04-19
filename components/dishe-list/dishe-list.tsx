import Styles from "./dishe-list.module.css";
import { Dishe } from "@/components";
import { api } from "components/services";
import { useQuery } from "react-query";
import { DisheType } from "components/types";
import { DisheSkeleton } from "@/components";
import { DisheListProps } from "./types";

export function DisheList(props: DisheListProps) {
  const fetchDishes = async () => {
    const response = await api.get<DisheType[]>(`/deliveries?city=${props.citySlug}`)
    return response.data
  }

  const { data, isFetching} = useQuery<DisheType[]>("dishes", fetchDishes)
  return (
    <div className={Styles.list}>
      {isFetching ? (
        <DisheSkeleton/>
      ) : (
        data?.map((dishe, index) => <Dishe key={dishe.id} {... dishe}/>)
      )}
    </div>
  );
}
