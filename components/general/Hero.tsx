import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Row, Text, Spacer } from "@nextui-org/react";

export const Hero = () => {
	return (
		<Row
			justify="center"
			css={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
				padding: "none",
				margin: "0",
			}}
		>
			<div
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)) `,
					backgroundImage: `url("./lagoCanada.jpg")` ,
					backgroundSize:"100% 100%",
					backgroundRepeat : "no-repeat",
					zIndex: "0",
					width:"100%",
					height:"100%",
					display:"flex",
					flexDirection:"column",
					justifyContent:"center",
					alignItems:"center"
				}}
			>
			<div className={styles.FotoPerfil}>
				<Image
					src={"/Yo-Curriculum.jpg"}
					style={{objectFit:"cover"}}
					width="300"
					height="300"
					alt="Foto Curriculum Agustin Maria Cordoba"
					priority
				/>
			</div>
			<Row data-aos="fade-in" align="center" justify="center">
				<Text
					h1
					size={70}
					color="white"
					css={{ textShadow: "1px 1px 2px black" }}
					className={styles.TextName}
				>
					Agustin Maria Cordoba
				</Text>
			</Row>
			<Spacer y={2} />

			<Row data-aos="fade-in" align="center" justify="center">
				<Text
					h2
					size={40}
					css={{ textShadow: "1px 1px 2px black" }}
					transform="uppercase"
					className={styles.TextProf}
					color="white"
				>
					Front End Devloper
				</Text>
			</Row>
			</div>
		</Row>
	);
};
