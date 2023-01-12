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
				language: "Next Js",
				image: "/iconos/NextJs.png",
			},
			{
				language: "React",
				image: "/iconos/React.png",
			},
			{
				language: "JavaScript",
				image: "/iconos/Javascript.png",
			},
			{
				language: "MongoDB",
				image: "/iconos/MongoDB.png",
			},
			{
				language: "Scss",
				image: "/iconos/Sass.png",
			},
			{
				language: "PHP",
				image: "/iconos/Php.png",
			},
			{
				language: "Laravel",
				image: "/iconos/Laravel.png",
			},
			{
				language: "MySQL",
				image: "/iconos/MySQL.png",
			},

			{
				language: "Docker",
				image: "/iconos/Docker.png",
			},
			{
				language: "Figma",
				image: "/iconos/Figma.png",
			},
			{
				language: "Notion",
				image: "/iconos/Notion.png",
			},
			{
				language: "Git",
				image: "/iconos/Git.png",
			},
			{
				language: "Tailwind",
				image: "/iconos/Tailwind.png",
			},
			{
				language: "Discord",
				image: "/iconos/Discord.png",
			},
		],
	});
}
