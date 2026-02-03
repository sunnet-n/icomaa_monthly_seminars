export interface PastSeminar {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  position: string;
  speakerBio: string;
  speakerPhoto: string;
  abstract: string[];
  meetingLink?: string;
  isUpcoming?: boolean;
}

export const pastSeminars: PastSeminar[] = [
  {
    id: 7,
    title: "On Fractional-Order Discrete-Time Systems: Chaos, Stabilization, and Synchronization.",
    date: "Februrary 4, 2026",
    time: "3:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Prof.Dr. Rene Lozi",
    position: "Department of Mathematics, Université Côte d’Azur,France",
    speakerBio: "Prof. René Lozi is a Professor of Mathematics at Université Côte d’Azur (Dieudonné Center of Mathematics, France) and a leading figure in nonlinear dynamics and chaos theory. He is best known for discovering the Lozi map, a planar system with a strange attractor. His research spans dynamical systems, complexity and emergence, chaos control, and applications to cryptography, memristors, and artificial intelligence. He currently serves as Vice President of the International Society of Difference Equations.",
    speakerPhoto: "/images/photo_Lozi.jpg",
    abstract: [
      "This talk presents three fractional-order systems: the fractional Lozi map, the fractional Lorenz map, and the fractional flow map. Their main dynamical features, including bifurcation behavior, are examined. Control laws for stabilization and synchronization among combinations of these systems are introduced, with convergence of the stabilized states and synchronization errors established via linearization methods. Numerical simulations are provided to illustrate and support the theoretical results.",
    ],
    isUpcoming: true,
    meetingLink: "https://online.yildiz.edu.tr/joinmeeting?meetingid=30835276-342b-4732-ab92-7a9e862d59f2"
  },
  {
    id: 5,
    title: "Graph Theory Applications and the Novel Omega Invariant",
    date: "January 21, 2026",
    time: "3:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Prof.Dr. İsmail Naci CANGÜL",
    position: "Professor of Applied Mathematics, Uludağ University, Turkey",
    speakerBio: "Prof. Dr. İsmail Naci Cangül is a full professor of mathematics at Uludağ University, Turkey, with research interests in graph, number theories and their applications. He has published extensively in international journals, supervised numerous MSc and PhD students, and has served in various academic and administrative leadership positions.",
    speakerPhoto: "/images/cngul.jpg",
    abstract: [
      "Graph theory is one of the most vibrant and widely studied branches of mathematics, driven by its rich structure and broad range of real-world applications. In the first part of this talk, we survey selected applications of graph-theoretic ideas across modern scientific and technological settings. In the second part, we introduce a new topological invariant, the Omega index (Ω), and develop its fundamental properties. We then demonstrate how Ω can be used to address several questions in combinatorics and graph theory, including progress on previously open problems.",
    ],
    isUpcoming: false,
    meetingLink: "https://online.yildiz.edu.tr/joinmeeting?meetingid=d99ea6e3-ab7c-40ee-81dd-331cf2af63b9"
  },
  {
    id: 6,
    title: "Brain and heart: dynamics of excitable cells",
    date: "January 14, 2026",
    time: "15:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Prof. Robert Barrio",
    position: "Professor of Applied Mathematics, University of Zaragoza, Spain",
    speakerBio: "Professor Roberto Barrio is a distinguished Full Professor of Applied Mathematics at the University of Zaragoza. His broad expertise spans dynamical systems, mathematical modeling, computational dynamics, and biomathematics. A prolific researcher with more than 120 published works and active leadership roles on several international journal editorial boards, Prof. Barrio is a leading voice in contemporary applied mathematics.",
    speakerPhoto: "/images/RBarrio.jpg",
    abstract: [
      "Join us for an exploration of how differential geometry and topology inform modern deep learning architectures. We will cover graph neural networks, equivariant networks, and manifold learning.",
      "The seminar will showcase applications in scientific computing, drug discovery, and 3D computer vision, demonstrating how geometric priors enhance model performance and interpretability."
    ],
    isUpcoming: false,
  },
  {
    id: 1,
    title: "Boundedness, Regularity, and Topological Properties in Function Spaces",
    date: "January 14, 2026",
    time: "2:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Dr. Waqar AFZAL",
    position: "Abdus Salam School of Mathematical Sciences Lahore, Pakistan",
    speakerBio: "Dr. Waqar Afzal is an accomplished mathematician and researcher specializing in harmonic analysis, partial differential equations, operator theory, and related areas. He has delivered invited talks and lectures at international institutions  and conferences, presenting advanced topics ranging from regularity theory of elliptic and parabolic equations to stochastic frameworks for dynamical systems. With a strong record of high-impact publications and experience teaching and communicating complex mathematical ideas, Dr. Afzal is a clear and engaging online speaker who effectively bridges rigorous theory with current research developments for a broad academic audience.",
    speakerPhoto: "/images/Waqar.jpeg",
    abstract: [
      " In this talk, we primarily discuss the boundedness of the Bessel–Riesz operator in variable Herz spaces, along with regularity results for divergence-form elliptic equations. We also present several topological properties of a newly defined scale of function spaces, which are based on the summability and integrability characteristics of Zygmund spaces with variable growth.",
    ],
    isUpcoming: false
  },
  {
    id: 2,
    title: "Modeling the Role of Immune Cells in Resistance to Oncolotic Viral Therapy with Time Delays",
    date: "December 3, 2025",
    time: "3:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Prof. Dr. Sophia JANG",
    position: "Professor of applied Mathematics, Texas Tech university, USA",
    speakerBio: "Professor Sophia Jang of Texas Tech University is a leading researcher in mathematical biology and dynamical systems. Her recent work focuses specifically on mathematical oncology, developing sophisticated models to optimize cancer immunotherapies and oncolytic virotherapy. Through collaborations with biomedical researchers, she investigates tumor-immune system interactions, treatment resistance mechanisms, and optimal therapeutic strategies. Professor Jang brings this cutting-edge research into her teaching across calculus, differential equations, and specialized biomathematics courses.",
    speakerPhoto: "/images/my_photo.jpg",
    abstract: [
      "This talk presents an extended tumor-virus interaction model that incorporates immune cells to study their impact on resistance during oncolytic viral therapy (OVT). We investigate how immune cells, which can attack both tumor and viral populations, influence the system's equilibrium and treatment outcomes.Analytical results show that immune cells can prevent full tumor resistance when their proliferation rate exceeds their death rate. A sufficiently high immune recruitment rate introduces a virus-free equilibrium with a reduced overall tumor burden. Numerical simulations further reveal that the viral transmission rate and immune parameters are critical determinants of treatment dynamics.",
      "However, monotherapy with oncolytic viruses alone proves inadequate for complete tumor eradication, underscoring the necessity for combination approaches. These findings highlight how immune regulation and time delays are pivotal in shaping therapeutic efficacy in OVT."
    ],
    isUpcoming: false
  },
  {
    id: 3,
    title: "Discrete Operators in Discrete Function Spaces",
    date: "December 3, 2025",
    time: "12:00 PM (GMT+3)",
    location: "Yildiz Technical University",
    speaker: "Prof. Dr. Nurzhan BOKAYEV",
    position: "Professor at N. Gumilyov Eurasian National University, Kazakhstan",
    speakerBio: ["Professor Nurzhan Bokayev holds a Doctorate in Physical and Mathematical Sciences and is a professor in the Department of Fundamental Mathematics at L.N. Gumilyov Eurasian National University in Astana, Kazakhstan.",
                 "He served as Vice President of the Mathematical Society of Turkic-Speaking Countries (2014–2023), where he led major initiatives, including organizing the 7th Congress of Mathematicians of the Turkic World in Astana in 2017.His primary research interests lie in harmonic analysis and operator theory in function spaces."],
    speakerPhoto: "/images/photo_nurzhan.jpg",
    abstract: [
      "The study of discrete analogues of continuous operators is a fundamental area in harmonic analysis. This talk, addresses the discrete generalized fractional-maximal operator and the discrete generalized Riesz potential. Key results to be presented include boundedness conditions for the generalized fractional-maximal function in discrete Lorentz spaces, reduction theorems for discrete Hardy-type inequalities, and estimates for its non-increasing rearrangement. The analysis extends to the characterization of various cones formed by the non-increasing permutations of the discrete Riesz potential.",
    ],
    isUpcoming: false
  },
  {
    id: 4,
    title: "Boundedness and Compactness of some operators in Morrey-type space",
    date: "December 3, 2025",
    time: "1:30 PM (GMT+3)",
    location: "Yildiz Technical University",
    speaker: " Dr. Dauren MATIN",
    position: "N. Gumilyov Eurasian National University, Kazakhstan",
    speakerBio: "Dr. Dauren Matin is an Associate Professor at the Department of Higher Mathematics at L.N. Gumilyov Eurasian National University in Astana, Kazakhstan. His primary research interests center on functional analysis, with a particular focus on the compactness of sets in Banach spaces and the compactness of operators in various function spaces.",
    speakerPhoto: "/images/photo_matin.jpg",
    abstract: [
      "This talk examines the compactness of sets in local and global Morrey-type spaces, establishing analogues of the classical Kolmogorov–Fréchet theorem for these function classes. The speaker will present new conditions that ensure the compactness of the commutator of the Riesz potential within the general setting of Morrey-type spaces.",
    ],
    isUpcoming: false
  }
];