import React from "react";
import Image from "next/image";
import {Row, Text, Spacer } from "@nextui-org/react";
import styles from "./styles.module.scss";

export const Hero = () => {
	return (
		<Row
			justify="center"
			css={{
				display:"flex",
				flexDirection: "column",
				alignItems:"center",
				background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/lagoCanada.jpg) `,
				height: "100vh",
				width: "100vw",
				backgroundSize: "100% 100%",
				padding: "none",
				margin: "0",
			}}
		>
			<div className={styles.FotoPerfil} >
				<Image
					src="/Yo-Curriculum.jpg"
					objectFit="cover"
					width="300px"
					height= "300px"
					alt="Foto Curriculum Agustin Maria Cordoba"
				/>
			</div>
			<Row data-aos="fade-in" align="center" justify="center">
				<Text h1 size={70} css={{ textShadow: "1px 1px 2px black" }} className={styles.TextName} >
					Agustin Maria Cordoba
				</Text>
			</Row>
			<Spacer y={2} />

			<Row data-aos="fade-in" align="center" justify="center">
				<Text
					h3
					size={40}
					css={{ textShadow: "1px 1px 2px black" }}
					transform="uppercase"
					className={styles.TextProf} 
				>
					Front End Developer, Tecnico Mecanico
				</Text>
			</Row>
		</Row>
	);
};
