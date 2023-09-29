const path = require('path');
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = process.env.PORT || 5010;
const dbConnectionStr = process.env.DB_STRING;
const dbName = 'lastlaugh';
const dotenv = require('dotenv').config();




if (!dotenv) {
  throw new Error('Could not find .env file');
}

let db;

MongoClient.connect(dbConnectionStr)
  .then(client => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
    process.exit(1);
  });

/* app.set('view engine', 'ejs'); */
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Example data for rendering the book and chapters
const bookData = {
  bookTitle: 'Last Laugh',
  author: 'Babayega',
};


const chapters = [
    {
      chapterTitle: 'Chapter 1: The Gathering Storm',
      chapterContent: `The moon hung low in the inky sky as a cold wind swept through the deserted alleyways of New York City. A clandestine meeting was about to take place, one that would bring together 32 of the world's deadliest assassins. Among them was a man known only as Babayega, a name whispered in hushed tones even among the most hardened criminals.
  
      Babayega had earned his fearsome reputation through years of bloodshed and precision kills. Tonight, he had been summoned to participate in a deadly competition, a battle royale of hitmen that promised a reward beyond his wildest dreams. But for Babayega, it was never about the money. It was about proving once and for all that he was the best, that he would have the last laugh.
  
      As the hitmen gathered in the dimly lit warehouse, tension crackled in the air like electricity. Each assassin was given a sealed envelope containing the name of their target and a photograph. The rules were simple: eliminate your assigned target and survive. The last hitman standing would claim the prize.
  
      But there was a new player in town, a rival assassin known as "Big Trouble." He was a towering figure with a reputation for ruthlessness that sent shivers down the spines of even the most hardened criminals. Big Trouble was the leader of "The Outer World," a secretive group of elite assassins who operated in the shadows.
  
      Babayega couldn't ignore the challenge Big Trouble presented. He tore open his envelope and examined the contents. His target was a wealthy businessman with ties to a powerful crime syndicate. He knew the man's habits, weaknesses, and vulnerabilities. It wouldn't be long before his target met his demise.`,
      publicationDate: 'September 15, 2023',
    },
    {
        chapterTitle: 'Chapter 2: The Last Laugh',
        chapterContent: `The deadly game had begun. Hitmen vanished into the shadows, pursuing their targets with ruthless determination. Bodies piled up in the dark corners of the city, each death shrouded in mystery and gore. Babayega moved like a ghost, leaving no trace of his presence as he eliminated one target after another, all while keeping a vigilant eye out for Big Trouble.

        As the competition thinned, alliances formed and shattered. Betrayal was a constant threat, and the hitmen watched their backs as much as they hunted their prey. The streets of New York ran with blood, and the city itself seemed to breathe with a malevolent energy, as if it reveled in the chaos.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 3: The Unseen Hand',
        chapterContent: `As the body count continued to rise, Babayega felt a strange presence, an unseen hand guiding him through the deadly labyrinth of the competition. He had heard whispers of a mystic force at play, a hidden order that manipulated the hitmen like pawns in a grand game of death.

        Babayega couldn't ignore the feeling that he was being watched, that his every move was being anticipated. But he welcomed the challenge. It fueled his determination to emerge victorious and have the last laugh.
        
        Rumors circulated among the hitmen about various cults and factions that sought to control the outcome of the competition. There were whispers of an ancient order known as the "Keepers of Shadows," who believed that the last hitman standing would gain the power to shape the world's destiny.
        
        Babayega had little interest in such matters, but he couldn't deny the presence of a force beyond his comprehension. It seemed to protect him, guiding his steps and ensuring his survival.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 4: The Fire Within',
        chapterContent: `Amidst the chaos of the competition, Babayega returned to his hidden sanctuary—a luxurious penthouse overlooking the city. It was a place of solace and reflection, a place where he honed his skills and plotted his next moves. It was also where he kept his prized collection of rare books, each containing secrets of the assassin's trade.

        But when he entered his sanctuary, he was met with a horrifying sight. His penthouse had been ransacked, and his prized collection of books lay in ashes. The walls were charred, and the acrid smell of smoke filled the air. His house and cars had been burned to the ground.
        
        Enraged and devastated, Babayega knew that Big Trouble was responsible. It was a personal attack, a message that the competition had escalated to a new level of brutality. He had lost everything that had meant something to him.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 5: The Fallen Friend',
        chapterContent: `Babayega had one loyal ally in this deadly game—his friend and fellow assassin, Icarus. Icarus had saved his life countless times, and together, they had taken down some of the most dangerous targets in the world.

        But tragedy struck when Icarus was ambushed by a rival hitman during a mission. Babayega arrived too late to save his friend, and Icarus died in his arms. The loss was a devastating blow, and it fueled Babayega's determination to avenge his friend's death.
        
        Before Icarus breathed his last breath, he whispered a name, "Avalon." It was a cryptic clue that Babayega knew he had to follow, a lead that could unravel the mysteries surrounding The Outer World.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 6: The Enigma of Avalon',
        chapterContent: `Babayega delved into the enigma of Avalon, a name that had haunted his dreams since Icarus's death. It led him down a dark path, a trail of clues that pointed to a shadowy figure who seemed to be orchestrating the chaos of the competition.

        As he unraveled the secrets of Avalon, Babayega encountered a cast of intriguing characters—a hacker known as Cipher, a femme fatale assassin named Seraphina, and a retired spy turned informant named Shadowhawk. Each held a piece of the puzzle, and together, they formed an unlikely alliance to bring down The Outer World.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 7: The Tangled Web',
        chapterContent: `The alliance pursued leads that took them from the neon-lit streets of Tokyo to the ancient catacombs beneath Rome. They uncovered a tangled web of conspiracies, hidden agendas, and double-crosses that went beyond the competition.

        The Outer World, it turned out, was just a pawn in a much larger game—a game controlled by a shadowy organization known as "The Puppetmasters." This organization manipulated world events from the shadows, using assassins and mercenaries as their tools.
        
        Babayega realized that to defeat The Outer World and uncover the truth behind Avalon, they would have to take on The Puppetmasters themselves.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 8: The Puppetmasters',
        chapterContent: `The final confrontation with The Puppetmasters was a battle of wits and wills. The alliance faced off against a cabal of powerful individuals who had orchestrated global conflicts, assassinations, and conspiracies for centuries.

        Babayega, Cipher, Seraphina, and Shadowhawk used every skill and resource at their disposal to expose the true puppeteers. The battle was a deadly chess match, with each move bringing them closer to victory or oblivion.
        
        In a climactic showdown, the alliance confronted the leader of The Puppetmasters—a master manipulator known only as "The Maestro." It was a battle of ideologies, as The Maestro revealed his vision of a world controlled by chaos and fear.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 9: The Final Dance',
        chapterContent: `The final dance between Babayega and The Maestro was a deadly ballet of bullets and blades. The Maestro, a master tactician, had orchestrated this confrontation meticulously, knowing that it was a battle of not only skill but also willpower.

        Their clash echoed through a hidden underground chamber, the dim light casting long shadows on the walls. Babayega's determination to bring down The Puppetmasters fueled his every move, while The Maestro's cold, calculated demeanor masked a profound thirst for power.
        
        The battle raged on, each combatant pushing their limits. Blades clashed, bullets pierced the air, and the room resonated with the symphony of violence. The alliance watched in awe as Babayega, driven by the memory of Icarus and the burning desire for justice, fought with unparalleled ferocity.
        
        In a moment of cunning brilliance, Babayega outmaneuvered The Maestro, disarming him and forcing him to reveal the true identity of Avalon. It was a name that sent shockwaves through the room—a name known to all as an elusive and powerful puppeteer in the world of assassins.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 10: Unmasking Avalon',
        chapterContent: `The revelation left the alliance stunned. Avalon, the elusive puppeteer, was none other than "The Oracle," a legendary assassin and manipulator who had operated in the shadows for decades. The Oracle's identity had remained a mystery, and his role as Avalon had allowed him to manipulate The Outer World and The Puppetmasters from within.

        Babayega knew that the final showdown was imminent. The alliance and their newfound knowledge posed a threat that The Oracle could not ignore. The battle lines were drawn, and the fate of The Outer World, The Puppetmasters, and the world itself hung in the balance.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 11: The Battle for Control',
        chapterContent: `The battle for control reached its climax as Babayega, Cipher, Seraphina, and Shadowhawk confronted The Oracle and his remaining loyalists. It was a battle that transcended mere physical combat; it was a battle of ideologies, a struggle for the very soul of the assassin's world.

        The Oracle, a master of manipulation, attempted to sway the alliance with promises of power and influence. But Babayega and his allies stood firm, their resolve unshaken by the temptations of the puppeteer.
        
        The confrontation culminated in a cataclysmic battle, with explosions, gunfire, and martial arts prowess on full display. The alliance's determination and unity proved to be their greatest strength as they systematically dismantled The Oracle's control over The Outer World and exposed The Puppetmasters' operations to the world.`,
        publicationDate: 'October 1, 2023',
      },
    {
        chapterTitle: 'Chapter 12: The Last Laugh',
        chapterContent: `In the aftermath of the battle, the world of assassins and secret organizations was forever changed. The Outer World had been dismantled, The Puppetmasters' influence had been exposed, and The Oracle had been unmasked.

        Babayega had achieved the true last laugh, not just in the deadly competition but in bringing down the forces that sought to control it. The memory of Icarus and the sacrifices of his allies had paved the way for a new era of transparency and accountability.
        
        As he looked out over the city, he couldn't help but smile. The shadows had been lifted, and the world could no longer be manipulated by puppeteers. Babayega had proven that even in the darkest of worlds, justice could prevail.
        
        With a sense of closure, he disappeared into the shadows once more, his name whispered in awe and respect by those who knew of his legend. The last laugh had been his, and he would continue to walk the path of the assassin, ready to face whatever challenges awaited him in a world forever changed by his actions. `,
        publicationDate: 'October 1, 2023',
      }
      // Add more chapters here as needed
    // Add more chapters in a similar format
  ];
  

// Define routes
app.get('/', (req, res) => {
  // Render the book.ejs template with book data
  res.render('book', bookData);
});


app.get('/chapter1', (req, res) => {

  const chapterIndex = 0; // Index of Chapter 1 in the chapters array
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;

  const chapter1Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 1: The Gathering Storm',
        chapterContent: `The moon hung low in the inky sky as a cold wind swept through the deserted alleyways of New York City. A clandestine meeting was about to take place, one that would bring together 32 of the world's deadliest assassins. Among them was a man known only as Babayega, a name whispered in hushed tones even among the most hardened criminals.
  
        Babayega had earned his fearsome reputation through years of bloodshed and precision kills. Tonight, he had been summoned to participate in a deadly competition, a battle royale of hitmen that promised a reward beyond his wildest dreams. But for Babayega, it was never about the money. It was about proving once and for all that he was the best, that he would have the last laugh.
  
        As the hitmen gathered in the dimly lit warehouse, tension crackled in the air like electricity. Each assassin was given a sealed envelope containing the name of their target and a photograph. The rules were simple: eliminate your assigned target and survive. The last hitman standing would claim the prize.
  
        But there was a new player in town, a rival assassin known as "Big Trouble." He was a towering figure with a reputation for ruthlessness that sent shivers down the spines of even the most hardened criminals. Big Trouble was the leader of "The Outer World," a secretive group of elite assassins who operated in the shadows.
  
        Babayega couldn't ignore the challenge Big Trouble presented. He tore open his envelope and examined the contents. His target was a wealthy businessman with ties to a powerful crime syndicate. He knew the man's habits, weaknesses, and vulnerabilities. It wouldn't be long before his target met his demise.`,
        publicationDate: 'September 15, 2023',
      },
      // You can add more chapters in a similar format here
    ],
        nextChapterUrl,
  };

  // Render the chapter1.ejs template and pass the chapter1Data as the context
  res.render('chapter1', chapter1Data);
});

app.get('/chapter2', (req, res) => {
  const chapterIndex = 1; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter2Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 2: The Last Laugh',
        chapterContent: `The deadly game had begun. Hitmen vanished into the shadows, pursuing their targets with ruthless determination. Bodies piled up in the dark corners of the city, each death shrouded in mystery and gore. Babayega moved like a ghost, leaving no trace of his presence as he eliminated one target after another, all while keeping a vigilant eye out for Big Trouble.

As the competition thinned, alliances formed and shattered. Betrayal was a constant threat, and the hitmen watched their backs as much as they hunted their prey. The streets of New York ran with blood, and the city itself seemed to breathe with a malevolent energy, as if it reveled in the chaos.`,
        publicationDate: 'October 1, 2023',
      },
    ],
        prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter2.ejs template and pass the chapter2Data as the context
  res.render('chapter2', chapter2Data);
});

// Chapter 3: The Unseen Hand
app.get('/chapter3', (req, res) => {
  const chapterIndex = 2; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter3Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 3: The Unseen Hand',
        chapterContent: `As the body count continued to rise, Babayega felt a strange presence, an unseen hand guiding him through the deadly labyrinth of the competition. He had heard whispers of a mystic force at play, a hidden order that manipulated the hitmen like pawns in a grand game of death.

Babayega couldn't ignore the feeling that he was being watched, that his every move was being anticipated. But he welcomed the challenge. It fueled his determination to emerge victorious and have the last laugh.

Rumors circulated among the hitmen about various cults and factions that sought to control the outcome of the competition. There were whispers of an ancient order known as the "Keepers of Shadows," who believed that the last hitman standing would gain the power to shape the world's destiny.

Babayega had little interest in such matters, but he couldn't deny the presence of a force beyond his comprehension. It seemed to protect him, guiding his steps and ensuring his survival.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter3.ejs template and pass the chapter3Data as the context
  res.render('chapter3', chapter3Data);
});

// Chapter 4: The Fire Within
app.get('/chapter4', (req, res) => {
  const chapterIndex = 3; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter4Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 4: The Fire Within',
        chapterContent: `Amidst the chaos of the competition, Babayega returned to his hidden sanctuary—a luxurious penthouse overlooking the city. It was a place of solace and reflection, a place where he honed his skills and plotted his next moves. It was also where he kept his prized collection of rare books, each containing secrets of the assassin's trade.

But when he entered his sanctuary, he was met with a horrifying sight. His penthouse had been ransacked, and his prized collection of books lay in ashes. The walls were charred, and the acrid smell of smoke filled the air. His house and cars had been burned to the ground.

Enraged and devastated, Babayega knew that Big Trouble was responsible. It was a personal attack, a message that the competition had escalated to a new level of brutality. He had lost everything that had meant something to him.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter4.ejs template and pass the chapter4Data as the context
  res.render('chapter4', chapter4Data);
});

// Continue with chapters 5 to 12 following the same structure as above...

// Chapter 5: The Fallen Friend
app.get('/chapter5', (req, res) => {
  const chapterIndex = 4; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter5Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 5: The Fallen Friend',
        chapterContent: `Babayega had one loyal ally in this deadly game—his friend and fellow assassin, Icarus. Icarus had saved his life countless times, and together, they had taken down some of the most dangerous targets in the world.

But tragedy struck when Icarus was ambushed by a rival hitman during a mission. Babayega arrived too late to save his friend, and Icarus died in his arms. The loss was a devastating blow, and it fueled Babayega's determination to avenge his friend's death.

Before Icarus breathed his last breath, he whispered a name, "Avalon." It was a cryptic clue that Babayega knew he had to follow, a lead that could unravel the mysteries surrounding The Outer World.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter5.ejs template and pass the chapter5Data as the context
  res.render('chapter5', chapter5Data);
});

// Chapter 6: The Enigma of Avalon
app.get('/chapter6', (req, res) => {
  const chapterIndex = 5; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter6Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 6: The Enigma of Avalon',
        chapterContent: `Babayega delved into the enigma of Avalon, a name that had haunted his dreams since Icarus's death. It led him down a dark path, a trail of clues that pointed to a shadowy figure who seemed to be orchestrating the chaos of the competition.

As he unraveled the secrets of Avalon, Babayega encountered a cast of intriguing characters—a hacker known as Cipher, a femme fatale assassin named Seraphina, and a retired spy turned informant named Shadowhawk. Each held a piece of the puzzle, and together, they formed an unlikely alliance to bring down The Outer World.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter6.ejs template and pass the chapter6Data as the context
  res.render('chapter6', chapter6Data);
});

// Chapter 7: The Tangled Web
app.get('/chapter7', (req, res) => {
  const chapterIndex = 6; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter7Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 7: The Tangled Web',
        chapterContent: `The alliance pursued leads that took them from the neon-lit streets of Tokyo to the ancient catacombs beneath Rome. They uncovered a tangled web of conspiracies, hidden agendas, and double-crosses that went beyond the competition.

The Outer World, it turned out, was just a pawn in a much larger game—a game controlled by a shadowy organization known as "The Puppetmasters." This organization manipulated world events from the shadows, using assassins and mercenaries as their tools.

Babayega realized that to defeat The Outer World and uncover the truth behind Avalon, they would have to take on The Puppetmasters themselves.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter7.ejs template and pass the chapter7Data as the context
  res.render('chapter7', chapter7Data);
});


// Chapter 8: The Puppetmasters
app.get('/chapter8', (req, res) => {
  const chapterIndex = 7; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter8Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 8: The Puppetmasters',
        chapterContent: `The final confrontation with The Puppetmasters was a battle of wits and wills. The alliance faced off against a cabal of powerful individuals who had orchestrated global conflicts, assassinations, and conspiracies for centuries.

Babayega, Cipher, Seraphina, and Shadowhawk used every skill and resource at their disposal to expose the true puppeteers. The battle was a deadly chess match, with each move bringing them closer to victory or oblivion.

In a climactic showdown, the alliance confronted the leader of The Puppetmasters—a master manipulator known only as "The Maestro." It was a battle of ideologies, as The Maestro revealed his vision of a world controlled by chaos and fear.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter8.ejs template and pass the chapter8Data as the context
  res.render('chapter8', chapter8Data);
});

// Chapter 9: The Final Dance
app.get('/chapter9', (req, res) => {
  const chapterIndex = 8; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter9Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 9: The Final Dance',
        chapterContent: `The final dance between Babayega and The Maestro was a deadly ballet of bullets and blades. The Maestro, a master tactician, had orchestrated this confrontation meticulously, knowing that it was a battle of not only skill but also willpower.

Their clash echoed through a hidden underground chamber, the dim light casting long shadows on the walls. Babayega's determination to bring down The Puppetmasters fueled his every move, while The Maestro's cold, calculated demeanor masked a profound thirst for power.

The battle raged on, each combatant pushing their limits. Blades clashed, bullets pierced the air, and the room resonated with the symphony of violence. The alliance watched in awe as Babayega, driven by the memory of Icarus and the burning desire for justice, fought with unparalleled ferocity.

In a moment of cunning brilliance, Babayega outmaneuvered The Maestro, disarming him and forcing him to reveal the true identity of Avalon. It was a name that sent shockwaves through the room—a name known to all as an elusive and powerful puppeteer in the world of assassins.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter9.ejs template and pass the chapter9Data as the context
  res.render('chapter9', chapter9Data);
});

// Chapter 10: Unmasking Avalon
app.get('/chapter10', (req, res) => {
  const chapterIndex = 9; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter10Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 10: Unmasking Avalon',
        chapterContent: `The revelation left the alliance stunned. Avalon, the elusive puppeteer, was none other than "The Oracle," a legendary assassin and manipulator who had operated in the shadows for decades. The Oracle's identity had remained a mystery, and his role as Avalon had allowed him to manipulate The Outer World and The Puppetmasters from within.

Babayega knew that the final showdown was imminent. The alliance and their newfound knowledge posed a threat that The Oracle could not ignore. The battle lines were drawn, and the fate of The Outer World, The Puppetmasters, and the world itself hung in the balance.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter10.ejs template and pass the chapter10Data as the context
  res.render('chapter10', chapter10Data);
});

// Chapter 11: The Battle for Control
app.get('/chapter11', (req, res) => {
  const chapterIndex = 10; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;
    const nextChapterIndex = chapterIndex + 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
    const nextChapterUrl = nextChapterIndex < chapters.length ? `/chapter${nextChapterIndex + 1}` : null;
  const chapter11Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 11: The Battle for Control',
        chapterContent: `The battle for control reached its climax as Babayega, Cipher, Seraphina, and Shadowhawk confronted The Oracle and his remaining loyalists. It was a battle that transcended mere physical combat; it was a battle of ideologies, a struggle for the very soul of the assassin's world.

The Oracle, a master of manipulation, attempted to sway the alliance with promises of power and influence. But Babayega and his allies stood firm, their resolve unshaken by the temptations of the puppeteer.

The confrontation culminated in a cataclysmic battle, with explosions, gunfire, and martial arts prowess on full display. The alliance's determination and unity proved to be their greatest strength as they systematically dismantled The Oracle's control over The Outer World and exposed The Puppetmasters' operations to the world.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
        nextChapterUrl,
  };

  // Render the chapter11.ejs template and pass the chapter11Data as the context
  res.render('chapter11', chapter11Data);
});

// Chapter 12: The Last Laugh
app.get('/chapter12', (req, res) => {
  const chapterIndex = 12; // Index of Chapter 1 in the chapters array
    const prevChapterIndex = chapterIndex - 1;

    // Check if prevChapterIndex and nextChapterIndex are valid indices
    const prevChapterUrl = prevChapterIndex >= 0 ? `/chapter${prevChapterIndex + 1}` : null;
  const chapter12Data = {
    bookData: {
      bookTitle: 'Last Laugh',
      author: 'Babayega',
    },
    chapters: [
      {
        chapterTitle: 'Chapter 12: The Last Laugh',
        chapterContent: `In the aftermath of the battle, the world of assassins and secret organizations was forever changed. The Outer World had been dismantled, The Puppetmasters' influence had been exposed, and The Oracle had been unmasked.

Babayega had achieved the true last laugh, not just in the deadly competition but in bringing down the forces that sought to control it. The memory of Icarus and the sacrifices of his allies had paved the way for a new era of transparency and accountability.

As he looked out over the city, he couldn't help but smile. The shadows had been lifted, and the world could no longer be manipulated by puppeteers. Babayega had proven that even in the darkest of worlds, justice could prevail.

With a sense of closure, he disappeared into the shadows once more, his name whispered in awe and respect by those who knew of his legend. The last laugh had been his, and he would continue to walk the path of the assassin, ready to face whatever challenges awaited him in a world forever changed by his actions.`,
        publicationDate: 'October 1, 2023',
      },
    ],
    prevChapterUrl,
  };

  // Render the chapter12.ejs template and pass the chapter12Data as the context
  res.render('chapter12', chapter12Data);
});

// You can continue with more chapters following the same pattern...
``
// Continue with chapters 8 to 12 following the same structure as above...




// Create routes for individual chapters
for (let i = 0; i < chapters.length; i++) {
  const chapter = chapters[i];
  app.get(`/chapter${i}`, (req, res) => {
    // Render the chapter.ejs template with chapter data
    res.render('chapter', { chapter: chapter }); // Use the 'chapter' variable directly
  });
}

