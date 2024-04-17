import { useState } from "react";
import { RatingProps } from ".";
import { EmptyStar, FullStar, HalfStar } from "./TypeOfStar";
import React from "react";


export const  Stars: React.FC<RatingProps> = ({className,
    count,
    value,
    color = "#ffd700",
    hoverColor = "#ffc107",
    activeColor = "#ffc107",
    size = 20,
    edit = false,
    isHalf = true,
    onChange,
    emptyIcon = <EmptyStar />,
    halfIcon = <HalfStar />,
    fullIcon = <FullStar />}) => {
   
        const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

const handleMouseMove = (index: number) => {
  if (!edit) {
    return;
  }
  setHoverValue(index);
};

const handleMouseLeave = () => {
  if (!edit) {
    return;
  }
  setHoverValue(undefined);
};

const handleClick = (index: number) => {
  if (!edit) {
    return;
  }
  if (onChange) {
    onChange(index + 1);
  }
};
const stars = [];

for (let i = 0; i < count; i++) {
  let star: React.ReactElement;
  if (isHalf && value - i > 0 && value - i < 1) {
    star = halfIcon;
  } else if (i < value) {
    star = fullIcon;
  } else {
    star = emptyIcon;
  }

  if (hoverValue !== undefined) {
    if (i <= hoverValue) {
      star = fullIcon;
    }
  }

  stars.push(
    <div
      key={i}
      style={{ cursor: "pointer" }}
      onMouseMove={() => handleMouseMove(i)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(i)}
      className="flex"
    >
      {React.cloneElement(star, {
        size: size,
        color: i <= Number(hoverValue) ? hoverColor : i < value ? activeColor : color,
      })}
    </div>
  );
}
  
    return (
        <>
           
        <div className={`rating ${className} flex items-center space-x-1 rtl:space-x-reverse`}>{stars}</div>
        
        </>
    )
};


