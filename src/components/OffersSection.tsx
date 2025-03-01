import Offer from './Offer';

const OffersSection = () => {
  return (
    <section className='offers__section' id='offers'>
      <h2>Offers</h2>
      <div className="offers__wrapper">
        <Offer
          background='offer1'
          isBig
          text="Go on a space adventure - it's possible with us!"
          title='Move the borders of reality!'
        />
        <Offer
          background='offer2'
          isBig={false}
          text='Go on a space adventure '
          title='Space is not just stars and planets'
        />
        <Offer
          background='offer3'
          isBig={false}
          text='Our offer: make your dream come true '
          title='For those who dream of stars '
        />
        <Offer
          background='offer4'
          isBig={true}
          text='Space has never been so close'
          title='Fulfill your fantastic dreams'
        />
      </div>
    </section>
  );
};

export default OffersSection;
