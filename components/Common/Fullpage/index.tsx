import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({ fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
          </button>
        </div>
        <div className="section">
          <p>Section 2</p>
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Fullpage;
