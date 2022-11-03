import React, { useRef, useState } from "react";
import { useTheme, Navbar, Row } from "@nextui-org/react";
import styles from "./UiStyles.module.scss";
const links = ["Proyectos", "Sobre Mi", "Skills", "Soft Skills", "Contacto"];
import Scrollspy from "react-scrollspy";

export const NavBar = () => {
	const { theme } = useTheme();

	const handleClick = (link: string) => {
		const element = document.getElementById(link);
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Navbar
			css={{
				backgroundImage:
					"linear-gradient(90deg, rgba(57, 63, 215, 0.25) 10%, rgba(68, 110, 218, 0.25) 90%)",
			}}
			variant="sticky"
			isCompact
		>
			<Row justify="center" align="center">
				<Navbar.Content>
					{links.map((link, idx) => (
						<Scrollspy items={[link]} currentClassName={styles.active} key={idx}>
							<Navbar.Link
								key={idx}
								onClick={() => handleClick(link)}
								className={styles.navbarLink}
							>
								{link}
							</Navbar.Link>
						</Scrollspy>
					))}
				</Navbar.Content>
			</Row>
		</Navbar>
	);
};
