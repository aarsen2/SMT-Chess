
const demonString = `[
  {
    "Name": "Demi-Fiend",
    "Tier": 5,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "-",
    "Skill": "-",
    "Description": "*Can only be King"
  },
  {
    "Name": "Demonica (SJ)",
    "Tier": 5,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "-",
    "Skill": "-",
    "Description": "*Can only be King"
  },
  {
    "Name": "Flynn",
    "Tier": 5,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "-",
    "Skill": "-",
    "Description": "*Can only be King"
  },
  {
    "Name": "Nahobino",
    "Tier": 5,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "-",
    "Skill": "-",
    "Description": "*Can only be King"
  },
  {
    "Name": "Siegfried",
    "Tier": 4,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Dark",
    "Skill": "Brave Blade",
    "Description": "Pierce"
  },
  {
    "Name": "Beelzebub",
    "Tier": 4,
    "Attack Type": "Dark",
    "Resistance": "Fire",
    "Weakness": "Light",
    "Skill": "Demonic Decree",
    "Description": "Pierce"
  },
  {
    "Name": "Metatron",
    "Tier": 4,
    "Attack Type": "Light",
    "Resistance": "Light",
    "Weakness": "Dark",
    "Skill": "Divine Judgement",
    "Description": "Pierce"
  },
  {
    "Name": "Lucifer",
    "Tier": 4,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "Light",
    "Skill": "Morning Star",
    "Description": "AOE, takes only pawns"
  },
  {
    "Name": "Loki",
    "Tier": 4,
    "Attack Type": "Ice",
    "Resistance": "Ice",
    "Weakness": "Fire",
    "Skill": "Niflheim",
    "Description": "Pierce"
  },
  {
    "Name": "Baal",
    "Tier": 4,
    "Attack Type": "Wind",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "Panta Rhei",
    "Description": "Pierce"
  },
  {
    "Name": "Surt",
    "Tier": 4,
    "Attack Type": "Fire",
    "Resistance": "Fire",
    "Weakness": "Ice",
    "Skill": "Ragnarok",
    "Description": "Pierce"
  },
  {
    "Name": "Cybele",
    "Tier": 4,
    "Attack Type": "Light",
    "Resistance": "Wind",
    "Weakness": "Phys",
    "Skill": "Samarecarm",
    "Description": "Revive pawn on bottom most possible space (starting from left side)."
  },
  {
    "Name": "Ishtar",
    "Tier": 4,
    "Attack Type": "Elec",
    "Resistance": "Elec",
    "Weakness": "Phys",
    "Skill": "Samarecarm",
    "Description": "Revive pawn on bottom most possible space (starting from left side)."
  },
  {
    "Name": "Odin",
    "Tier": 4,
    "Attack Type": "Elec",
    "Resistance": "Elec",
    "Weakness": "Wind",
    "Skill": "Thunder Reign",
    "Description": "Pierce"
  },
  {
    "Name": "Scathach",
    "Tier": 3,
    "Attack Type": "Ice",
    "Resistance": "Wind",
    "Weakness": "Fire",
    "Skill": "Bufudyne",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Ice."
  },
  {
    "Name": "Trumpeter",
    "Tier": 3,
    "Attack Type": "Support",
    "Resistance": "-",
    "Weakness": "-",
    "Skill": "Evil Melody",
    "Description": "If a piece takes him, they also die. He can still check the King."
  },
  {
    "Name": "Cu Chulainn",
    "Tier": 3,
    "Attack Type": "Wind",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "Gae Bolg",
    "Description": "Can run over up to 2 adjacent enemy pieces in a straight line as long as neither resists."
  },
  {
    "Name": "White Rider",
    "Tier": 3,
    "Attack Type": "Light",
    "Resistance": "Ice",
    "Weakness": "Fire",
    "Skill": "God's Bow",
    "Description": "Pierce"
  },
  {
    "Name": "Principality",
    "Tier": 3,
    "Attack Type": "Light",
    "Resistance": "Light",
    "Weakness": "Dark",
    "Skill": "Hamaon",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Light."
  },
  {
    "Name": "Hell Biker",
    "Tier": 3,
    "Attack Type": "Fire",
    "Resistance": "Dark",
    "Weakness": "Ice",
    "Skill": "Hell Burner",
    "Description": "Can run over up to 2 adjacent enemy pieces in a straight line as long as neither resists."
  },
  {
    "Name": "Girimekhala",
    "Tier": 3,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Light",
    "Skill": "One-Shot Kill",
    "Description": "Upon capture, roll a D6. If 6 is rolled, he can move/capture again. Can be repeated until D6 fails."
  },
  {
    "Name": "Bishamonten",
    "Tier": 3,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Dark",
    "Skill": "Primal Force",
    "Description": "Can run over up to 2 adjacent enemy pieces in a straight line as long as neither resists."
  },
  {
    "Name": "Daisoujou",
    "Tier": 3,
    "Attack Type": "Light",
    "Resistance": "Light",
    "Weakness": "Phys",
    "Skill": "Samsara",
    "Description": "Choose 2 spaces within the box to attack. Targets who resist aren't affected."
  },
  {
    "Name": "Black Rider",
    "Tier": 3,
    "Attack Type": "Dark",
    "Resistance": "Dark",
    "Weakness": "Light",
    "Skill": "Soul Divide",
    "Description": "Choose 2 spaces within the box to attack. Targets who resist aren't affected."
  },
  {
    "Name": "Seth",
    "Tier": 3,
    "Attack Type": "Wind",
    "Resistance": "Fire",
    "Weakness": "Light",
    "Skill": "Zandyne",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Wind."
  },
  {
    "Name": "Thor",
    "Tier": 3,
    "Attack Type": "Elec",
    "Resistance": "Phys",
    "Weakness": "Wind",
    "Skill": "Ziodyne",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Elec."
  },
  {
    "Name": "Sati",
    "Tier": 2,
    "Attack Type": "Fire",
    "Resistance": "Fire",
    "Weakness": "Ice",
    "Skill": "Agidyne",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Fire."
  },
  {
    "Name": "Throne",
    "Tier": 2,
    "Attack Type": "Light",
    "Resistance": "Fire",
    "Weakness": "Dark",
    "Skill": "Auto-Rakukaja",
    "Description": "Can only be taken by Almighty/Weakness for the first 3 turns"
  },
  {
    "Name": "Nekomata",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "Auto-Sukukaja",
    "Description": "For the first 3 turns, this piece may make 2 movements. An attack may only be made on the first move."
  },
  {
    "Name": "Rakshasa",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Wind",
    "Skill": "Auto-Tarukaja",
    "Description": "If he takes a piece within the first 3 turns, gets a free 1-more (doesn't need to hit weakness)"
  },
  {
    "Name": "Rangda",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Light",
    "Skill": "Counter",
    "Description": "Is counter too cheap?"
  },
  {
    "Name": "Mother Harlot",
    "Tier": 2,
    "Attack Type": "Ice",
    "Resistance": "Elec",
    "Weakness": "Phys",
    "Skill": "Death Lust",
    "Description": "FE 2 space range - can use turn to move enemy pawn forward or backward one square. *Must be a knight"
  },
  {
    "Name": "Mothman",
    "Tier": 2,
    "Attack Type": "Elec",
    "Resistance": "Elec",
    "Weakness": "Ice",
    "Skill": "Eerie Sound",
    "Description": "Pawns cannot defeat Mothman for 1 turn"
  },
  {
    "Name": "Incubus",
    "Tier": 2,
    "Attack Type": "Almighty",
    "Resistance": "Dark",
    "Weakness": "Phys",
    "Skill": "Energy Drain",
    "Description": "Ges a 1-more if taking a bishop *incubus can only be a knight (curve)"
  },
  {
    "Name": "Yaksini",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Fire",
    "Skill": "Getsu-ei",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Phys."
  },
  {
    "Name": "Forneus",
    "Tier": 2,
    "Attack Type": "Ice",
    "Resistance": "Ice",
    "Weakness": "Fire",
    "Skill": "Makarakarn",
    "Description": "Null capture for one turn. Ends turn. You can't move at beginning of turn thats it foo"
  },
  {
    "Name": "Black Frost",
    "Tier": 2,
    "Attack Type": "Dark",
    "Resistance": "Dark",
    "Weakness": "Light",
    "Skill": "Mudoon",
    "Description": "Can claim a piece from 1 space away. Target must be weak to Dark."
  },
  {
    "Name": "Matador",
    "Tier": 2,
    "Attack Type": "Wind",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "Red Capote",
    "Description": "Can move one space left or right. This uses a turn. *Can only be bishop"
  },
  {
    "Name": "Succubus",
    "Tier": 2,
    "Attack Type": "Almighty",
    "Resistance": "Dark",
    "Weakness": "Phys",
    "Skill": "Soul Drain",
    "Description": "Gets a 1-more if taking a knight *succubus can only be bishop"
  },
  {
    "Name": "Eligor",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Phys",
    "Weakness": "Elec",
    "Skill": "Sukukaja",
    "Description": "If adjacent to ally pawn at the beginning of the turn, you may move that pawn forward 2 squares."
  },
  {
    "Name": "Red Rider",
    "Tier": 2,
    "Attack Type": "Phys",
    "Resistance": "Dark",
    "Weakness": "Ice",
    "Skill": "Terror Blade",
    "Description": "Pierce"
  },
  {
    "Name": "Decarabia",
    "Tier": 2,
    "Attack Type": "Ice",
    "Resistance": "Light",
    "Weakness": "Phys",
    "Skill": "Tetrakarn",
    "Description": "Null capture for one turn. Ends turn. You can't move at beginning of turn thats it foo"
  },
  {
    "Name": "Pale Rider",
    "Tier": 2,
    "Attack Type": "Support",
    "Resistance": "Phys",
    "Weakness": "Light",
    "Skill": "Toxic Cloud",
    "Description": "If checks King, can poison adjacent piece. That piece is taken after opponent's next turn."
  },
  {
    "Name": "Ame-no-Uzume",
    "Tier": 1,
    "Attack Type": "Light",
    "Resistance": "Elec",
    "Weakness": "Phys",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Angel",
    "Tier": 1,
    "Attack Type": "Light",
    "Resistance": "Light",
    "Weakness": "Phys",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Ara Mitama",
    "Tier": 1,
    "Attack Type": "Fire",
    "Resistance": "Fire",
    "Weakness": "Ice",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Berith",
    "Tier": 1,
    "Attack Type": "Phys",
    "Resistance": "Light",
    "Weakness": "Ice",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Black Ooze",
    "Tier": 1,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "All",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Fortuna",
    "Tier": 1,
    "Attack Type": "Wind",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Hua Po",
    "Tier": 1,
    "Attack Type": "Fire",
    "Resistance": "Dark",
    "Weakness": "Phys",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Jack Frost",
    "Tier": 1,
    "Attack Type": "Ice",
    "Resistance": "Ice",
    "Weakness": "Fire",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Kusi Mitama",
    "Tier": 1,
    "Attack Type": "Wind",
    "Resistance": "Wind",
    "Weakness": "Elec",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Lilim",
    "Tier": 1,
    "Attack Type": "Dark",
    "Resistance": "Dark",
    "Weakness": "Light",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Mandrake",
    "Tier": 1,
    "Attack Type": "Elec",
    "Resistance": "Wind",
    "Weakness": "Fire",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Mokoi",
    "Tier": 1,
    "Attack Type": "Dark",
    "Resistance": "Dark",
    "Weakness": "Light",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Nigi Mitama",
    "Tier": 1,
    "Attack Type": "Ice",
    "Resistance": "Ice",
    "Weakness": "Fire",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Pixie",
    "Tier": 1,
    "Attack Type": "Wind",
    "Resistance": "Light",
    "Weakness": "Phys",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Preta",
    "Tier": 1,
    "Attack Type": "Phys",
    "Resistance": "Dark",
    "Weakness": "Elec",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Pyro Jack",
    "Tier": 1,
    "Attack Type": "Fire",
    "Resistance": "Fire",
    "Weakness": "Ice",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Saki Mitama",
    "Tier": 1,
    "Attack Type": "Elec",
    "Resistance": "Elec",
    "Weakness": "Wind",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Slime",
    "Tier": 1,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "All",
    "Skill": "-",
    "Description": "-"
  },
  {
    "Name": "Pawn",
    "Tier": 1,
    "Attack Type": "Almighty",
    "Resistance": "-",
    "Weakness": "All",
    "Skill": "-",
    "Description": "-"
  }
]
`


export const demonData = JSON.parse(demonString)
