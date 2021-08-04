module.exports = {
  title: 'Matt Martin',
  header: "Hi, I'm Matt!",
  description: "I'm a software engineer with a passion for designing and building products for mobile and web that make our lives easier and more productive.",
  description2: "I'm currently pursuing software engineering internship/apprenticeship opportunities through the DoD Skillbridge <a href='https://dodskillbridge.usalearning.gov/'>program</a> with a start date of June '22 and the option for full time in Oct '22.",
  name: 'Matt Martin',
  emailStart: 'matthew.',
  emailEnd: 'i.last_name3@gmail.com',
  education: "Bachelor's in Computer Science, Washington State University, 2011",
  cta: {
    label: 'View my résumé',
    url: 'resource/resume.pdf',
  },
  socials: [
    { icon: 'github-circled', url: 'https://www.github.com/heloguy' },
    { icon: 'linkedin-squared', url: "https://www.linkedin.com/in/matthew-i-martin/" },
  ],
  projects: [
    {
      name: 'Flight School Skeds',
      date: '2015-Present',
      description: 'A freemium productivity app that allows Navy flight students and instructors to effectively manage their individual flying schedules. A Node backend hosted on Firebase crawls the Navy flight schedules website, waiting for the next day\'s schedule to be released for each of the 25 training squadrons.',
      description2: 'When a schedule drops, users receive a push notification that opens the app to their scheduled event(s). The frontend is a native iOS app that parses the raw HTML schedule data and allows users to search and filter by name and squadron.',
      tags: ['iOS', 'Swift', 'Node', 'Firebase'],
      kpis: ['Top 15 in "Productivity" apps from Feb 2020-March 2020.', 'Over 10,000 downloads since 2015.', '300 daily unique users', '90% Conversion Rate', 'Projected Android release in Fall \'21'],
      alt: 'Skeds Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'skeds.png',
      url: 'https://apps.apple.com/us/app/flight-school-skeds-pro/id1495576787'
    },
    {
      name: 'Juke',
      date: '2013-2015',
      description: 'I created Juke to solve the problem of playlist control at parties and events. The party host launches a lightweight node.js server that opens an endpoint on their local network. Users with mobile devices scan a QR code or navigate to a custom url and are presented with a frontend to add songs to a playlist.',
      description2: 'The server ingests songs as they\'re added to the playlist and forwards them to a Spotify-API that places them in a queue. Songs are played in FIFO order. The party hosts retains admin powers to veto requests and skip songs from their mobile device or the host machine.',
      tags: ['js', 'Node', 'Jade'],
      kpis: ['Working prototype marketed to Spotify in 2013 but was ultimately declined.', 'Juke was used by friends and colleagues at home and work for weddings and other events.', 'API was deprecated in 2015 and Juke died with it.'],
      alt: 'Juke screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'juke.png',
      url: 'https://www.github.com/heloguy/juke'
    }, 
    {
      name: 'Automato',
      date: '2014',
      description: 'Automato is a Chrome extension that allows users to highlight a movie name on any webpage, right click it, and access that film\'s Rotten Tomatoes rating in the context menu.',
      tags: ['js', 'jQuery'],
      alt: 'Automato Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'tomauto.png',
      url: 'https://www.github.com/heloguy/automato'
    },
    {
      name: 'Khan as a Service',
      date: '2013',
      description: 'KHANAAS is a fork of "FOAAS" that provides a web API for friends and co-workers to express friendly disdain for one another\'s actions in the form of Captain James Kirk or Mr. Spock cursing their name in classic Star Trek style.',
      description2: 'The API went viral from an HN post and received 50,000 unique impressions on its first day. After two years, the domain lapsed and it has since been forked and revived by other users.',
      tags: ['js', 'Node', 'AWS'],
      alt: 'KHANAAS screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'khaan.jpg',
      url: 'http://www.khanaas.com/'
    },
    {
      name: 'T-6B EICAS',
      date: '2016-2017',
      description: 'EICAS stands for "engine-indicating and crew-alerting system." It\'s a fancy way of describing gauges and alerts on some military aircraft. Determining when an aircraft is in a dangerous or hazardous state requires careful study and understanding of systems indications.',
      description2: 'I built the app while learning to fly the <a href="https://en.wikipedia.org/wiki/Beechcraft_T-6_Texan_II">T-6B</a> during flight school to simulate gauges and error states that a T-6 pilot may encounter during flight. The Android app allowed students to train their brains on gauge indications to develop muscle memory for certain emergencies from their phone and without wasting precious simulator time.',
      tags: ['Android', 'Java'],
      alt: 'EICAS screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'eicas.png',
      url: 'https://www.github.com/heloguy/t6beicas'
    }
  ],
  experiences: [
    {
      title: 'Full-stack/Mobile Engineer at Freelance',
      timeline: 'May 2011 - Present',
      description: 'Projects ranging from small productivity life-hack apps to a paid flight scheduling app with thousands of downloads and hundreds of daily users.',
      responsibilities: [
        'Ten years of experience designing and building mobile and web products.',
        'Web',
        'iOS',
        'Android',
        '<a href="#projects">Go to projects.</a>'
      ]
    },
    {
      title: 'Instructor Pilot, Operations Officer at U.S. Marines',
      timeline: 'Jun 2014-Present',
      description: "In 2014, I left software to pursue a passion for aviation and fulfill a desire to serve. Military exit in Spring '22.",
      responsibilities: [
        'Operations Officer (Deputy Director) in charge of managing risk, cost, and personnel in an organization consisting of over three hundred people and thirty aircraft.',
        'Proven leader with experience managing teams ranging in size from 15-20 to complex operations involving hundreds of personnel and aircraft.',
        'Senior AH-1Z instructor pilot responsible for training and mentoring the next generation of Naval Aviators.',
      ]
    },
    {
      title: 'Android Engineer at Salesforce.com, Inc.',
      timeline: 'Mar 2013-Jun 2014',
      description: 'Engineer on a nationwide team of developers, QA engineers, artists, and testers working on "Salesforce1", a CRM app that enables companies to manage employees, inventory, and customer engagement.',
      responsibilities: [
        'Built out features, developed tests, fixed bugs, and was a plank-holder for the release of SF1 at Dreamforce \'13.',
        'Collaborated with a distributed team of engineers and QAs during agile sprints.'
      ]
    },
    {
      title: 'Full-stack Engineer at Realnetworks, Inc.',
      timeline: 'May 2011-Mar 2013',
      description: 'Engineer on a team that developed and maintained an internal BI tool used company-wide to drive data-based decision making for Real\'s suite of software.',
      responsibilities: [
        'Full-stack web experience on a javascript frontend and a backend/ingestion suite consisting of a dozen technologies to include php, Java, perl, MySQL, and C.',
        'Optimized time and space complexity on algorithms to efficiently ingest and parse multi-billow row datasets.',
      ]
    }
  ]
}
