interface MapCopyProps {
  title?: string;
  titleStyle?: string;
  blurb?: string;
  blurbStyle?: string;
  containerStyle?: string;
}

const MapCopy: React.FC<MapCopyProps> = ({
  title = "Local Recommendations",
  titleStyle,
  blurb,
  blurbStyle,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <p className={blurbStyle}>{blurb}</p>
    </div>
  );
};

export default MapCopy;
