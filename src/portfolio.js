import emoji from "react-easy-emoji";

import kiwiLogo from "./assets/img/icons/common/kiwi.png";
import beewebLogo from "./assets/img/icons/common/bee-web.png";
import inommaLogo from "./assets/img/icons/common/inomma.png";

export const greetings = {
	name: "Arshavir Gharibyan",
	title: "Hi all, I'm Arshavir",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer having an experience of building Web applications with JavaScript / Reactjs / Vue / Nodejs / Laravel / PHP and some other cool libraries and frameworks and Cross Platform Mobile Apps With Ionic.",
	resumeLink: "https://drive.google.com/file/d/1BU9BG1s-HxyLMbD7QNBG3JkLnxrf7l5H/view",
};

export const openSource = {
	githubUserName: "arshavir777",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/arshavir777/",
	instagram: "https://www.instagram.com/777argh777",
	twitter: "https://twitter.com/Arshavir777",
	github: "https://github.com/arshavir777",
	linkedin: "https://www.linkedin.com/in/arshavir-gharibyan-03a45617a/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Blockchain",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Yerevan State University",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2014 - April 2019",
		desc: "The Faculty of Informatics and Applied Mathematics",

		descBullets: ["The Faculty of Informatics and Applied Mathematics (IAM) of Yerevan State University is a leading educational and scientific centre preparing scientists for engaging in fundamental research in Informatics and Applied Mathematics as well as highly-qualified programmers."]
	}
];

export const experience = [
	{
		role: "Full Stack Developer",
		company: "Kiwi Science",
		companylogo: kiwiLogo,
		date: "May 2019 – October 2021",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Full Stack Developer",
		company: "BeeWeb Systems",
		companylogo: beewebLogo,
		date: "September 2019 – January 2020",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Backend Developer",
		company: "Inomma",
		companylogo: inommaLogo,
		date: "September 2021 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
