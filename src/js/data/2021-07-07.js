dataSetVersion = "2021-07-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "World Conquest only", key: "wc" },
      { name: "Gold only", tooltip: "Gold", key: "gd" },
      { name: "World Wonder X", tooltip: "World Wonder X", key: "wwx" },
    ]
  },
  {
    name: "Remove lolis",
    key: "loli",
    tooltip: "Check this to remove any characters with controversial body types (Mainly flat chests)",
    checked: false
  },
  {
    name: "Remove booba",
    key: "booba",
    tooltip: "Check this to remove female chracters with unusually large breasts.",
    checked: false
  },
  {
    name: "Remove Unreleased Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters that are not currently usable units"
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Protagonist/Chihaya",
    img: "TnzLcWb.png",
    opts: {
      series: [ "wc", "gd", "wwx" ]
    }
  },
  {
    name: "Himiko",
    img: "5bhl3j8.png",
    opts: {
      series: [ "wc", "gd", "wwx" ]
    }
  },
  {
    name: "Oda Nobunaga",
    img: "v1mWiej.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Magoroku Kanemoto",
    img: "zPaOwgp.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Inou Tadataka",
    img: "zxFYhev.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Abe no Seimei",
    img: "3Px9veA.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Musashibō Benkei",
    img: "PKpIyxw.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Uesugi Kenshin",
    img: "T1BHrxW.png",
    opts: {
      series: [ "wc" ],
    }
  },
  {
    name: "Qin Shi Huang",
    img: "lUfh9Ve.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Lu Bu",
    img: "dxxvb9S.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sun Tzu",
    img: "2aYAzm6.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Kublai Khan",
    img: "i0HWhwT.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Marco Polo",
    img: "BYb7gdR.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Xuan Zang",
    img: "gClNxay.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Ashoka",
    img: "vol6Mas.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Alexander the Great",
    img: "5CsuVjO.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Aristotle",
    img: "1l8rh8o.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Archimedes",
    img: "y27VPHE.png",
    opts: {
      series: [ "wc", "gd" ],
      loli: true
    }
  },
  {
    name: "Diogenes",
    img: "4vtSDcP.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Gilgamesh",
    img: "nLlgP9N.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Enkidu",
    img: "RHhPsZG.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Hammurabi",
    img: "RAUMJ6g.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Tutankhamun",
    img: "7q3mXRq.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Cambyses",
    img: "JAiPL17.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Ishikawa Goemon",
    img: "iDySQzB.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Joan of Arc",
    img: "ORlEotY.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Vlad the Impaler",
    img: "tXWFjDW.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Galileo",
    img: "IS55rwW.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Kamehameha",
    img: "V625ldq.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "William Kidd",
    img: "p5GvxJ4.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Francis Drake",
    img: "W97kEhH.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Teach the Blackbeard",
    img: "RTLMzHn.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Billy the Kid",
    img: "2h3S2uz.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Columbus",
    img: "BJrqiF2.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Geronimo",
    img: "Ynw0hwD.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Huayna Capac",
    img: "MvCdDxe.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Montezuma",
    img: "QfygP3O.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Ivan the Terrible",
    img: "HnBCTDC.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Rasputin",
    img: "OXdyOBF.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Copernicus",
    img: "HqCDdwu.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Captain Cook",
    img: "xIQ7kM6.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Magellan",
    img: "wNbCrmo.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Caesar",
    img: "uAz001r.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Hannibal",
    img: "onebeQk.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Leonardo Da Vinci",
    img: "VhVCN2y.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Nero",
    img: "sg6QNfb.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Beethoven",
    img: "283hlS1.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Faust",
    img: "2BmVzAQ.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Charlemagne",
    img: "SBMZXQH.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Atlas",
    img: "LEc1mt5.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Nostradamus",
    img: "NEhwvxH.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Lancelot",
    img: "jgBJX62.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Sir Mordred",
    img: "ihXvDtP.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Percival",
    img: "S2KaRtC.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Bedivere",
    img: "sOb4hde.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Sir Bors",
    img: "3qMSfrv.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Tristan",
    img: "IENBwg5.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Kay",
    img: "s0rwLEl.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Ywain",
    img: "UYjDwq7.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Palamedes",
    img: "UkiwWsv.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Galahad",
    img: "7WVKp0N.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Gawain",
    img: "KpeFXtF.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Gawain (Night)",
    img: "Q1hGZop.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "King Arthur",
    img: "kp53NqF.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Sir Balin",
    img: "oUajU8A.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Achilles",
    img: "HwrhRqa.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Cu Chulainn",
    img: "vlkq3OE.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Siegfried",
    img: "qGw0zFl.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Hercules",
    img: "mHclCQJ.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
    }
  },
  {
    name: "Jiang Ziya",
    img: "0DC9qox.png",
    opts: {
      series: [ "wc", "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Date Masamune",
    img: "m2ocmYO.png",
    opts: {
      series: [ "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Sasaki Kojirou",
    img: "HgxBf7y.png",
    opts: {
      series: [ "gd"],
    }
  },
  {
    name: "Perry",
    img: "QOPRJyP.png",
    opts: {
      series: [ "gd", "wwx" ],
      loli: true
    }
  },
  {
    name: "Alwilda",
    img: "iGiWjXn.png",
    opts: {
      series: [ "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Merlin",
    img: "UByLkcE.png",
    opts: {
      series: [ "wc","gd", "wwx" ],
    }
  },
  {
    name: "Xiang Yu/Hazakura Seiso",
    img: "WXxBXYX.png",
    opts: {
      series: [ "gd", "wwx" ],
    }
  },
  {
    name: "Cleopatra",
    img: "DlB8ACM.png",
    opts: {
      series: [ "gd", "wwx" ],
      booba: true
    }
  },
  {
    name: "Marie Antoinette",
    img: "AhfV64H.png",
    opts: {
      series: [ "gd", "wwx" ],
    }
  },
  {
    name: "Aizu Hasatada",
    img: "RGnAWY8.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Ajatashatru",
    img: "JOOrVhA.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Amakusa Shiro",
    img: "OwsVD8K.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Amerigo Vespucci",
    img: "7ZWFg3U.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Appleseed",
    img: "j0se7vb.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Aterui",
    img: "G6uf2cW.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Bai Qi",
    img: "Zhbh4vq.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Bakin Takizawa",
    img: "QA9ERe4.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Bellamy",
    img: "wdawEBd.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Benjamin Franklin",
    img: "UC30s7X.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Berlichingen",
    img: "7ZfQWXl.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Bodhidharma",
    img: "VJbKESu.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Cath Pulug",
    img: "SIJV5PZ.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Catherine de'Medici",
    img: "TDvQdVW.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Catherine The Great",
    img: "JXdWr4t.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Chopin",
    img: "HQHrv4s.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Commodus",
    img: "p1f4GTG.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Cortez",
    img: "ebjO6eK.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Cuauhtémoc",
    img: "sM4EQwl.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Kōdayū Daikokuya",
    img: "5SFCcLj.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Dante",
    img: "4u3vqpZ.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Taishang Laojun",
    img: "f46Ig2j.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Darius",
    img: "yCZ7IOQ.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Darwin",
    img: "Qm8olPI.png",
    opts: {
      series: [ "wwx" ],
      booba: true,
      loli: true
    }
  },
  {
    name: "Dinadan",
    img: "Cx22TtG.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Ector",
    img: "JHW2BXT.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Elias",
    img: "AuOewbi.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "En no Gyoja",
    img: "HaQl73Y.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Eumenes",
    img: "MRb923j.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Georgius",
    img: "qiWGgLj.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Goethe",
    img: "HmHMjgI.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Grace O'Malley",
    img: "8NHzWyA.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Gustav Adolf",
    img: "rDk7FKm.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Haral",
    img: "eSfE3pO.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Hawkwood",
    img: "OaK7OSO.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Heyoka",
    img: "o1SbsgE.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Hippolyta",
    img: "8RxdVRU.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Hohenheim",
    img: "bJR8ELg.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Hugues de Payens",
    img: "KKMzA8S.png",
    opts: {
      series: [ "gd","wwx" ],
    }
  },
  {
    name: "Hunefer",
    img: "WMPlGxH.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Imhotep",
    img: "wJDpygC.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Jacques de Molay",
    img: "9JGniFn.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Jan Zikka",
    img: "urS428g.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Jessie James",
    img: "1roTVgK.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Jianzhen",
    img: "Bmm4L3h.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Kirinoe",
    img: "NaqTcYn.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Kiyomasa Kato",
    img: "e1RfgqX.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Leif Erikson",
    img: "VaeO5wd.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Liu Bang",
    img: "smzTBJv.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Lybid",
    img: "UUIFLmR.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Machiavelli",
    img: "i4IY4dI.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Mercator",
    img: "XTiFL2L.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Mihirakula",
    img: "WsTL6bh.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Murakami Takeyoshi",
    img: "HVYAGi7.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Newton",
    img: "z5u0LDw.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Nikolaus",
    img: "4sS9bWG.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Odoacer",
    img: "w8SmjXv.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Pandora (AW)",
    img: "uQDxCPA.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Pao Ding",
    img: "3Xxy8ph.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Perseus",
    img: "Lh6x8Om.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Peter Bartholomew",
    img: "236wrMK.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Pian del Carpine",
    img: "Kpn8iQi.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Pizzaro",
    img: "ZL7IGHP.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Prester John",
    img: "3qeI19F.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Robespierre",
    img: "cO3ZX74.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Rousseau",
    img: "MsOHGTx.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Rurik",
    img: "EBoRaQl.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Ryoma Sakamoto",
    img: "vDFhEy0.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Sakanoue no Tamuramaro",
    img: "xzfkCy2.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Sanada Yukimura",
    img: "8dxroSq.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Scorpion",
    img: "DJhXDwN.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Snegurochka",
    img: "eEFRAV2.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Stortebeker",
    img: "pmm4lZu.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Taliesin",
    img: "cd1lHj6.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Tancred",
    img: "WwOWTvl.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Thorfinn",
    img: "miz2Fuj.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Tsuruhime",
    img: "7TZ4QYw.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Unkei & Kaikei",
    img: "zXthzK0.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Ursula",
    img: "IsbhzGy.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Vasco da Gama",
    img: "s8atsMX.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Vasilisa",
    img: "1YeNThm.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "William Wallace",
    img: "OFjHdWy.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Wallenstein",
    img: "gvGg24X.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Wang Zhi",
    img: "duZ3Fs1.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Nagamasa Yamada",
    img: "gyb3BPT.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Ptolemy",
    img: "uJfRWVf.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Trutmose",
    img: "Sq4VO8v.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Pandora",
    img: "Jgibf51.png",
    opts: {
      series: [ "wwx" ],
      nameless: true
    }
  },
  {
    name: "Gauss",
    img: "X14y0TD.png",
    opts: {
      series: [ "wwx" ],
      booba: true
    }
  },
  {
    name: "Maui",
    img: "7zjkdEx.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Ashurbanipal",
    img: "DSzDFDc.png",
    opts: {
      series: [ "wwx" ],
      loli: true
    }
  },
  {
    name: "Rostam",
    img: "SlQK32I.png",
    opts: {
      series: [ "wwx" ],
    }
  },
  {
    name: "Napoleon",
    img: "lSWdecv.png",
    opts: {
      series: [ "wc","gd","wwx" ],
    }
  },



];
