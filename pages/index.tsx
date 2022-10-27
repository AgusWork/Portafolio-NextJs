import { NextPage} from "next";
import { Layout } from "../components/layouts";
import { Works, About, Skills, SoftSkills } from "../components/general";

const HomePage: NextPage = () => {
	return (
		<Layout title="Portafolio" >
			<Works />
			<About />
			<Skills />
			<SoftSkills/>
		</Layout>
	);
};

export default HomePage;
