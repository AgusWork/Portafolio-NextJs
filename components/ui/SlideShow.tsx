import React, { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

interface Props {
	images: string[];
}

export const SlideShow: FC<Props> = ({ images }) => {
	return (
		<Slide easing="ease" duration={7000} indicators>
			{images.map((image) => {
				return (
					<div className={styles["each-slide"]} key={image}>
						<div
							style={{
								backgroundImage: `url(${image})`,
								backgroundSize: "100% 100%",
								backgroundRepeat: "no-repeat",
							}}
						></div>
					</div>
				);
			})}
		</Slide>
	);
};
