import "../app/globals.css";

export default function Albion() {
  return (
    <div>
      <div className="header-image-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="down-icon"
        >
          <path
            fill="#ffffff"
            d="M12 15.59l-4.3-4.3a1 1 0 0 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 1 0-1.4-1.42L12 15.59z"
          />
        </svg>
      </div>
      <div className="header-content-container">
        <h1 className="h1">318 Albion Lake</h1>
        <p className="body-text">Welcome to luxury lakeside living.</p>
      </div>
      <iframe
        className="maps-iframe"
        src="https://www.google.com/maps/d/u/0/embed?mid=1UiNObyoAOutUUMWTAy-FCRY4xHaaovg&ehbc=2E312F"
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
}
