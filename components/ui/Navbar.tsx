import React, { useState, useEffect } from "react";
import { useTheme, Navbar, Row, Link } from "@nextui-org/react";
import styles from "./UiStyles.module.scss";
import Scrollspy from "react-scrollspy";
import Language from "./Lenguaje";
import { useRouter } from "next/router";

const linksEs = [
	"Exp. Laboral",
	"Exp. Profesional",
	"Sobre Mi",
	"Habilidades",
	"Habilidades blandas",
	"Contacto",
];

const linksEn = [
	"Work Experience",
	"Professional Experience",
	"About Me",
	"Skills",
	"Soft Skills",
	"Contact",
];

export const NavBar = () => {
	const { theme } = useTheme();
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState<number | undefined>(undefined);
	const { locale } = useRouter();
	const displayLinks = locale === "en" ? linksEn : linksEs;

	const handleClick = (link: string) => {
		const element = document.getElementById(link);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		document.body.style.overflow = "";
		isSideMenuOpen && (document.body.style.overflow = "hidden");
	}, [isSideMenuOpen]);

	const HandleSideMenu = (flag = false, index?: number) => {
		setActiveMenu(index);
		flag && setIsSideMenuOpen(!isSideMenuOpen);
		isSideMenuOpen && setIsSideMenuOpen(false);
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
			<Row justify="center" align="center" css={{ width: "100%" }}>
				<Navbar.Content hideIn="xs">
					{displayLinks.map((link, idx) => (
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

			<Navbar.Collapse
				isOpen={isSideMenuOpen}
				css={{
					position: "absolute",
					left: "0px",
					margin: "0",
					padding: "0px",
					marginLeft: "-42px",
					top: "26px",
					width: "100vw",
				}}
			>
				<div style={{ marginTop: "-17px", marginLeft: "-12px" }}>
					{displayLinks.map((link, idx) => (
						<Navbar.CollapseItem
							key={idx}
							disableAnimation={true}
							className={styles.navbarHoverLink}
						>
							<Link
								key={idx}
								onClick={() => {
									handleClick(link);
									HandleSideMenu(false, idx);
								}}
								className={styles.navbarLink}
							>
								{link}
							</Link>
						</Navbar.CollapseItem>
					))}
				</div>
			</Navbar.Collapse>

			<div
				style={{
					position: "absolute",
					top: "0",
					right: "20px",
					zIndex: 1000,
				}}
			>
				<Language defaultLanguage={"es"} languages={["es", "en"]} />
			</div>
		</Navbar>
	);
};
