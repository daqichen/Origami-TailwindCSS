import { FC } from "react";
import { ResponsiveCardProp, ResponsiveCardStyle } from "./responsiveCard";

const ResponsiveCard:FC<ResponsiveCardProp> = (props) => {
  if (props.children) {
    if (props.description || props.title || props.footer) {
      throw new Error('<ResponsiveCard> Error: children prop cannot be supplied along with "description", "title" or "footer" props, either construct the component with children props, or use the pre-configured "description", "title" or "footer" props.')
    }
  }  
  return (
      props.children ? 
        <div className={`${props.containerShade && `bg-${props.containerShade}`} ${ResponsiveCardStyle.container} ${props.className}`}>
          {props.children}
        </div>
        :
        <div className={`${props.containerShade && `bg-${props.containerShade}`} ${ResponsiveCardStyle.container} ${props.className}`}>
            <div className={`${ResponsiveCardStyle.title} ${props.titleColor && `text-${props.titleColor}`}`}>
              {props.title}
            </div>
            <div className={`${ResponsiveCardStyle.description_mobile} ${props.descriptionColor && `text-${props.descriptionColor}`}`}>
              {props.description}
            </div>
            <div className={`${ResponsiveCardStyle.description} ${props.descriptionColor && `text-${props.descriptionColor}`}`}>
              {props.description}
            </div>
            <div className={`${ResponsiveCardStyle.footer} ${props.footerColor && `text-${props.footerColor}`}`}>
              {props.footer}
            </div>
          </div>
    )
}

export default ResponsiveCard;