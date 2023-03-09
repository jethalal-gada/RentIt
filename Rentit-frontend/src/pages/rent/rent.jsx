import Subnavbar from '../../components/subnavbar/subnavbar';
import './rent.css';
import { TbCameraPlus } from 'react-icons/tb';
const Rent = () => {
  return (
    <>
      <Subnavbar />
      <div className='rentHeading or heading'>What do you want to rent ?</div>
      <form action=''>
        <div className='rentForm'>
          <div className='detail1'>
            <div className='or titles'>Product detials</div>
            <div className='detailA'>
              Title*
              <div className='rentTitle wrapBox'>
                <input type='text' className='rentBox' />
              </div>
            </div>
            <div className='detailA'>
              Description*
              <div className='rentDes wrapBox'>
                <textarea type='text' className='rentBox des' />
              </div>
            </div>
            <label className='detailA upload'>
              <TbCameraPlus in className='camera' size={28} />
              <input id='input' type='file' accept='image/*'></input>
            </label>
          </div>
          <div className='line' id='lineRent'></div>
          <div className='detail2'>
            <div className='or titles'>Add your details</div>
            <div className='detailB'>
              Name*
              <div className='rentName wrapBox'>
                <input type='text' className='rentBox' />
              </div>
            </div>
            <div className='detailB'>
              LPU ID*
              <div className='rentID wrapBox'>
                <input type='text' className='rentBox' />
              </div>
            </div>
            <div className='detailB'>
              Contact*
              <div className='rentMob wrapBox'>
                <input type='text' className='rentBox' />
              </div>
            </div>
          </div>
          <div className='line' id='lineRent'></div>
          <div className='detail3'>
            <div className=' or titles'>Renting Charges</div>
            <div className='rentCharge  chargeBox wrapBox'>
              <input type='text' placeholder='Rs.' className='rentBox' />
            </div>
            <div className=' chargeBox'></div>
          </div>
        </div>
      </form>
      <div id='post'>
        <button className='post btn'>Post</button>
      </div>
    </>
  );
};
export default Rent;
