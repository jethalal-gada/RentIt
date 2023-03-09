import './itemDetail.css';
import Subnavbar from '../../components/subnavbar/subnavbar';
// import itemImg from '../../images/itemImg.svg';
import { useLocation } from 'react-router-dom';

const ItemDetail = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <Subnavbar />
      <div className="items">
        <div className="imgItemDetail itemDetailBox">
          <img className="imgItemTag" src={data.image} alt="" />
        </div>
        <div className="infoItem itemDetailBox">
          <div className="info1">
            <p className="infoA br">{data.product}</p>
            <p className="infoA br">
              ₹{data.price} per {data.unit}
            </p>
          </div>
          <div className="info2">
            <div className="txtA">
              <p className="infoB br">Owner: </p>
              <p className="infoB or" id="name">
                {data.owner}
              </p>
            </div>
            <div className="txtA">
              <p className="infoB br">Contact: </p>
              <p className="infoB or" id="contact">
                {data.contact}
              </p>
            </div>
            <div className="txtA">
              <p className="infoB br">Lpu id: </p>
              <p className="infoB or" id="lpuId">
                {data.lpuid}
              </p>
            </div>
          </div>

          <div className="info3">
            <p className="infoC   ">{data.description}</p>
          </div>
        </div>
      </div>
      <div id="save">
        <button className="save btn">Save</button>
      </div>
    </>
  );
};

export default ItemDetail;
