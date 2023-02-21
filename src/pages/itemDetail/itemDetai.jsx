import './itemDetail.css';
import Subnavbar from '../../components/subnavbar/subnavbar';
import itemImg from '../../images/itemImg.svg';

const ItemDetail = () => {
  return (
    <>
      <Subnavbar />
      <div className="items">
        <div className="imgItemDetail itemDetailBox">
          <img className="imgItemTag" src={itemImg} alt="" />
        </div>
        <div className="infoItem itemDetailBox">
          <div className="info1">
            <div className="txtA">
              <p className="infoA br">Owner: </p>
              <p className="infoA or" id="name">
                Akash Singh
              </p>
            </div>
            <div className="txtA">
              <p className="infoA br">Contact: </p>
              <p className="infoA or" id="contact">
                9010508930
              </p>
            </div>
            <div className="txtA">
              <p className="infoA br">Lpu id: </p>
              <p className="infoA or" id="lpuId">
                12236369
              </p>
            </div>
          </div>
          <div className="info2">
            <p className="infoB or">Iron 1000 W </p>
            <p className="infoB or">Rs. 30/hr</p>
          </div>
          <div className="info3">
            <p className="infoC   ">
              Description of my product will be written in this area. This will
              be the maximum space that can be taken by a card. This iron is
              1000W and it is brand new handle with care contact for buying this
              my contact is given below and this is more than enough of
              description.
            </p>
          </div>
        </div>
      </div>
      <div id="save">
        <button className="save">Save</button>
      </div>
    </>
  );
};

export default ItemDetail;
