import React, { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui";
import { Hero } from "../general";
import styles from "./styles.module.scss";

interface Props {
	title?: string;
	children: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title || "Portafolio"}</title>
				<meta name="author" content="Agustin Maria Cordoba" />
				<meta name="description" content={`Portafolio de Agustin Cordoba`} />
				<meta
					name="keywords"
					content={`Portafolio, Desarrollador Front End, Front End Developer, Developer, Front End, Programador`}
				/>

				<meta
					property="og:title"
					content={`Información sobre Agustin Maria Cordoba Front End Developer`}
				/>
				<meta
					property="og:description"
					content={`Esta es la página sobre Agustin Maria Cordoba Front End Developer`}
				/>
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<NavBar />
			<Hero />

			<main className={styles.main}>
				{children}
			</main>
		</>
	);
};
