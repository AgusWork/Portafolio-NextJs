import { NextPage} from "next";
import { Layout } from "../components/layouts";
import { Works, About, Skills, SoftSkills, Contact, Projects } from "../components/general";

const HomePage: NextPage = () => {
	return (
		<Layout title="Portafolio" >
			<Works />
			<Projects />
			<About />
			<Skills />
			<SoftSkills/>
			<Contact/>
		</Layout>
	);
};

export default HomePage;
