const MainSection = () => {
  function handleLinkContactClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const element = document.getElementById('offers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className='main__wrapper'>
      <div className='main__content'>
        <div className='main__text'>
          <h1>
            Discover the vast expanses of <span>space</span>
          </h1>
          <p>
            Where the possibilities are <span>endless!</span>
          </p>
          <a
            href='#offers'
            onClick={(event) => {
              handleLinkContactClick(event);
            }}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
