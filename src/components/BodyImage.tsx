import React from "react";

interface BodyImageProps {
  imgSrc: string;
  imgStyle?: string;
  altText?: string;
}

const BodyImage: React.FC<BodyImageProps> = ({ imgSrc, imgStyle, altText }) => {
  return <img className={imgStyle} src={imgSrc} alt={altText} />;
};

export default BodyImage;
