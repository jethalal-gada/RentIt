import './itemDetail.css';
import Subnavbar from '../../components/subnavbar/subnavbar';
import itemImg from '../../images/itemImg.svg';

const ItemDetail = () => {
  return (
    <>
      <Subnavbar />
      <div className="detailPage">
        <div className="itemImg">
          <img src={itemImg} alt="" />
        </div>

        <div className="itemInfoHolder">
          <div className="cardItem" id="itemInfo">
            <div className="nameNprice">
              <p>Rs. 30/hr</p>
              <p>Iron 1000 W</p>
            </div>
            <div className="description">
              <p>
                Description of my product will be written in this area. This
                will be the maximum space that can be taken by a card. This iron
                is 1000W and it is brand new handle with care contact for buying
                this my contact is given below and this is more than enough of
                description.
              </p>
            </div>
          </div>
          <div className="cardItem" id="ownerInfo">
            <p>Owner : Akash Singh</p>
            <p>LPU ID : 12236369</p>
            <p>Contact : 9010508930</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
