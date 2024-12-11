import Filter from "../../components/filter/Filter";
import { listData } from "../../data/data";
import "./listPage.scss";

function ListPage() {
   const data = listData


  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
         <Filter />
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
}

export default ListPage;
