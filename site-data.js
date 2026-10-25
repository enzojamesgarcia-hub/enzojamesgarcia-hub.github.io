const FALLBACK_CONTENT = {
  profile: {
    name: "Enzo Garcia",
    intro: "Hi, I'm a student at Belen Jesuit Preparatory School and an aspiring engineer with an interest in all things aerospace-related."
  },
  about: {
    blurb: "I'm Enzo Garcia, a student at Belen Jesuit Preparatory School with a strong interest in aerospace and mechanical engineering. My interest in engineering comes from a desire to understand how things work and use that understanding to create something of my own."+
           "To create from creation, to understand creation. This idea reflects what draws me to engineering: the opportunity to study the systems and designs that already exist, understand the principles behind them, and use that knowledge to build something new. For me, engineering is not just about knowing how something works, but about applying that knowledge to bring an idea to life."+
           "Through robotics, CAD, 3D printing, and aerospace projects, I've developed hands-on experience turning ideas into functional designs. As a co-founder of my school's Aerospace Club, I've helped design, build, and test rockets and model aircraft while collaborating with other students to bring projects to life. These experiences have allowed me to explore the full design process, from developing an initial concept and creating models to fabricating components, assembling systems, and learning from testing."+
           "I'm particularly interested in the engineering behind aerospace vehicles: how they're designed, how their components work together, and how theoretical ideas translate into real-world performance. I enjoy tackling technical challenges, refining designs, and finding practical solutions when something doesn't work as expected. As I continue developing my technical skills and taking on new projects, I hope to deepen my understanding of aerospace engineering and eventually contribute to the design and development of vehicles and systems that push the boundaries of exploration.",
    skills: [
      "CAD & DESIGN: Autodesk Fusion, 3D modeling for mechanical, aerospace, and part assemblies. Design for 3D printing, laser cutting, and other manufacturing workflows.",
      "PROTOTYPING & MANUFACTURING: FDM 3D printing, prototype fabrication, component assembly, material selection, design iteration, troubleshooting, and basic manufacturing workflows.",
      "AEROSPACE & FLIGHT PROJECTS: Model rocketry, rocket assembly and testing, basic aerodynamics, wing and fuselage construction, and flight testing and performance evaluation.",
      "ROBOTICS & ENGINEERING: FTC/FRC robotics, robot component design, mechanical integration, assembly and testing, collaborative engineering, and design troubleshooting.",
      "PROGRAMMING & TECHNICAL TOOLS: Fluency in JavaScript, CSS, HTML, and other programming languages. Technical problem-solving, basic electronics, engineering software, and data collection and analysis."
    ]
  },
  projects: [
    {
      id: "Attending Artemis II",
      title: "Attending Artemis II",
      summary: "I recently got to attend the launch of the ARTEMIS II mission on the SLS rocket. A once in a lifetime experience, I still remember the ground trembling.",
      details: "Attending the Artemis II launch and how it gave me a new perspective, literally. Note: All pictures were taken by me or affiliates of the Belen Aerospace club.",
      longDescription: "It all started in the early stages of junior year. The newly formed Belen Aerospace Club had a competition to compete in, it had its workspace, it had a monthly launch schedule, but it was missing something..."+
      "We knew from very early on that we wanted the club to stand out from the rest. Many of our members (including me) came from the Belen Robotics club, and we knew that the club would likely die out if we didn’t distinguish it through something. After all, Robotics had its own competition already, which would likely take our members’ time. We wanted to show how the field of Aerospace is much more than the same mechanical/electrical focus of robotics."+
      "I especially took note of this, and began coordinating a project with a few other clubmates. I knew from watching SpaceX streams how thrilling watching a launch in real time could be. I suggested we watch videos and/or streams of launches during club meetings, or even while working on our projects. However, it didn’t take me long to realize a much larger ambition, something that would set a club tradition for far into the future. Before I could finish presenting the idea to the rest of the club, I casually mentioned how we could possibly even see a real launch. Much to my surprise, this idea suddenly became central."+
      "We quickly coordinated a project to find launches we could attend that year. At first, I was quick to suggest attending a routine Starlink launch out of the Cape, which at this point was happening almost every day. However, scheduling quickly became an issue. SpaceX launches happened so fast it was hard to pinpoint dates or times for us to meet. We knew the day-long drive would need a much larger and more important launch to justify the time."+
      "We knew of Artemis II and a couple of other launches scheduled for that year. At first, Artemis II’s date didn’t work for the group: other activities, projects, or tests were scheduled precisely on its launch date. Many of the other launches for the next months also conflicted with schedules or were changing too often. However, this would prove fortunate for us, as by spring of that year, we had been given a second chance at the Artemis II launch. It had been delayed twice, and its new schedule had perfectly aligned with the club’s, with April 1st being the launch date."+
      "With this fortunate turn of events, combined with a progression in our launch tracking abilities, we were able to plan out the trip. This was amazing to us: our struggle to even find a launch had been met with the most important of the whole year. For context, Artemis II was set to be the first crewed flight to the Moon by NASA in 50 years!"+
      "We left early that April 1st morning, and, untrue to the holiday, the launch would not prank us that afternoon. As we arrived, we began to set up viewing equipment like telescopes and cameras. To our surprise, many people began to approach and ask to see through our equipment. One group had come from as far as India and told us their story, traveling all the way to America just to watch this launch. It was great meeting so many people and getting to share in our passion for the space frontier."+
      "While I had never gotten to see a rocket in person before, I think meeting all those people who shared that common interest with us was the most important new perspective I gained.",
      tags: ["Rocketry", "EVENT", "INSPIRATION"],
      image: "Assets/Images/home/artemis-ii-1.jpg",
      video: "",
      pdf: "",
      link: "",
      highlights: [
        "Inspirational Experience",
        "SLS Rocket",
        "New Perspectives"
      ],
      gallery: [
        "Assets/Images/home/artemis-ii-1.jpg",
        "Assets/Images/home/Me.jpg",
        "Assets/Images/home/artemis-ii-2.jpg",
        "Assets/Images/home/artemis-ii-4.jpg",
        "Assets/Images/home/artemis-ii-6.jpg",
        "Assets/Images/home/artemis-ii-3.jpg"
      ]
    },
    {
      id: "BOXCAR'",
      title: "The 'Boxcar'",
      summary: "The 'Boxcar' is a multipurpose testbed aircraft for future projects and various payloads. Its first associated project will be a series of mounted cameras to locate and anaylze landed rockets.",
      details: "Innovating, Designing, and Developing my first fixed wing aircraft project.",
      longDescription: "The idea for this project initially came from another, my first model rocket: Big Bertha. We frequently bring our other rockets to launch days so that if one fails, we can still watch our previous ones fly for fun. During our routine launches, we loved to launch our first rocket, Big Bertha."+
      "This time, however, we wanted to try the most powerful motor the design was meant to handle, a C6-5. That launch, Big Bertha soared higher than ever. We watched as her chute deployed and she began to descend, but she quickly drifted away from us, carried by the wind. She was heading toward a treeline that we knew opened into a field of bushes and trees. We started to chase her, eventually sprinting toward where we last spotted her. One of our members stopped and watched as she sank below the treeline."+
      "We must have spent the rest of that day searching for her, with no luck. We never saw her again."+
      "Later, as I reflected on our loss, I thought of ways to prevent this problem on our future, much larger projects. I knew we’d need a way to find our rockets quickly and effectively. The answer quickly became evident: we needed a drone. An aerial platform could give us a view of the surrounding terrain that we could never get from the ground, helping us locate our rockets and determine where they had landed."+
      "But as we began considering how to make this idea a reality, I saw an opportunity to do more than simply build a flying camera. I wanted something that could serve as a foundation for future projects: a reliable, reusable aircraft capable of carrying different payloads and supporting a variety of experiments. Rather than build a drone dedicated solely to rocket recovery, we decided to design a multipurpose RC aircraft that could adapt to whatever challenges we pursued next. Its first mission would be to help us find our rockets, but its potential applications would extend far beyond the launch field."+
      "I decided to make this project my focus over that summer and carry it into the school year.",
      tags: ["AIRCRAFT", "DESIGN&DEVELOPMENT", "AEROSPACE CLUB"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Interactive layout", "Flexible content updates", "User-friendly presentation"],
      gallery: []
    },
    {
      id: "ARC Rocket-1",
      title: "'Bigger Bertha' ARC Rocket-1",
      summary: "'Bigger Bertha' or ARC Rocket-1 was my first ever competitive rocket, along side the Belen Aerospace club's aswell. using our previous experience from our earlier rockets, we sought to make our first competitive rocket.",
      details: "My first ever competition rocket, developed alongside the members of the Belen Aerospace club, and how we learned from it.",
      longDescription: "Coming soon...",
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Presentation layout", "Supports media and text", "Great for class projects"],
      gallery: []
    },
    {
      id: "L1 Rocket",
      title: "Designing an L1 Rocket with the Belen Aerospace Club(Active Project)",
      summary: "My role in the process of designing and developing our first L1 Rockets. A collaborative design between the club, these rockets will allow ",
      details: "Working with other members of the Belen Aerospace Club to design and make our first L1 Rockets for certifcation.",
      longDescription: "Coming soon...",
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Presentation layout", "Supports media and text", "Great for class projects"],
      gallery: []
    },
     {
      id: "Early Rockets",
      title: "Early Rockets",
      summary: "A general page for my earliest rockets with the Belen Aerospace club, and how they prepared us for the future. These early rockets would help develop our skills and knowledge for our later and current projects.",
      details: "Learning how to build rockets with the Belen Aerospace Club.",
      longDescription: "Coming soon...",
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Presentation layout", "Supports media and text", "Great for class projects"],
      gallery: []
    }
  ],
  contact: {
    email: "ejgarcia@belenwolverines.org",
    github: "https://github.com/enzojamesgarcia",
    location: "Miami, FL"
  }
};
