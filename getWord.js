
var words = ["abbey", "abruptly", "affix", "apostrophe", "askew", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "bikini", "blitz", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "chateau", "cobweb", "croquet", "daiquiri", "degenarative", "disavow", "duplex", "dwarf", "equip", "exodus", "fishhook", "fixable", "foxglove", "galaxy", "galvanize", "gazebo", "gizmo", "glowworm", "god", "guffaw", "hangman", "haiku", "haphazard", "hybrid", "hyperbole", "hyphen", "icebox", "injury", "ivory", "ivy", "jaundice", "jawbreaker", "jaywalk", "jazz", "jazzy", "jigsaw", "jiujitsu", "jockey", "jovial", "joyful", "juicy", "jumbo", "kazoo", "kelvin", "keyhole", "khaki", "kilobyte", "kiosk", "kiwifruit", "knapsack", "krypton", "larynx", "lepton", "luxury", "marquis", "megahertz", "metaphor",  "microwave", "muon", "mystify", "nemesis", "neutrino", "neutron", "nightclub", "nowadays", "numbskull", "octogenarian", "osteoporosis", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "penumbra", "pixel", "physical", "photon", "pneumonia", "polka", "proton", "pseudoscience", "quark", "quartz", "quiz", "quorum", "ray", "radon", "radiation", "rickshaw", "ripple", "schizophrenia", "sphinx", "spritz", "squawk", "subway", "swivel", "symmetry", "talisman", "topaz", "umbrella", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "void", "vodka", "vortex", "walkway", "waltz", "wavy", "waxy", "weird", "wheezy", "whiskey", "whomever", "wimpy", "wizard", "woozy", "xenon", "xenophobia", "xylophone", "yachtsman", "yippee", "youthful", "zephyr", "zigzag", "zilch", "zodiac", "zombie"];
var wordToGuess = words[Math.floor(Math.random() * words.length)];
document.getElementById("theword").innerHTML = wordToGuess;


var blankWord = "";
for(var i = 0 ;i < wordToGuess.length ; i++)
{
	blankWord = blankWord + '_';
}
document.getElementById("guesstheword").innerHTML = blankWord;