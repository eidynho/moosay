const randomSentences = [
    // motivational sentences
    "Believe in yourself, and amazing things will happen!",
    "Keep smiling, you never know who's falling in love with it!",
    "The world is a better place with you in it!",
    "You are amazing just the way you are!",
    "You are capable of achieving anything you set your mind to!",
    "You are loved more than you know!",
    "You are surrounded by positivity and good energy!",
    "You are unique and special in your own way, and that's what makes you beautiful!",
    "Your hard work and determination will pay off!",
    "Your heart is full of love, and it radiates out into the world!",
    "Your laughter is contagious, and it brings joy to those around you!",
    "Your presence alone brings joy and happiness to others!",

    // happy coding sentences
    "You are a visionary in the programming world, and your ideas are shaping the future of technology!",
    "You have a brilliant mind for programming, and your creations are changing the world for the better!",
    "Your coding skills are invaluable, and your contributions to the tech industry are making a huge impact!",
    "Your coding skills are exceptional, and you are making the world a better place through your work!",
    "Your passion for coding is contagious, and it inspires others to pursue a career in tech!",

    // happy sentences
    "Don't ever let anyone dull your sparkle. You are a shining star and the world needs your light.",
    "I may not know you personally, but I want you to know that I'm rooting for you and wishing you all the best.",
    "Remember that you are loved and valued, no matter what you may be going through. You are not alone.",
    "Remember to take care of yourself and prioritize your well-being. You deserve all the love and care in the world.",
    "Sending you a virtual hug and lots of love. You are appreciated and valued more than you know.",
    "Sending you love and positive vibes today and always. You are capable of achieving anything you set your mind to.",
    "You are a unique and special individual, and the world needs more people like you. Keep being your amazing self.",
    "You are enough, just the way you are. Don't ever let anyone make you feel otherwise.",
    "Your kindness and compassion are appreciated more than you know. Thank you for being such a wonderful person.",
    "Your presence in this world matters, and you are making a positive impact in ways you may not even realize. Keep being you.",

    // curious sentences
    "Ants can carry up to 50 times their body weight, making them some of the strongest animals on the planet relative to their size.",
    "Despite being the largest planet in our solar system, Jupiter has the shortest day, completing a full rotation in less than 10 hours.",
    "Despite being the smallest planet in our solar system, Mercury has the longest day, completing a full rotation in about 176 Earth days.",
    "Did you know that there are more possible iterations of a game of chess than there are atoms in the observable universe?",
    "The average human has about 100,000 hairs on their head, but redheads tend to have fewer, while blondes have the most.",
    "The deepest point on Earth, the Mariana Trench, is deeper than Mount Everest is tall.",
    "The fastest land animal is the cheetah, which can run up to 70 miles per hour for short distances.",
    "The Great Pyramids of Giza were built over 4,500 years ago, and the largest weighs over 6 million tons.",
    "The human body contains enough fat to make seven bars of soap.",
    "The oldest known living organism on Earth is a tree named Methuselah, which is over 4,800 years old.",
    "The phenomenon known as the Northern Lights, or Aurora Borealis, is caused by solar particles colliding with Earth's atmosphere and can be seen in polar regions.",
    "The world's largest cave, Son Doong Cave in Vietnam, is so big that it contains its own rainforest and can fit a 40-story skyscraper inside.",
    "The world's largest volcano, Mauna Loa in Hawaii, is also one of the most active, having erupted 33 times since its first recorded eruption in 1843.",
    "There are more trees on Earth than stars in the Milky Way galaxy.",
    "There are more possible ways to shuffle a deck of cards than there are atoms on Earth.",
    "There are over 7,000 languages spoken in the world today, but about half of them are in danger of becoming extinct.",

    // curious sentences about technology
    "The concept of a 'bug' in computer programming originated in the 1940s when a moth became trapped in the Harvard Mark II computer and caused a malfunction.",
    "The concept of a 'smartphone' was first introduced in 1992 by IBM, but it was not until the introduction of the iPhone in 2007 that the term gained widespread use.",
    "The first commercially available cell phone was the Motorola DynaTAC 8000X, which was released in 1983 and cost $3,995.",
    "The first computer mouse was invented in 1964 by Douglas Engelbart and was made of wood and metal.",
    "The first digital camera was invented by engineer Steve Sasson at Kodak in 1975, and the first photo he took with it was of a lab technician holding a plastic model of a Kodak camera.",
    "The first electronic computer, the ENIAC, was built in 1945 and weighed over 27 tons.",
    "The first ever computer virus was called the 'Creeper' virus and was created in the early 1970s as an experimental program.",
    "The first-ever text message was sent in 1992 by British engineer Neil Papworth to a colleague's phone, which simply read 'Merry Christmas.'",
    "The first-ever website domain name was registered on March 15, 1985, and was simply 'symbolics.com'.",
    "The first video uploaded to YouTube was entitled 'Me at the zoo' and was uploaded on April 23, 2005.",
    "The term 'Wi-Fi' was coined by a branding agency hired by the Wi-Fi Alliance, who aimed to create a catchier name for the technology formerly known as 'IEEE 802.11.'",
    "The term 'Bluetooth' comes from a 10th-century Danish king, Harald Bluetooth, who united Denmark and Norway, and the Bluetooth logo is a combination of the runes for 'H' and 'B.'",
    "The world's first 1-gigabyte hard drive was released by IBM in 1980 and weighed over 500 pounds.",
    "The world's first computer programmer was a woman named Ada Lovelace, who wrote the first algorithm intended to be processed by a machine in the mid-1800s.",
    "The world's first-ever emoji was created by a Japanese artist named Shigetaka Kurita in 1998 and was a simple 12x12 pixel image of a heart.",
    "The world's first website was launched on August 6, 1991, by British computer scientist Tim Berners-Lee.",
];

export function getRandomSentence(): string {
    const randomIndex = Math.floor(Math.random() * randomSentences.length);
    return randomSentences[randomIndex];
}
