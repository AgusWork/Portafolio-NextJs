import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	//   //Find the absolute path of the json directory
	//   const jsonDirectory = path.join(process.cwd(), 'json');
	//   //Read the json data file data.json
	//   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
	//   //Return the content of the data file in json format
	res.status(200).json({
		records: [
			{
				image: "/qualimed/FotoQualimed0.PNG",
				category: "Freelance",
				client: "Qualimed",
				date: "04 Mayo, 2022",
				link: "https://qualimed.com.ar/",
				duration: "5 semanas",
				language: [
					"./iconos/Git.png",
					"./iconos/Discord.png",
					"./iconos/NextJs.png",
					"./iconos/Figma.png",
					"./iconos/Notion.png",
					"./iconos/React.png",
					"./iconos/Sass.png",
				],
			},
			{
				image: "/bukma/BukmaHead.png",
				category: "Freelance",
				client: "Bukma",
				date: "02 Marzo, 2022",
				link: "https://bukmasrl.com.ar/",
				duration: "3 semanas",
				language: [
					"./iconos/Git.png",
					"./iconos/Discord.png",
					"./iconos/NextJs.png",
					"./iconos/Figma.png",
					"./iconos/Notion.png",
					"./iconos/React.png",
					"./iconos/Sass.png",
				],
			},
			{
				image: "/e-commerce/Mi pagina.PNG",
				category: "Freelance",
				client: "Practica",
				date: "12 Julio, 2021",
				link: "https://cordobaskatepage.000webhostapp.com/index.html",
				duration: "5 semanas",
				language: [
					"./iconos/Git.png",
					"./iconos/Javascript.png",
					"./iconos/Sass.png",
				],
			},
			{
				image: "/phpLogin/Login2.PNG",
				category: "Freelance",
				client: "Syntesis",
				date: "20 Noviembre, 2021",
				link: "https://sintesys.com.ar/Login/",
				duration: "4 semanas",
				language: [
					"./iconos/Figma.png",
					"./iconos/Notion.png",
					"./iconos/Php.png",
					"./iconos/Tailwind.png",
				],
			},
		],
	});
}
