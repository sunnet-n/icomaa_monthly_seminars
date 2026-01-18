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
    id: 5,
    title: "Graph Theory Applications and the Novel Omega Invariant",
    date: "January 21, 2026",
    time: "3:00 PM (GMT+3)",
    location: "Zoom Meeting",
    speaker: "Prof.Dr. İsmail NACİ",
    position: "Professor of Applied Mathematics, Uludağ University, Turkey",
    speakerBio: "Prof. Dr. İsmail Naci Cangül is a full professor of mathematics at Uludağ University, Turkey, with research interests in graph, number theories and their applications. He has published extensively in international journals, supervised numerous MSc and PhD students, and has served in various academic and administrative leadership positions.",
    speakerPhoto: "images/cngul.jpg",
    abstract: [
      "Graph theory is one of the most vibrant and widely studied branches of mathematics, driven by its rich structure and broad range of real-world applications. In the first part of this talk, we survey selected applications of graph-theoretic ideas across modern scientific and technological settings. In the second part, we introduce a new topological invariant, the Omega index (Ω), and develop its fundamental properties. We then demonstrate how Ω can be used to address several questions in combinatorics and graph theory, including progress on previously open problems.",
    ],
    isUpcoming: true,
    meetingLink: "https://online.yildiz.edu.tr/joinmeeting?meetingid=upcoming1"
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
    speakerPhoto: "images/RBarrio.jpg",
    abstract: [
      "Join us for an exploration of how differential geometry and topology inform modern deep learning architectures. We will cover graph neural networks, equivariant networks, and manifold learning.",
      "The seminar will showcase applications in scientific computing, drug discovery, and 3D computer vision, demonstrating how geometric priors enhance model performance and interpretability."
    ],
    isUpcoming: false,
    meetingLink: "https://online.yildiz.edu.tr/joinmeeting?meetingid=upcoming2"
  },
  {
    id: 1,
    title: "Computational Methods in Differential Equations",
    date: "September 15, 2023",
    time: "2:00 PM (GMT+3)",
    location: "Main Auditorium",
    speaker: "Dr. Maria Rodriguez",
    position: "Professor of Mathematics, Stanford University",
    speakerBio: "Leading researcher in numerical methods for partial differential equations with over 20 years of experience. Dr. Rodriguez has published more than 100 papers in top-tier journals and has received numerous awards including the SIAM Fellowship and the AWM-SIAM Sonia Kovalevsky Prize.",
    speakerPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    abstract: [
      "This seminar explored advanced computational techniques for solving differential equations that arise in various scientific and engineering applications. The presentation covered finite element methods, spectral methods, and modern adaptive algorithms.",
      "Special emphasis was placed on stability analysis, convergence properties, and practical implementation considerations. The session included demonstrations of state-of-the-art software tools and discussed recent breakthroughs in handling stiff systems and multiscale problems."
    ],
    isUpcoming: false
  },
  {
    id: 2,
    title: "Topology and Its Applications in Data Science",
    date: "August 22, 2023",
    time: "3:30 PM (GMT+3)",
    location: "Conference Hall B",
    speaker: "Dr. James Chen",
    position: "Research Director, MIT Computer Science and AI Laboratory",
    speakerBio: "Pioneering work in topological data analysis and persistent homology. Dr. Chen's research bridges pure mathematics and machine learning, with applications in computer vision, natural language processing, and biomedical data analysis. He is a recipient of the NSF CAREER Award.",
    speakerPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    abstract: [
      "This talk presented how topological methods provide powerful tools for analyzing complex data structures. We explored persistent homology, mapper algorithms, and their applications in understanding high-dimensional datasets.",
      "Real-world applications were demonstrated in fields including genomics, neuroscience, and financial markets. The session highlighted how topological features capture global patterns that traditional statistical methods might miss, opening new avenues for data-driven discovery."
    ],
    isUpcoming: false
  },
  {
    id: 3,
    title: "Algebraic Structures in Quantum Computing",
    date: "July 10, 2023",
    time: "4:00 PM (GMT+3)",
    location: "Lecture Theater A",
    speaker: "Dr. Sarah Williams",
    position: "Lead Researcher, Cambridge Quantum Computing Centre",
    speakerBio: "Expert in quantum algorithms and algebraic approaches to quantum information theory. Dr. Williams has made significant contributions to understanding quantum error correction codes and topological quantum computation. She holds a Royal Society University Research Fellowship.",
    speakerPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    abstract: [
      "The seminar investigated the deep connections between abstract algebra and quantum computing. We discussed group theory, category theory, and their roles in understanding quantum gates, quantum circuits, and quantum algorithms.",
      "The presentation covered recent developments in quantum error correction using algebraic codes, topological quantum computing approaches, and the mathematical foundations of quantum advantage. Attendees gained insights into how pure mathematical structures enable the development of practical quantum technologies."
    ],
    isUpcoming: false
  },
  {
    id: 4,
    title: "Stochastic Processes in Financial Mathematics",
    date: "June 5, 2023",
    time: "1:30 PM (GMT+3)",
    location: "Main Auditorium",
    speaker: "Dr. Robert Kumar",
    position: "Professor of Mathematical Finance, Oxford University",
    speakerBio: "Internationally renowned expert in stochastic calculus and financial modeling. Dr. Kumar's research focuses on derivative pricing, risk management, and market microstructure. He has advised major financial institutions and central banks, and is the author of three influential textbooks on quantitative finance.",
    speakerPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    abstract: [
      "This presentation examined the mathematical foundations of modern financial theory through the lens of stochastic processes. Topics included Brownian motion, martingales, Itô calculus, and their applications to option pricing and portfolio optimization.",
      "We explored the Black-Scholes model, stochastic volatility models, and jump-diffusion processes. The seminar also addressed recent challenges in financial modeling, including the incorporation of market frictions, behavioral factors, and systemic risk considerations in mathematical frameworks."
    ],
    isUpcoming: false
  },
  {
    id: 7,
    title: "Fractals and Chaos Theory in Dynamical Systems",
    date: "May 18, 2023",
    time: "3:00 PM (GMT+3)",
    location: "Lecture Theater A",
    speaker: "Dr. Alexandra Petrov",
    position: "Associate Professor of Mathematics, ETH Zurich",
    speakerBio: "Renowned expert in nonlinear dynamics and chaos theory. Dr. Petrov's research explores fractal geometry, strange attractors, and their applications in weather prediction and biological systems. She has received the European Mathematical Society Prize for her groundbreaking work.",
    speakerPhoto: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    abstract: [
      "This seminar delved into the fascinating world of fractals and chaos theory. We examined how simple deterministic systems can exhibit complex, unpredictable behavior, and explored the mathematical tools used to analyze such systems.",
      "Topics covered included the Mandelbrot set, Lorenz attractors, bifurcation theory, and Lyapunov exponents. Real-world applications in meteorology, population dynamics, and fluid mechanics were presented, demonstrating the wide-ranging impact of chaos theory across scientific disciplines."
    ],
    isUpcoming: false
  }
];