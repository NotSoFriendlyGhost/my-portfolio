export interface ProjectSection {
  heading: string;
  paragraphs: string[];
  /** Optional extra figure rendered under the paragraphs. */
  figure?: "scaremouse-system";
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  /** Used on the homepage cards and as the page description. */
  summary: string;
  /** Opening line on the project page. Keep it shorter than the summary. */
  intro: string;
  /** Which drawing represents this project. */
  diagram: "scaremouse" | "clinical" | "echolens" | "robotics";
  /** One line under the drawing. */
  plateCaption: string;
  /** A real photograph, if there is one. Shown on the project page. */
  photo?: { src: string; alt: string; caption: string; width: number; height: number };
  repoUrl?: string;
  repoLabel?: string;
  links?: { label: string; url: string }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "scaremouse",
    number: "01",
    title: "ScareMouse",
    category: "Tinnitus research · Loyola University Chicago",
    summary:
      "At Loyola University Chicago I worked on ScareMouse, an open-source system for measuring acoustic startle responses in mice for tinnitus research. I designed Arduino hardware to track how mice respond to sound, and built a touchscreen GUI on a Raspberry Pi so researchers can start an experiment and view the data.",
    intro:
      "An open-source startle-response system for tinnitus research at Loyola University Chicago.",
    diagram: "scaremouse",
    plateCaption: "A startle response plotted against the sound that caused it.",
    photo: {
      src: "/photos/research.jpg",
      alt: "Caspar, wearing a conference lanyard, explaining a research poster about acoustic startle response to two people.",
      caption: "Presenting the startle response research.",
      width: 900,
      height: 520,
    },
    repoUrl: "https://github.com/NotSoFriendlyGhost/ScareMousePi",
    repoLabel: "Raspberry Pi interface on GitHub",
    links: [
      {
        label: "Arduino firmware on GitHub",
        url: "https://github.com/NotSoFriendlyGhost/ScareMouseArduino",
      },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "ScareMouse plays a sudden loud sound for a mouse and measures how strongly it flinches. That reflex is the acoustic startle response, and it can be used to evaluate tinnitus in mice. A load cell picks up the movement, speakers play the sound, and a Raspberry Pi interface runs the session and records the data.",
          "I built this as a tinnitus research intern at Loyola University Chicago (May 2023–September 2025). Equipment for this exists, but it is proprietary. ScareMouse is meant to be an open-source alternative.",
        ],
      },
      {
        heading: "How the pieces fit",
        paragraphs: [
          "The speakers play the stimulus. The load cell measures the response, and Arduino-based hardware reads it. A Raspberry Pi with a touchscreen GUI ties these together so someone can start a session and look at the data without digging through scripts. The code for both the interface and the Arduino side is on GitHub.",
        ],
        figure: "scaremouse-system",
      },
      {
        heading: "What I worked on",
        paragraphs: [
          "I designed the Arduino side that tracks the response to sound, and developed the Raspberry Pi touchscreen GUI for running experiments and viewing data. That also meant coordinating the audio with the measurements and keeping the data collection automatic enough to reuse.",
        ],
      },
      {
        heading: "What was hard",
        paragraphs: [
          "The useful number is the time between the sound and the response, so the audio and the load cell data have to share a clock. If they drift apart, the measurements stop meaning much.",
          "Making the setup behave the same way every session mattered as much as making it work once.",
        ],
      },
    ],
  },
  {
    slug: "clinical-data-interface",
    number: "02",
    title: "Clinical research data interface",
    category: "Lymphoma research · University of Turin",
    summary:
      "At the University of Turin I built a GUI for collecting lymphoma patient data, with Python handling spreadsheet automation and MySQL storage. The cleaned data feeds an existing AI classifier used in treatment-response research.",
    intro:
      "A data-collection GUI and Python pipeline for lymphoma research at the University of Turin.",
    diagram: "clinical",
    plateCaption: "An intake sheet with one missing value.",
    // TODO: add the repository link here if it can be shared.
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "This is a research software tool for lymphoma treatment-response work. A GUI collects structured patient data. Python stores and prepares that data with spreadsheet automation and MySQL, then hands it to an existing AI classifier used in the lab's research.",
          "I built this as a lymphoma research intern at the University of Turin (June 2024–December 2025).",
        ],
      },
      {
        heading: "What I worked on",
        paragraphs: [
          "I developed the data-collection GUI and the Python side that stores and prepares the data. I did not build the predictive model itself, and the interface does not make clinical decisions. It prepares data for research.",
        ],
      },
      {
        heading: "What I was aiming for",
        paragraphs: [
          "The goal was a workflow that was more structured and easier for researchers to use, instead of a pile of one-off scripts.",
        ],
      },
    ],
  },
  {
    slug: "echolens",
    number: "03",
    title: "EchoLens",
    category: "Assistive technology",
    summary:
      "EchoLens started with a simple question. Could a camera read printed text out loud? The prototype pairs camera hardware with an iPhone app that handles text recognition and speech playback. Getting those pieces to work together, and giving them decent light, was the harder part.",
    intro:
      "An assistive reading prototype that asks whether a camera can read printed text out loud.",
    diagram: "echolens",
    plateCaption: "Camera distance, one lamp, and the lines of the page that get lost.",
    // TODO: add the repository link here if it can be shared.
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The prototype has two parts, camera hardware and an iPhone app. The app runs text recognition (OCR) on what the camera sees and plays the result as speech.",
        ],
      },
      {
        heading: "What took iteration",
        paragraphs: [
          "Getting the camera, text recognition, and speech playback to work together was the harder part. Lighting and camera distance changed the recognition results a lot, so I went back and forth between the hardware setup and the app. The user experience needed several rounds too.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "It is a prototype. It is sensitive to lighting and camera distance, and I would not call it a finished product.",
        ],
      },
    ],
  },
  {
    slug: "robotics",
    number: "04",
    title: "Competitive robotics",
    category: "VEX robotics · C++",
    summary:
      "I write C++ for competitive VEX robots: autonomous navigation, odometry, and PID control. Our team was Virtual Skills State Champion and a World Finalist. The code only works if it fits the physical robot, so the software and the robot's design have to be worked out together.",
    intro:
      "C++ for competitive VEX robots. Virtual Skills State Champion and World Finalist.",
    diagram: "robotics",
    plateCaption: "A planned path, the path actually driven, and the gap between them.",
    photo: {
      src: "/photos/night.jpg",
      alt: "A person crouching at the edge of a VEX robotics field, a robot and scattered rings on the grey tiles beside him.",
      caption: "At a VEX field.",
      width: 1080,
      height: 1920,
    },
    repoUrl: "https://github.com/NotSoFriendlyGhost/HighStakesWorlds",
    repoLabel: "High Stakes worlds code on GitHub",
    links: [
      {
        label: "High Stakes state championship code on GitHub",
        url: "https://github.com/NotSoFriendlyGhost/HighStakesState",
      },
    ],
    sections: [
      {
        heading: "What the code does",
        paragraphs: [
          "Odometry keeps track of where the robot is on the field by adding up small movements from its sensors. Autonomous routines use that position to follow a path. PID control handles the last part, correcting the gap between where the robot is and where it is supposed to be.",
        ],
      },
      {
        heading: "Competition",
        paragraphs: [
          "In VEX we were Virtual Skills State Champion and a World Finalist. The competition code for High Stakes is on GitHub.",
        ],
      },
      {
        heading: "Software and hardware",
        paragraphs: [
          "The code depends on the physical robot, including things like wheel size and where the sensors sit. The software and the robot's design had to be worked out together.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "Wheels slip, and odometry errors add up over a run. A path that looks right in the plan can end up somewhere else on the field. The drawing above shows that gap.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
