export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  lessons: number;
  lessonList?: {
    id: string;
    title: string;
    description: string;
    duration: string;
    type: 'video' | 'youtube' | 'link' | 'quiz' | 'text';
    videoUrl?: string;
    youtubeId?: string;
    externalUrl?: string;
    content?: string;

    // 1. Cadrage
    objectives?: string[];
    publicCible?: string;
    prerequisites?: string[];

    // 2. Théorie (Knowledge)
    theory?: {
      summary: string;
      concepts: { title: string; description: string; image?: string }[];
    };

    // 4. Exemples Pratiques
    practical?: {
      badCode: string;
      goodCode: string;
      explanation: string;
    };

    // 5. Activité Interactive
    interactive?: {
      title: string;
      description: string;
      type: 'reflexion' | 'code' | 'dragdrop';
    };

    // 6. Quiz (Enhanced)
    quizQuestions?: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation?: string; // New: Feedback
    }[];

    // 7. Étude de Cas
    caseStudy?: {
      scenario: string;
      options: { text: string; feedback: string; isCorrect: boolean }[];
    };

    // 8. Ressources
    resources?: { label: string; url: string }[];

    // 9. Auto-évaluation
    reflectionQuestions?: string[];

    // 10. Conclusion
    conclusion?: string;
  }[];
  tags: string[];
}

export const categories = [
  "Tous",
  "Développement Web",
  "Design",
  "Data Science",
  "Marketing",
  "Business",
];

export const courses: Course[] = [
  // ============ DÉVELOPPEMENT WEB (9 courses) ============
  {
    id: "1",
    title: "React.js Complet - De Zéro à Expert",
    description: "Maîtrisez React.js, les Hooks, Redux, et créez des applications web modernes et performantes. Ce cours couvre tout ce dont vous avez besoin pour devenir un développeur React professionnel.",
    instructor: "Marie Dupont",
    category: "Développement Web",
    level: "Intermédiaire",
    duration: "24h",
    students: 15420,
    rating: 4.8,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    lessons: 156,
    lessonList: [
      {
        id: "1-1",
        title: "Introduction à React",
        description: "Qu'est-ce que React et pourquoi l'utiliser ?",
        duration: "10min",
        type: "youtube",
        youtubeId: "SqcY0GlETPk",
        content: "Introduction aux concepts clés de React."
      },
      {
        id: "1-2",
        title: "Composants et Props",
        description: "Créer des composants réutilisables.",
        duration: "15min",
        type: "youtube",
        youtubeId: "w7ejDZ8SWv8",
        content: "Apprenez à structurer votre application avec des composants."
      }
    ],
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "2",
    title: "Node.js et Express - Backend Pro",
    description: "Construisez des APIs REST robustes et scalables avec Node.js, Express, MongoDB et les meilleures pratiques de sécurité.",
    instructor: "Alexandre Chen",
    category: "Développement Web",
    level: "Avancé",
    duration: "28h",
    students: 9450,
    rating: 4.8,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    lessons: 16,
    lessonList: [
      { id: "2-1", title: "Node.js: The Big Picture", description: "Architecture Non-bloquante.", duration: "15min", type: "youtube", youtubeId: "ENrzD9HAZK4", content: "Introduction conceptuelle." },
      {
        id: "2-2",
        title: "Quiz: Serveur HTTP",
        description: "Le coeur du backend",
        duration: "5min",
        type: "quiz",
        quizQuestions: [
          { question: "Quel module gère le serveur ?", options: ["fs", "http", "path"], correctAnswer: 1 },
          { question: "Le port par défaut est...", options: ["80", "3000 (souvent)", "21"], correctAnswer: 1 }
        ]
      },
      { id: "2-3", title: "NPM & package.json", description: "Gérer les dépendances.", duration: "12min", type: "youtube", youtubeId: "jHDhaSSKmB0", content: "Tout sur NPM." },
      { id: "2-4", title: "Express Generator", description: "Outil de scaffolding.", duration: "10min", type: "link", externalUrl: "https://expressjs.com/en/starter/generator.html", content: "Créez une app en 1 commande." },
      { id: "2-5", title: "Middleware Explained", description: "Le concept clé d'Express.", duration: "15min", type: "youtube", youtubeId: "lY6icfhap2o", content: "Comprendre la chaîne de responsabilité." },
      { id: "2-6", title: "REST API Design", description: "Bonnes pratiques.", duration: "20min", type: "link", externalUrl: "https://restfulapi.net/", content: "Guide de conception REST." },
      { id: "2-7", title: "MongoDB Atlas Setup", description: "Base de données Cloud.", duration: "15min", type: "youtube", youtubeId: "rPqRyYJmx2g", content: "Héberger sa DB gratuitement." },
      {
        id: "2-8",
        title: "Quiz: Async/Await",
        description: "La fin des callbacks hell",
        duration: "8min",
        type: "quiz",
        quizQuestions: [
          { question: "await s'utilise dans...", options: ["toute fonction", "une fonction async", "une boucle for"], correctAnswer: 1 },
          { question: "Promise.all sert à...", options: ["Attendre tout", "Annuler tout", "Rien"], correctAnswer: 0 }
        ]
      },
      { id: "2-9", title: "Authentication JWT", description: "Sécuriser l'API.", duration: "25min", type: "youtube", youtubeId: "mbsmsi7l3r4", content: "Implémentation complète." },
      { id: "2-10", title: "Postman API Testing", description: "Tester ses routes.", duration: "15min", type: "link", externalUrl: "https://www.postman.com/", content: "L'outil indispensable." },
      { id: "2-11", title: "Mongoose Models", description: "Schemas et validation.", duration: "18min", type: "youtube", youtubeId: "DZBGEVgL2eE", content: "Interagir avec MongoDB." },
      { id: "2-12", title: "Error Handling", description: "Gérer les crashs.", duration: "12min", type: "youtube", youtubeId: "pKd0Rpw7O48", content: "Try/Catch et Middleware." },
      { id: "2-13", title: "File Upload (Multer)", description: "Uploader des images.", duration: "20min", type: "link", externalUrl: "https://www.npmjs.com/package/multer", content: "Documentation Multer." },
      { id: "2-14", title: "Environment Variables", description: "Dotenv security.", duration: "10min", type: "youtube", youtubeId: "hZUNcVdxksY", content: "Ne jamais commiter ses secrets." },
      { id: "2-15", title: "Deployment (Vercel/Render)", description: "Mettre en ligne.", duration: "30min", type: "youtube", youtubeId: "2Hq4267hWkQ", content: "Du local au global." },
      {
        id: "2-16",
        title: "Final Exam: Backend Architect",
        description: "Certification",
        duration: "20min",
        type: "quiz",
        quizQuestions: [
          { question: "CORS sert à...", options: ["Sécuriser les origines", "Colorer le terminal", "Compresser"], correctAnswer: 0 },
          { question: "Quel statut pour 'Créé' ?", options: ["200", "201", "404"], correctAnswer: 1 }
        ]
      }
    ],
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: "3",
    title: "HTML5 & CSS3 - Les Fondamentaux",
    description: "Apprenez les bases du développement web avec HTML5 et CSS3. Créez des sites web responsives et modernes à partir de zéro.",
    instructor: "Lucas Bernard",
    category: "Développement Web",
    level: "Débutant",
    duration: "16h",
    students: 22150,
    rating: 4.7,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80",
    lessons: 12,
    lessonList: [
      { id: "3-1", title: "HTML5: La Structure", description: "Sémantique et SEO.", duration: "12min", type: "youtube", youtubeId: "ok-plXXHlWw", content: "Les bases solides." },
      { id: "3-2", title: "Jeu: Flexbox Froggy", description: "Apprendre Flexbox en jouant.", duration: "20min", type: "link", externalUrl: "https://flexboxfroggy.com/#fr", content: "Le meilleur moyen de comprendre Flexbox." },
      {
        id: "3-3",
        title: "Quiz: CSS Selectors",
        description: "Devenez un sniper du CSS",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "Que fait #header ?", options: ["Cible la classe header", "Cible l'ID header", "Cible la balise header"], correctAnswer: 1 },
          { question: "Comment cibler les enfants directs ?", options: ["div a", "div > a", "div + a"], correctAnswer: 1 }
        ]
      },
      { id: "3-4", title: "Grid Garden", description: "Maîtriser CSS Grid.", duration: "20min", type: "link", externalUrl: "https://cssgridgarden.com/#fr", content: "Un autre jeu indispensable." },
      { id: "3-5", title: "Projet: Portfolio Resume", description: "Création de CV en ligne.", duration: "30min", type: "youtube", youtubeId: "r_hYR53r61M", content: "Pratique réelle." }
    ],
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    id: "4",
    title: "Vue.js 3 - Framework Progressif",
    description: "Découvrez Vue.js 3 avec la Composition API, Pinia, et Vue Router. Créez des applications web réactives et performantes.",
    instructor: "Émilie Rousseau",
    category: "Développement Web",
    level: "Intermédiaire",
    duration: "22h",
    students: 8920,
    rating: 4.9,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
    lessons: 24,

    lessonList: [
      { id: "4-1", title: "Installation de Vue", description: "Créer un projet Vite + Vue", duration: "15min", type: "youtube", youtubeId: "nhBVL41-_Cw", content: "Démarrage rapide avec Vue 3." },
      { id: "4-2", title: "Reactivity Fundamentals", description: "ref() et reactive()", duration: "20min", type: "link", externalUrl: "https://vuejs.org/guide/essentials/reactivity-fundamentals.html", content: "Documentation officielle sur la réactivité." },
      {
        id: "4-3",
        title: "Quiz: Vue Basics",
        description: "Comprendre la réactivité",
        duration: "8min",
        type: "quiz",
        quizQuestions: [
          { question: "Quelle fonction crée une référence réactive ?", options: ["reactive()", "ref()", "useState()"], correctAnswer: 1 },
          { question: "Vue utilise-t-il un DOM virtuel ?", options: ["Oui", "Non", "Parfois"], correctAnswer: 0 }
        ]
      }
    ],
    tags: ["Vue.js", "JavaScript", "Frontend"],
  },
  {
    id: "5",
    title: "TypeScript Avancé pour Développeurs",
    description: "Maîtrisez TypeScript avec les types avancés, les génériques, les décorateurs et l'intégration avec React et Node.js.",
    instructor: "Pierre Lefèvre",
    category: "Développement Web",
    level: "Avancé",
    duration: "20h",
    students: 6780,
    rating: 4.8,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    lessons: 18,
    tags: ["TypeScript", "JavaScript", "Types"],
  },
  {
    id: "6",
    title: "JavaScript ES6+ Moderne",
    description: "Découvrez toutes les fonctionnalités modernes de JavaScript: arrow functions, destructuring, async/await, modules et plus encore.",
    instructor: "Sophie Martin",
    category: "Développement Web",
    level: "Débutant",
    duration: "18h",
    students: 18340,
    rating: 4.6,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
    lessons: 30,
    lessonList: [
      { id: "6-1", title: "ES6 vs ES5", description: "Les nouveautés majeures", duration: "12min", type: "youtube", youtubeId: "NCwa_xi0Uuc", content: "Pourquoi ES6 a tout changé." },
      { id: "6-2", title: "MDN Web Docs", description: "La bible JS", duration: "10min", type: "link", externalUrl: "https://developer.mozilla.org/fr/docs/Web/JavaScript", content: "Documentation de référence." },
      {
        id: "6-3",
        title: "Quiz: ES6+ Features",
        description: "Testez vos connaissances",
        duration: "8min",
        type: "quiz",
        quizQuestions: [
          { question: "Quel mot-clé déclare une variable constante ?", options: ["var", "let", "const"], correctAnswer: 2 },
          { question: "Quelle est la sortie de console.log(typeof []) ?", options: ["array", "object", "undefined"], correctAnswer: 1 }
        ]
      }
    ],
    tags: ["JavaScript", "ES6", "Frontend"],
  },
  {
    id: "7",
    title: "Angular - Application Enterprise",
    description: "Créez des applications d'entreprise robustes avec Angular, RxJS, NgRx et les meilleures pratiques d'architecture.",
    instructor: "Thomas Dubois",
    category: "Développement Web",
    level: "Avancé",
    duration: "32h",
    students: 7650,
    rating: 4.7,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    lessons: 45,
    tags: ["Angular", "TypeScript", "Enterprise"],
  },
  {
    id: "8",
    title: "PHP & Laravel - Développement Backend",
    description: "Apprenez PHP moderne et le framework Laravel pour créer des applications web puissantes avec authentification et bases de données.",
    instructor: "Julien Moreau",
    category: "Développement Web",
    level: "Intermédiaire",
    duration: "26h",
    students: 11200,
    rating: 4.5,
    price: 74.99,
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
    lessons: 40,
    tags: ["PHP", "Laravel", "Backend"],
  },
  {
    id: "9",
    title: "Tailwind CSS - Design Moderne",
    description: "Maîtrisez Tailwind CSS pour créer des interfaces utilisateur magnifiques et responsives sans écrire de CSS personnalisé.",
    instructor: "Claire Fontaine",
    category: "Développement Web",
    level: "Débutant",
    duration: "12h",
    students: 14560,
    rating: 4.9,
    price: 54.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    lessons: 15,
    tags: ["Tailwind", "CSS", "Design"],
  },

  // ============ DESIGN (9 courses) ============
  {
    id: "10",
    title: "UI/UX Design Masterclass",
    description: "Apprenez les principes fondamentaux du design d'interface et d'expérience utilisateur. De Figma aux prototypes interactifs.",
    instructor: "Jean-Pierre Martin",
    category: "Design",
    level: "Débutant",
    duration: "18h",
    students: 8750,
    rating: 4.9,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    lessons: 22,
    lessonList: [
      {
        id: "10-1",
        title: "Principes de base de l'UI Design",
        description: "Couleurs, Typographie, Espacement.",
        duration: "20min",
        type: "youtube",
        youtubeId: "zHAa-lsnMwk",
        content: "Les fondamentaux pour créer des interfaces esthétiques."
      },
      {
        id: "10-2",
        title: "Introduction à Figma",
        description: "Prise en main de l'outil.",
        duration: "30min",
        type: "link",
        externalUrl: "https://help.figma.com/hc/fr",
        content: "Guide officiel pour débuter sur Figma."
      },
      {
        id: "10-3",
        title: "Quiz: UX Design",
        description: "Testez vos connaissances en expérience utilisateur",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "Que signifie UX ?", options: ["User Xenophobia", "User Experience", "User Xylophone"], correctAnswer: 1 },
          { question: "Quelle est la première étape du Design Thinking ?", options: ["Prototyper", "Empathie", "Tester"], correctAnswer: 1 }
        ]
      },
      {
        id: "10-4",
        title: "Wireframing",
        description: "Structurer son interface",
        duration: "15min",
        type: "video",
        videoUrl: "/videos/wireframing.mp4",
        content: "Comment passer de l'idée au schéma fonctionnel."
      }
    ],
    tags: ["Figma", "UX", "UI"],
  },
  {
    id: "11",
    title: "Figma Avancé - Prototypage Pro",
    description: "Maîtrisez Figma avec les composants avancés, les variants, les auto-layouts et le prototypage interactif professionnel.",
    instructor: "Anaïs Petit",
    category: "Design",
    level: "Avancé",
    duration: "20h",
    students: 5420,
    rating: 4.8,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
    lessons: 25,
    tags: ["Figma", "Prototypage", "Components"],
  },
  {
    id: "12",
    title: "Adobe Photoshop - Retouche Photo",
    description: "De débutant à expert en retouche photo. Maîtrisez tous les outils de Photoshop pour des créations époustouflantes.",
    instructor: "Marc Durand",
    category: "Design",
    level: "Intermédiaire",
    duration: "24h",
    students: 12300,
    rating: 4.7,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
    lessons: 32,
    lessonList: [
      { id: "12-1", title: "Interface de Photoshop", description: "Découverte des outils", duration: "20min", type: "video", videoUrl: "/videos/ps-intro.mp4", content: "Tour d'horizon de l'espace de travail." },
      {
        id: "12-2",
        title: "Quiz: Outils de base",
        description: "Connaissez-vous vos outils ?",
        duration: "6min",
        type: "quiz",
        quizQuestions: [
          { question: "Quel raccourci pour l'outil Déplacement ?", options: ["V", "M", "L"], correctAnswer: 0 },
          { question: "Le format natif de Photoshop est...", options: [".jpg", ".png", ".psd"], correctAnswer: 2 }
        ]
      },
      { id: "12-3", title: "Adobe Stock", description: "Ressources graphiques", duration: "5min", type: "link", externalUrl: "https://stock.adobe.com/", content: "Trouver des images de haute qualité." }
    ],
    tags: ["Photoshop", "Retouche", "Adobe"],
  },
  {
    id: "13",
    title: "Design System - Création et Gestion",
    description: "Créez et maintenez un design system complet pour votre entreprise. Tokens, composants, documentation et gouvernance.",
    instructor: "Léa Girard",
    category: "Design",
    level: "Avancé",
    duration: "16h",
    students: 3890,
    rating: 4.9,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    lessons: 78,
    tags: ["Design System", "Components", "Documentation"],
  },
  {
    id: "14",
    title: "Adobe Illustrator - Illustration Vectorielle",
    description: "Créez des illustrations vectorielles professionnelles, des logos et des icônes avec Adobe Illustrator.",
    instructor: "Camille Robert",
    category: "Design",
    level: "Débutant",
    duration: "22h",
    students: 9870,
    rating: 4.6,
    price: 74.99,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    lessons: 118,
    tags: ["Illustrator", "Vectoriel", "Logo"],
  },
  {
    id: "15",
    title: "Motion Design avec After Effects",
    description: "Créez des animations captivantes et des effets visuels professionnels avec Adobe After Effects.",
    instructor: "Hugo Laurent",
    category: "Design",
    level: "Intermédiaire",
    duration: "28h",
    students: 6540,
    rating: 4.8,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    lessons: 156,
    tags: ["After Effects", "Animation", "Motion"],
  },
  {
    id: "16",
    title: "UX Research - Méthodes et Outils",
    description: "Apprenez les méthodes de recherche utilisateur: interviews, tests utilisateurs, analytics et synthèse de données.",
    instructor: "Marine Leroy",
    category: "Design",
    level: "Intermédiaire",
    duration: "14h",
    students: 4560,
    rating: 4.7,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80",
    lessons: 72,
    tags: ["UX Research", "Interviews", "Tests"],
  },
  {
    id: "17",
    title: "Typography & Branding",
    description: "Maîtrisez l'art de la typographie et créez des identités de marque mémorables et cohérentes.",
    instructor: "Antoine Mercier",
    category: "Design",
    level: "Débutant",
    duration: "12h",
    students: 7230,
    rating: 4.5,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&q=80",
    lessons: 65,
    tags: ["Typography", "Branding", "Identity"],
  },
  {
    id: "18",
    title: "3D Design avec Blender",
    description: "Créez des modèles 3D, des animations et des rendus photoréalistes avec le logiciel gratuit Blender.",
    instructor: "Romain Fabre",
    category: "Design",
    level: "Avancé",
    duration: "36h",
    students: 8120,
    rating: 4.8,
    price: 109.99,
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80",
    lessons: 198,
    tags: ["Blender", "3D", "Modélisation"],
  },

  // ============ DATA SCIENCE (9 courses) ============
  {
    id: "19",
    title: "Python pour Data Science",
    description: "De l'analyse de données au machine learning, maîtrisez Python et ses bibliothèques essentielles: Pandas, NumPy, Scikit-learn.",
    instructor: "Sophie Bernard",
    category: "Data Science",
    level: "Intermédiaire",
    duration: "32h",
    students: 12300,
    rating: 4.7,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    lessons: 48,
    lessonList: [
      {
        id: "19-1",
        title: "Pourquoi Python pour la Data Science ?",
        description: "Vue d'ensemble et installation.",
        duration: "15min",
        type: "youtube",
        youtubeId: "t8pPdKYpowI",
        content: "Installation de Anaconda et Jupyter Notebooks."
      },
      {
        id: "19-2",
        title: "NumPy Crash Course",
        description: "Manipulation de tableaux.",
        duration: "25min",
        type: "link",
        externalUrl: "https://numpy.org/doc/stable/user/absolute_beginners.html",
        content: "Documentation essentielle pour NumPy."
      },
      {
        id: "19-3",
        title: "Quiz: Python Basics",
        description: "Syntaxe de base",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "Quelle librairie est utilisée pour les Dataframes ?", options: ["NumPy", "Pandas", "Matplotlib"], correctAnswer: 1 },
          { question: "Comment définir une fonction en Python ?", options: ["function myFunc()", "def myFunc():", "func myFunc()"], correctAnswer: 1 }
        ]
      },
      {
        id: "19-4",
        title: "Visualisation avec Matplotlib",
        description: "Créer des graphiques impactants.",
        duration: "20min",
        type: "youtube",
        youtubeId: "DAQNHzOcO5A",
        content: "Tutoriel complet sur la visualisation de données."
      }
    ],
    tags: ["Python", "ML", "Data"],
  },
  {
    id: "20",
    title: "Machine Learning Fondamentaux",
    description: "Comprenez les algorithmes de machine learning: régression, classification, clustering et évaluation de modèles.",
    instructor: "David Cohen",
    category: "Data Science",
    level: "Intermédiaire",
    duration: "28h",
    students: 9870,
    rating: 4.8,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    lessons: 38,
    lessonList: [
      { id: "20-1", title: "Qu'est-ce que le Machine Learning ?", description: "Définition et types.", duration: "18min", type: "youtube", youtubeId: "HcqpanDadyQ", content: "Supervisé vs Non-supervisé." },
      {
        id: "20-2",
        title: "Quiz: ML Basics",
        description: "Concepts fondamentaux",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "La régression sert à prédire...", options: ["Une catégorie", "Une valeur continue", "Une image"], correctAnswer: 1 },
          { question: "Quel algorithme est utilisé pour la classification ?", options: ["K-Means", "Logistic Regression", "Linear Regression"], correctAnswer: 1 }
        ]
      },
      { id: "20-3", title: "Scikit-Learn Doc", description: "Librairie star", duration: "15min", type: "link", externalUrl: "https://scikit-learn.org/stable/", content: "Documentation officielle." }
    ],
    tags: ["Machine Learning", "Algorithmes", "Python"],
  },
  {
    id: "21",
    title: "Deep Learning avec TensorFlow",
    description: "Créez des réseaux de neurones profonds avec TensorFlow et Keras. CNN, RNN, et architectures modernes.",
    instructor: "Nathalie Dupuis",
    category: "Data Science",
    level: "Avancé",
    duration: "36h",
    students: 6540,
    rating: 4.9,
    price: 119.99,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    lessons: 42,
    lessonList: [
      { id: "21-1", title: "Réseaux de Neurones: Le Concept", description: "Comprendre le fonctionnement biologique vs artificiel.", duration: "12min", type: "youtube", youtubeId: "aircAruvnKk", content: "3Blue1Brown: Neural Networks." },
      { id: "21-2", title: "TensorFlow Playground", description: "Expérimentation interactive", duration: "25min", type: "link", externalUrl: "https://playground.tensorflow.org/", content: "Jouez avec les réseaux de neurones sans coder." },
      {
        id: "21-3",
        title: "Quiz: Activation Functions",
        description: "ReLU, Sigmoid, Tanh...",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "Quelle fonction est la plus utilisée pour les couches cachées ?", options: ["Sigmoid", "ReLU", "Step"], correctAnswer: 1 },
          { question: "La sortie d'une Sigmoid est comprise entre...", options: ["0 et 1", "-1 et 1", "0 et l'infini"], correctAnswer: 0 }
        ]
      },
      { id: "21-4", title: "CNN Expliqué", description: "Convolutional Neural Networks", duration: "20min", type: "youtube", youtubeId: "YRhxdVk_sIs", content: "Comment les ordis voient les images." },
      { id: "21-5", title: "Keras Documentation", description: "L'API haut niveau", duration: "15min", type: "link", externalUrl: "https://keras.io/about/", content: "La référence indispensable." }
    ],
    tags: ["Deep Learning", "TensorFlow", "Neural Networks"],
  },
  {
    id: "22",
    title: "SQL et Bases de Données",
    description: "Maîtrisez SQL pour interroger, manipuler et gérer des bases de données relationnelles efficacement.",
    instructor: "François Blanc",
    category: "Data Science",
    level: "Débutant",
    duration: "18h",
    students: 15670,
    rating: 4.6,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    lessons: 95,
    tags: ["SQL", "Database", "Requêtes"],
  },
  {
    id: "23",
    title: "Data Visualization avec Python",
    description: "Créez des visualisations de données percutantes avec Matplotlib, Seaborn, Plotly et des dashboards interactifs.",
    instructor: "Julie Marchand",
    category: "Data Science",
    level: "Intermédiaire",
    duration: "20h",
    students: 7890,
    rating: 4.7,
    price: 74.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    lessons: 108,
    tags: ["Visualization", "Python", "Dashboards"],
  },
  {
    id: "24",
    title: "Big Data avec Spark",
    description: "Traitez des volumes massifs de données avec Apache Spark et PySpark. Architecture distribuée et optimisation.",
    instructor: "Olivier Roux",
    category: "Data Science",
    level: "Avancé",
    duration: "30h",
    students: 4320,
    rating: 4.8,
    price: 109.99,
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    lessons: 162,
    tags: ["Big Data", "Spark", "Distributed"],
  },
  {
    id: "25",
    title: "Statistiques pour Data Science",
    description: "Maîtrisez les concepts statistiques essentiels: probabilités, tests d'hypothèses, régression et inférence.",
    instructor: "Caroline Petit",
    category: "Data Science",
    level: "Débutant",
    duration: "16h",
    students: 11230,
    rating: 4.5,
    price: 64.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    lessons: 82,
    tags: ["Statistiques", "Probabilités", "Analyse"],
  },
  {
    id: "26",
    title: "NLP - Traitement du Langage Naturel",
    description: "Explorez le NLP avec Python: tokenization, embeddings, transformers et création de chatbots intelligents.",
    instructor: "Vincent Morel",
    category: "Data Science",
    level: "Avancé",
    duration: "26h",
    students: 5670,
    rating: 4.9,
    price: 104.99,
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
    lessons: 142,
    tags: ["NLP", "Python", "Transformers"],
  },
  {
    id: "27",
    title: "Power BI - Business Intelligence",
    description: "Créez des rapports et dashboards interactifs avec Power BI. Connectez vos données et racontez des histoires visuelles.",
    instructor: "Sandrine Lemaire",
    category: "Data Science",
    level: "Débutant",
    duration: "14h",
    students: 13450,
    rating: 4.6,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    lessons: 76,
    tags: ["Power BI", "BI", "Dashboards"],
  },

  // ============ MARKETING (9 courses) ============
  {
    id: "28",
    title: "Marketing Digital Stratégique",
    description: "Développez une stratégie marketing digitale complète: SEO, publicité payante, réseaux sociaux et analytics.",
    instructor: "Thomas Leroy",
    category: "Marketing",
    level: "Débutant",
    duration: "16h",
    students: 6890,
    rating: 4.6,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    lessons: 72,
    lessonList: [
      {
        id: "28-1",
        title: "Les piliers du Marketing Digital",
        description: "SEO, SEM, Social Media, Emailing.",
        duration: "15min",
        type: "youtube",
        youtubeId: "nU-IIXBWlS4",
        content: "Comprendre l'écosystème global."
      },
      {
        id: "28-2",
        title: "Google Analytics 4",
        description: "Mesurer la performance.",
        duration: "30min",
        type: "link",
        externalUrl: "https://analytics.google.com/analytics/academy/",
        content: "Certification Google Analytics."
      },
      {
        id: "28-3",
        title: "Quiz: Stratégie Marketing",
        description: "Validez vos connaissances",
        duration: "10min",
        type: "quiz",
        quizQuestions: [
          { question: "Que signifie SEO ?", options: ["Search Engine Optimization", "Social Engagement Organization", "Site External Optimization"], correctAnswer: 0 },
          { question: "Quel canal a généralement le meilleur ROI ?", options: ["Display Ads", "Email Marketing", "Influenceurs"], correctAnswer: 1 }
        ]
      }
    ],
    tags: ["SEO", "Ads", "Social"],
  },
  {
    id: "29",
    title: "SEO Avancé - Référencement Naturel",
    description: "Maîtrisez le SEO technique, le contenu optimisé, le link building et l'analyse de la concurrence.",
    instructor: "Aurélie Morin",
    category: "Marketing",
    level: "Avancé",
    duration: "22h",
    students: 8450,
    rating: 4.8,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    lessons: 118,
    tags: ["SEO", "Référencement", "Google"],
  },
  {
    id: "30",
    title: "Google Ads - Publicité Payante",
    description: "Créez et optimisez des campagnes Google Ads rentables. Search, Display, Shopping et YouTube Ads.",
    instructor: "Nicolas Garnier",
    category: "Marketing",
    level: "Intermédiaire",
    duration: "18h",
    students: 7230,
    rating: 4.7,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=800&q=80",
    lessons: 25,
    lessonList: [
      {
        id: "30-1",
        title: "Le système d'enchères",
        description: "Comment Google classe les pubs.",
        duration: "10min",
        type: "text",
        content: "Google Ads fonctionne sur un système d'enchères en temps réel. Le classement n'est pas uniquement déterminé par l'enchère maximale (CPC Max), mais aussi par le Score de Qualité (Quality Score). Ad Rank = CPC Max x Quality Score. Cela signifie qu'une annonce de meilleure qualité peut payer moins cher pour une meilleure position."
      },
      {
        id: "30-2",
        title: "Structure du compte",
        description: "Organiser ses campagnes.",
        duration: "15min",
        type: "text",
        content: "Un compte Google Ads se structure en 3 niveaux :\n1. Compte (Email, Facturation)\n2. Campagnes (Budget, Objectif, Géolocalisation)\n3. Groupes d'annonces (Mots-clés + Annonces)\n\nIl est crucial de séparer vos produits/services en différents groupes d'annonces pour assurer la cohérence entre le mot-clé cherché et l'annonce affichée."
      },
      {
        id: "30-3",
        title: "Match Types (Correspondances)",
        description: "Cibler les bons mots-clés.",
        duration: "12min",
        type: "text",
        content: "Il existe 3 types de correspondances clés :\n- Requete Large (Broad Match) : Touche un public large, parfois peu pertinent.\n- Expression Exacte (Phrase Match) : 'Chaussures rouges' inclut 'Acher chaussures rouges'.\n- Mot-clé Exact (Exact Match) : [Chaussures rouges] cible uniquement cette recherche précise.\n\nCommencez par Phrase ou Exact pour mieux contrôler votre budget."
      },
      {
        id: "30-4",
        title: "Copywriting des Annonces",
        description: "Rédiger pour convertir.",
        duration: "20min",
        type: "text",
        content: "Une bonne annonce textuelle doit contenir :\n- Le mot-clé principal dans le Titre 1.\n- Un avantage compétitif ou une offre dans le Titre 2.\n- Un Call-to-Action clair dans la description (ex: 'Demandez votre devis gratuit').\n- Utilisez les extensions d'annonces (liens annexes, accroches, appels) pour prendre plus de place à l'écran."
      }
    ],
    tags: ["Google Ads", "PPC", "Publicité"],
  },
  {
    id: "31",
    title: "Social Media Marketing",
    description: "Stratégies de marketing sur les réseaux sociaux: Instagram, TikTok, LinkedIn, Facebook et création de contenu viral.",
    instructor: "Emma Roussel",
    category: "Marketing",
    level: "Débutant",
    duration: "14h",
    students: 11560,
    rating: 4.5,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    lessons: 78,
    tags: ["Social Media", "Instagram", "TikTok"],
  },
  {
    id: "32",
    title: "Email Marketing & Automation",
    description: "Créez des campagnes email efficaces avec segmentation, automation, A/B testing et analyse de performance.",
    instructor: "Laurent Dubois",
    category: "Marketing",
    level: "Intermédiaire",
    duration: "12h",
    students: 5890,
    rating: 4.6,
    price: 64.99,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    lessons: 65,
    tags: ["Email", "Automation", "Conversion"],
  },
  {
    id: "33",
    title: "Content Marketing - Stratégie de Contenu",
    description: "Développez une stratégie de contenu efficace: blog, vidéo, podcast et storytelling pour votre marque.",
    instructor: "Céline Fournier",
    category: "Marketing",
    level: "Débutant",
    duration: "16h",
    students: 8120,
    rating: 4.7,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    lessons: 84,
    tags: ["Content", "Blog", "Storytelling"],
  },
  {
    id: "34",
    title: "Analytics & Data-Driven Marketing",
    description: "Maîtrisez Google Analytics 4, les KPIs marketing et prenez des décisions basées sur les données.",
    instructor: "Mathieu Perrin",
    category: "Marketing",
    level: "Avancé",
    duration: "20h",
    students: 4670,
    rating: 4.8,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    lessons: 105,
    tags: ["Analytics", "GA4", "KPIs"],
  },
  {
    id: "35",
    title: "Copywriting - Écriture Persuasive",
    description: "Apprenez l'art du copywriting: titres accrocheurs, pages de vente, emails et textes qui convertissent.",
    instructor: "Isabelle Henry",
    category: "Marketing",
    level: "Intermédiaire",
    duration: "10h",
    students: 9340,
    rating: 4.9,
    price: 54.99,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    lessons: 58,
    tags: ["Copywriting", "Conversion", "Vente"],
  },
  {
    id: "36",
    title: "Influence Marketing & Partenariats",
    description: "Créez des campagnes d'influence réussies: identification d'influenceurs, négociation et mesure du ROI.",
    instructor: "Pauline Martin",
    category: "Marketing",
    level: "Intermédiaire",
    duration: "14h",
    students: 6230,
    rating: 4.5,
    price: 74.99,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    lessons: 72,
    tags: ["Influence", "Partenariats", "ROI"],
  },

  // ============ BUSINESS (9 courses) ============
  {
    id: "37",
    title: "Entrepreneuriat et Création d'Entreprise",
    description: "Du concept au lancement, apprenez à créer et développer votre startup. Business plan, financement et croissance.",
    instructor: "Isabelle Moreau",
    category: "Business",
    level: "Débutant",
    duration: "20h",
    students: 5230,
    rating: 4.5,
    price: 74.99,
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80",
    lessons: 86,
    lessonList: [
      {
        id: "37-1",
        title: "Trouver une idée de business",
        description: "Méthodes de brainstorming et validation.",
        duration: "20min",
        type: "youtube",
        youtubeId: "gB5nQXYd-cs",
        content: "Comment savoir si votre idée vaut le coup ?"
      },
      {
        id: "37-2",
        title: "Le Business Model Canvas",
        description: "Structurer son projet.",
        duration: "15min",
        type: "link",
        externalUrl: "https://www.strategyzer.com/library/the-business-model-canvas",
        content: "Outil indispensable pour tout entrepreneur."
      },
      {
        id: "37-3",
        title: "Quiz: Mindset Entrepreneur",
        description: "Avez-vous l'esprit d'entreprise ?",
        duration: "5min",
        type: "quiz",
        quizQuestions: [
          { question: "Qu'est-ce qu'un MVP ?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Visual Potential"], correctAnswer: 1 },
          { question: "Quelle est la cause n°1 d'échec des startups ?", options: ["Manque d'argent", "Pas de besoin marché", "Mauvaise équipe"], correctAnswer: 1 }
        ]
      },
      {
        id: "37-4",
        title: "Pitcher son projet",
        description: "Convaincre des investisseurs.",
        duration: "10min",
        type: "youtube",
        youtubeId: "XvxtC60V6kc",
        content: "L'art du pitch parfait."
      }
    ],
    tags: ["Startup", "Business", "Finance"],
  },
  {
    id: "38",
    title: "Leadership & Management d'Équipe",
    description: "Développez vos compétences de leader: communication, motivation, délégation et gestion des conflits.",
    instructor: "Philippe Richard",
    category: "Business",
    level: "Intermédiaire",
    duration: "18h",
    students: 8450,
    rating: 4.7,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    lessons: 95,
    lessonList: [
      { id: "38-1", title: "Le rôle du leader", description: "Management vs Leadership", duration: "15min", type: "youtube", youtubeId: "bOaFfC1Dqxo", content: "Inspirer vs Diriger." },
      {
        id: "38-2",
        title: "Quiz: Styles de Leadership",
        description: "Quel est votre style ?",
        duration: "8min",
        type: "quiz",
        quizQuestions: [
          { question: "Quel style laisse le plus de liberté à l'équipe ?", options: ["Autoritaire", "Laissez-faire", "Démocratique"], correctAnswer: 1 },
          { question: "L'intelligence émotionnelle est-elle importante ?", options: ["Oui, cruciale", "Non, seuls les résultats comptent", "Peu importe"], correctAnswer: 0 }
        ]
      },
      { id: "38-3", title: "HBR Leadership", description: "Articles de référence", duration: "20min", type: "link", externalUrl: "https://hbr.org/topic/leadership", content: "Harvard Business Review." }
    ],
    tags: ["Leadership", "Management", "Équipe"],
  },
  {
    id: "39",
    title: "Gestion de Projet Agile",
    description: "Maîtrisez Scrum, Kanban et les méthodologies agiles pour gérer vos projets efficacement.",
    instructor: "Christophe Blanc",
    category: "Business",
    level: "Intermédiaire",
    duration: "16h",
    students: 11230,
    rating: 4.8,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    lessons: 82,
    tags: ["Agile", "Scrum", "Kanban"],
  },
  {
    id: "40",
    title: "Finance pour Non-Financiers",
    description: "Comprenez les états financiers, les ratios clés et prenez de meilleures décisions business.",
    instructor: "Véronique Dupont",
    category: "Business",
    level: "Débutant",
    duration: "14h",
    students: 7890,
    rating: 4.6,
    price: 64.99,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    lessons: 72,
    tags: ["Finance", "Comptabilité", "Business"],
  },
  {
    id: "41",
    title: "Négociation et Vente B2B",
    description: "Techniques de négociation avancées et stratégies de vente B2B pour conclure plus de contrats.",
    instructor: "Stéphane Lecomte",
    category: "Business",
    level: "Avancé",
    duration: "22h",
    students: 5670,
    rating: 4.8,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
    lessons: 115,
    tags: ["Négociation", "Vente", "B2B"],
  },
  {
    id: "42",
    title: "Product Management Essentiel",
    description: "Devenez Product Manager: discovery, roadmap, priorisation, métriques et collaboration avec les équipes.",
    instructor: "Marion Jacquet",
    category: "Business",
    level: "Intermédiaire",
    duration: "24h",
    students: 6340,
    rating: 4.9,
    price: 94.99,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    lessons: 128,
    tags: ["Product", "Roadmap", "Strategy"],
  },
  {
    id: "43",
    title: "Stratégie d'Entreprise",
    description: "Analysez votre marché, définissez votre positionnement et élaborez une stratégie gagnante.",
    instructor: "Bernard Rousseau",
    category: "Business",
    level: "Avancé",
    duration: "20h",
    students: 4560,
    rating: 4.7,
    price: 84.99,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    lessons: 102,
    tags: ["Stratégie", "Analyse", "Positionnement"],
  },
  {
    id: "44",
    title: "Communication & Prise de Parole",
    description: "Développez votre aisance à l'oral, structurez vos présentations et captivez votre audience.",
    instructor: "Hélène Fournier",
    category: "Business",
    level: "Débutant",
    duration: "12h",
    students: 9870,
    rating: 4.6,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    lessons: 65,
    tags: ["Communication", "Présentation", "Public Speaking"],
  },
  {
    id: "45",
    title: "Productivité & Gestion du Temps",
    description: "Optimisez votre productivité avec les meilleures méthodes: GTD, Pomodoro, time blocking et outils digitaux.",
    instructor: "Frédéric Legrand",
    category: "Business",
    level: "Débutant",
    duration: "8h",
    students: 14560,
    rating: 4.5,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    lessons: 48,
    tags: ["Productivité", "Temps", "Organisation"],
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const searchCourses = (query: string, category: string): Course[] => {
  return courses.filter((course) => {
    const matchesQuery =
      query === "" ||
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory =
      category === "Tous" || course.category === category;

    return matchesQuery && matchesCategory;
  });
};
