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
			<Image
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)) `,
					zIndex: "0",
				}}
				src={"/lagoCanada.jpg"}
				alt="Hero background"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				priority
			/>
			<div className={styles.FotoPerfil}>
				<Image
					src={"/Yo-Curriculum.jpg"}
					objectFit="cover"
					width="300px"
					height="300px"
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
					h3
					size={40}
					css={{ textShadow: "1px 1px 2px black" }}
					transform="uppercase"
					className={styles.TextProf}
					color="white"
				>
					Desarrollador Front End, Tecnico Mecanico
				</Text>
			</Row>
		</Row>
	);
};
