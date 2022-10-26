import { useTheme, Navbar, Row } from "@nextui-org/react";

const links = ["Proyectos", "Sobre Mi", "Skills", "Contacto"];

export const NavBar = () => {
	const { theme } = useTheme();

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
				<Navbar.Content hideIn={"xs"}>
					{links.map((link, idx) => (
						<Navbar.Link key={idx} href="#" css={{marginLeft:"30px"}}>{link}</Navbar.Link>
					))}
				</Navbar.Content>
			</Row>
		</Navbar>
	);
};
