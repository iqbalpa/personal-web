import { AwardItemProps, ExperienceItemProps, OrganizationItemProps, ProjectItemProps } from "@/constant/type";

export const AwardItems: AwardItemProps[] = [
	{
		title: "[National Level] Top 10 Data Quest Kemenkeu 2023",
		desc: "Data quest is a data analytics competition that organized by Ministry of Finance of Republic of Indonesia. My team and I proposed a solution by leveraging satellite imagery and region income to estimate the economic growth for each region in Central Java.",
	},
	{
		title: "[National Level] Top JOINTS Data Competitions UGM 2023",
		desc: "JOINTS is a data mining competition that is organized by Computer Science students of UGM. In the final Joints Data Competition, we developed a convolutional neural network to classify fire and non-fire images using Residual Network architecture.",
	},
];

export const experienceItems: ExperienceItemProps[] = [
	{
		role: "Research Intern",
		company: "Japan Advanced Institute of Science and Technology (JAIST)",
		duration: "Nov 2023 - Present",
		description: [
			"Doing research in the field of simultaneous speech translation by using offline models",
			"Aim to maintain the translation quality and reduce the latency of the translation",
		],
	},
	{
		role: "Teaching Assistant of Introduction to AI & Data Science",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Aug 2023 - Present",
		description: [
			"Responsible for creating and delivering Lab 1 materials and hands-on related to Python Pandas and Numpy.",
			"Assist students in understanding the materials and help them to finish their assignments.",
			"Assist lecturer in grading students' assignments.",
		],
	},
	{
		role: "Teaching Assistant of Programming Foundations with Python",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Jan 2023 - July 2023",
		description: [
			"Teach and assist 11 students for weekly coding practice in Lab.",
			"Responsible for creating Tugas Pemrograman 3 about Python List.",
		],
	},
	{
		role: "Teaching Assistant of Calculus 1",
		company: "Faculty of Computer Science, Universitas Indonesia",
		duration: "Aug 2022 - Jan 2023",
		description: [
			"Assisted in teaching more than 100 Calculus 1 students every two weeks with other teaching assistants.",
			"Responsible for grading students' assignments and quizzes.",
		],
	},
];

export const OrganizationItems: OrganizationItemProps[] = [
	{
		name: "RISTEK Fasilkom UI",
		role: "Lead of Data Science & Analytics SIG",
		desc: ["Assisted the new member of DSA SIG to learning data science and machine learning"],
		duration: "Feb 2024 - Present",
	},
	{
		name: "RISTEK Fasilkom UI",
		role: "Teaching Assistant of Business Intelligence at SISTECH",
		desc: [
			"Developed authentication and authorization using Gin & Gorm",
			"Created a CRUD API for announcement",
			"Implement dependency injection",
		],
		duration: "Feb 2023 - Present",
	},
	{
		name: "RISTEK Fasilkom UI",
		role: "Teaching Assistant of Business Intelligence at SISTECH",
		desc: ["Guided and mentored 20 mentees along with other TAs"],
		duration: "Jun. 2023 – Aug. 2023",
	},
];

export const projectItems: ProjectItemProps[] = [
	{
		title: "Todo App Backend",
		description: "Todo application to manage your tasks",
		techStacks: ["Go", "Gin", "Gorm", "PostgreSQL"],
		category: "Web Development",
		implementation: [
			"Created CRUD API using Golang Gin",
			"Implement Authentication and Authorization",
			"Managed to connect the backend and PostgreSQL database using Golang Gorm",
			"Implemented dependency injection",
		],
		repoLink: "https://github.com/iqbalpa/todo-backend-go",
	},
	{
		title: "Rentspace",
		description: "Rentspace is a platform to rent your space",
		techStacks: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "GCP", "Sonarcloud"],
		category: "Web Development",
		implementation: [
			"Implemented microservices architecture",
			"Developed the frontend using NextJS - Tailwind CSS for styling",
			"Developed the API gateway for microservices backend using Java Springboot",
		],
	},
	{
		title: "HalowBund",
		description: "HalowBund is a platform to provides information for mothers and children",
		techStacks: ["Django", "Javascript", "Flutter"],
		category: "Web Development",
		implementation: [
			"Created the frontend with plain HTML, CSS, Javascript for website application",
			"Created the frontend with Flutter for mobile application",
			"Built the backend system using Django and its unit test",
		],
		repoLink: "https://github.com/orgs/PBP-F09/repositories",
	},
	{
		title: "Netflix Landing Page Clone",
		description: "Netflix landing page clone using React",
		techStacks: ["React", "Tailwind CSS"],
		category: "Web Development",
		implementation: [
			"Developed a frontend clone for Netflix landing page with React JS as the frontend framework and Tailwind CSS for styling",
		],
		appLink: "https://netflix-clone-iqbalpa.vercel.app/",
	},
	{
		title: "Unsupervised Text Classification",
		description: "Unsupervised text classification using Lbl2Vec",
		techStacks: ["Python", "Lbl2Vec"],
		category: "Machine Learning",
		implementation: [
			"Reproduced a paper about unsupervised text classification",
			"Leveraged Lbl2Vec model to classify the unlabeled text to certain topics",
		],
		paperLink: "xxx",
	},
	{
		title: "Fire Image Detection",
		description: "Fire image detection using CNN",
		techStacks: ["Python", "Tensorflow", "Keras"],
		category: "Machine Learning",
		implementation: [
			"Created a deep learning model to predict fire image",
			"Replicated the ResNet architecture to extract the image features",
		],
		paperLink: "xxx",
	},
	{
		title: "Bleached Coral Detection",
		description: "Bleached coral detection using CNN",
		techStacks: ["Python", "Tensorflow", "Keras"],
		category: "Machine Learning",
		implementation: [
			"Developed a deep learning model to detech bleached coral by using CNN",
			"Used Grad-CAM to enhance the model reliability",
		],
		paperLink: "xxx",
	},
	{
		title: "Kaggle Competition: Spaceship Titanic",
		description: "Predict the survival of passengers on the Titanic",
		techStacks: ["Python", "Scikit-learn", "XGBoost", "Catboost"],
		category: "Machine Learning",
		implementation: [
			"Performed exploratory data analysis to understand the data distribution and correlation between features",
			"Preprocessed the data by transforming dirty data, encoding, and scaling the data",
			"Utilized Scikit-learn, XGBoost, and Catboost to develop models and evaluate the its performance",
		],
		repoLink: "https://github.com/iqbalpa/kaggle-things/blob/main/spaceship-titanic/spaceship-titanic.ipynb",
	},
	{
		title: "EDA: The Ultimate Film Statistics Dataset - for ML",
		description: "Exploratory Data Analysis on The Ultimate Film Statistics Dataset",
		techStacks: ["Python", "Pandas", "Matplotlib", "Seaborn"],
		category: "Data Analysis",
		implementation: [
			"Preprocessed the data by transforming dirty data, splitting column, and reformat the data",
			"Performed exploratory data analysis to understand the data distribution and correlation between features",
			"Visualized the data using Matplotlib and Seaborn to gain valuable insights",
		],
		repoLink: "https://github.com/iqbalpa/kaggle-things/blob/main/movies-dataset/movie-dataset.ipynb",
	},
	{
		title: "Kaggle: Image Scene Classification",
		description: "Image scene classification using CNN",
		techStacks: ["Python", "Pytorch"],
		category: "Machine Learning",
		implementation: [
			"Developed a plain CNN model to classify the image scene",
			"Replicated the ResNet architecture to extract the image features and use it as the model backbone",
			"Utilized pre-trained ResNet50 model to improve the model performance",
		],
		repoLink: "https://github.com/iqbalpa/kaggle-things/tree/main/intel-image-classification",
	},
	{
		title: "Kaggle: Emotion Detection from Text",
		description: "Emotion detection from text using Tf-idf and Catboost",
		techStacks: ["Python", "Catboost"],
		category: "Machine Learning",
		implementation: [
			"Preprocessed the data by transforming dirty data",
			"Utilized tf-idf and BERT to extract the text features as a vector representation",
			"Utilized Catboost to develop models and evaluate the its performance",
		],
		repoLink: "https://github.com/iqbalpa/kaggle-things/tree/main/emotion-detection-from-text",
	},
];
