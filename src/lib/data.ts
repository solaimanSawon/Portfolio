import { PersonalInfo, EducationItem, SkillCategory, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Solaiman Molla",
  title: "CSE Student | ML Enthusiast",
  tagline: "Passionate Problem Solver, Machine Learning Explorer & Competitive Programmer",
  phone: "+880 1955 2058342",
  email: "solaimanmolla777@gmail.com",
  altEmail: "molla22205101933@diu.edu.bd",
  address: "Mirpur 1, Dhaka, Bangladesh",
  city: "Dhaka",
  country: "Bangladesh",
  linkedin: "https://www.linkedin.com/in/solaiman-molla-5bb587336/",
  github: "https://github.com/solaimanSawon",
  codeforces: "https://codeforces.com/profile/sawon_777",
  codeforcesHandle: "sawon_777",
  bio: "Energetic 4th-year Computer Science and Engineering student at Daffodil International University. Passionate about problem-solving through Competitive Programming with C++. Possesses practical knowledge in Machine Learning, Deep Learning (CNN, NLP), and Cyber Security (specifically Burp Suite and Ghidra). Seeking an entry-level position or internship to utilize technical skills and contribute to organizational goals.",
  university: "Daffodil International University",
  academicYear: "4th Year (Ongoing)",
  status: "Open for Entry-Level Roles & Internships",
  languages: [
    { language: "Bangla", proficiency: "Native", native: true, level: 100 },
    { language: "English", proficiency: "Professional Working Proficiency", level: 85 }
  ]
};

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2022 – Present (4th Year Ongoing)",
    description: "Focusing on Software Engineering, Data Structures & Algorithms, Machine Learning, Deep Learning, and Computer Security.",
    current: true
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Mirzapur Govt. College",
    year: "2021",
    grade: "GPA: 5.00 / 5.00",
    description: "Completed Higher Secondary Education in Science stream with Perfect Grade Point Average.",
    current: false
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Police Lines Ideal High School",
    year: "2019",
    grade: "GPA: 4.56 / 5.00",
    description: "Secondary level education with a strong foundation in Mathematics, Physics, Chemistry, and Information Technology.",
    current: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for problem solving and software engineering",
    iconName: "Code2",
    skills: [
      { name: "C++", level: 90, description: "Primary language for Competitive Programming & Algorithms" },
      { name: "Python", level: 85, description: "Primary language for ML, Deep Learning & Data Analysis" },
      { name: "JavaScript", level: 65, description: "Basic web scripting & frontend dynamics" },
      { name: "HTML & CSS", level: 80, description: "Responsive layouts, styling, & semantic markup" }
    ]
  },
  {
    id: "ml-dl",
    title: "Machine Learning & Deep Learning",
    description: "Frameworks & architectures for intelligent pattern recognition",
    iconName: "BrainCircuit",
    skills: [
      { name: "TensorFlow", level: 80, description: "Deep learning model construction & execution" },
      { name: "PyTorch", level: 75, description: "Neural network design & training" },
      { name: "Scikit-learn", level: 85, description: "Classical machine learning classifiers & preprocessing" },
      { name: "CNN (Convolutional Neural Nets)", level: 82, description: "Computer vision & image classification models" },
      { name: "NLP (Natural Language Processing)", level: 78, description: "Text processing, TF-IDF, TF models" }
    ]
  },
  {
    id: "cyber-sec",
    title: "Cyber Security",
    description: "Penetration testing & reverse engineering tools",
    iconName: "ShieldAlert",
    skills: [
      { name: "Burp Suite", level: 70, description: "Web security testing, HTTP request interception & analysis" },
      { name: "Ghidra", level: 65, description: "Reverse engineering & binary analysis tool" },
      { name: "Web Security Basics", level: 72, description: "Understanding OWASP Top 10 vulnerabilities" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Platforms",
    description: "Essential environments & version control systems",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88, description: "Version control, commit workflows, repository maintenance" },
      { name: "Linux", level: 80, description: "Terminal CLI navigation, bash commands, environment setup" },
      { name: "VS Code", level: 90, description: "Primary IDE for daily development" },
      { name: "Codeforces Platform", level: 85, description: "Online contest environment & problem archive" }
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "fake-news-detection",
    title: "Fake News Detection",
    category: "Machine Learning",
    tagline: "NLP-powered Machine Learning model for classifying real vs fake news content",
    description: "Developed a Machine Learning model to analyze textual news content and accurately classify articles as authentic or fabricated using Natural Language Processing.",
    longDescription: "This project addresses the growing problem of misinformation on digital platforms. Using Python, Scikit-learn, and NLP preprocessing pipelines, the system cleans raw text (stopword removal, stemming, tokenization), converts text into numerical vector spaces using TF-IDF Vectorizer, and trains classification algorithms like PassiveAggressiveClassifier and Logistic Regression to achieve high detection accuracy.",
    techStack: ["Python", "Scikit-learn", "NLP", "TF-IDF Vectorizer", "Pandas", "NumPy"],
    features: [
      "Natural Language Processing pipeline for raw news body text cleaning",
      "Feature extraction using TF-IDF (Term Frequency-Inverse Document Frequency)",
      "High accuracy classification using PassiveAggressive & Logistic Regression models",
      "Model evaluation with Confusion Matrix, Precision, Recall, and F1-Score metrics",
      "Interactive CLI / script test harness to evaluate user-submitted headline/article text"
    ],
    githubUrl: "https://github.com/solaimanSawon/fake-news-detection",
    featured: true,
    metrics: [
      { label: "Dataset Samples", value: "20,000+" },
      { label: "Target Accuracy", value: "93.5%" },
      { label: "Processing Speed", value: "< 200ms" }
    ]
  },
  {
    id: "potato-leaf-disease",
    title: "Potato Leaf Disease Detection",
    category: "Deep Learning",
    tagline: "Computer Vision & CNN model for detecting agricultural diseases in potato crops",
    description: "Created a Deep Learning system using Convolutional Neural Networks (CNN) to analyze potato leaf images and identify early-stage agricultural diseases.",
    longDescription: "Early detection of crop diseases is vital for agricultural yield. This project utilizes TensorFlow/PyTorch and Convolutional Neural Networks to classify potato leaf image datasets into categories such as Early Blight, Late Blight, and Healthy. The solution includes data augmentation, layer normalization, dropout regularization, and softmax multi-class inference.",
    techStack: ["Python", "TensorFlow", "PyTorch", "CNN", "OpenCV", "Matplotlib"],
    features: [
      "Multi-class image classification (Early Blight, Late Blight, Healthy)",
      "Custom Convolutional Neural Network architecture with Pooling & Dropout layers",
      "Image augmentation techniques (rotation, zoom, horizontal flip) to prevent overfitting",
      "Automated image preprocessing pipeline resizing images for optimal model input",
      "Visualized model performance with loss/accuracy curves and confusion matrix"
    ],
    githubUrl: "https://github.com/solaimanSawon/potato-leaf-disease-detection",
    featured: true,
    metrics: [
      { label: "Classes Detected", value: "3 Categories" },
      { label: "Test Accuracy", value: "96.2%" },
      { label: "Framework", value: "TensorFlow / CNN" }
    ]
  }
];

export const competitiveProgrammingInfo = {
  platform: "Codeforces",
  handle: "sawon_777",
  profileUrl: "https://codeforces.com/profile/sawon_777",
  primaryLanguage: "C++ (C++17 / C++20)",
  bio: "Active problem solver on Codeforces with a focus on algorithmic efficiency, mathematical analysis, and data structure implementations.",
  highlights: [
    { title: "Data Structures", desc: "Arrays, Vectors, Stacks, Queues, Hash Maps, Trees, Segment Trees" },
    { title: "Algorithms", desc: "Binary Search, Two Pointers, Greedy Algorithms, Dynamic Programming, BFS/DFS" },
    { title: "Mathematics", desc: "Number Theory, Prime Sieve, GCD/LCM, Modular Arithmetic, Combinatorics" },
    { title: "Time Complexity", desc: "Optimizing solutions from O(N²) to O(N log N) / O(1) for strict execution bounds" }
  ],
  statsSummary: {
    solvedProblemsEstimate: "150+",
    activeLanguage: "C++",
    communityStatus: "Regular Contest Participant"
  }
};
