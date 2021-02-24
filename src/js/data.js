const superHeroesList = [
  // "A-Bomb",
  // "Abe Sapien",
  // "Abin Sur",
  // "Abomination",
  // "Abraxas",
  // "Absorbing Man",
  // "Adam Monroe",
  // "Adam Strange",
  // "Agent 13",
  // "Agent Bob",
  // "Agent Zero",
  // "Air-Walker",
  // "Ajax",
  // "Alan Scott",
  // "Alex Mercer",
  // "Alex Woolsly",
  // "Alfred Pennyworth",
  // "Alien",
  // "Allan Quatermain",
  // "Amazo",
  // "Ammo",
  // "Ando Masahashi",
  // "Angel",
  // "Angel Dust",
  // "Angel Salvadore",
  // "Angela",
  // "Animal Man",
  // "Annihilus",
  // "Ant-Man",
  // "Ant-Man II",
  // "Anti-Monitor",
  // "Anti-Spawn",
  // "Anti-Venom",
  // "Apocalypse",
  // "Aquababy",
  // "Aqualad",
  // "Aquaman",
  // "Arachne",
  // "Archangel",
  // "Arclight",
  // "Ardina",
  // "Ares",
  // "Ariel",
  // "Armor",
  // "Arsenal",
  // "Astro Boy",
  // "Atlas",
  // "Atom",
  // "Atom Girl",
  // "Atom II",
  // "Atom III",
  // "Atom IV",
  // "Aurora",
  // "Azazel",
  // "Aztar",
  // "Bane",
  // "Banshee",
  // "Bantam",
  // "Batgirl",
  // "Batgirl III",
  // "Batgirl IV",
  // "Batgirl V",
  // "Batgirl VI",
  // "Batman",
  // "Batman II",
  // "Battlestar",
  // "Batwoman V",
  // "Beak",
  // "Beast",
  // "Beast Boy",

  // "Ben 10",
  // "Beta Ray Bill",
  // "Beyonder",
  // "Big Barda",
  // "Big Daddy",
  // "Big Man",
  // "Bill Harken",
  // "Billy Kincaid",
  // "Binary",
  // "Bionic Woman",
  // "Bird-Brain",
  // "Bird-Man",
  // "Bird-Man II",
  // "Birdman",
  // "Bishop",
  // "Bizarro",
  // "Black Abbott",
  "Black Adam",
  "Black Bolt",
  "Black Canary",
  "Black Cat",
  "Black Flash",

  "Black Knight III",
  "Black Lightning",
  "Black Mamba",
  "Black Manta",
  "Black Panther",
  "Black Widow",
  "Black Widow II",
  "Blackout",
  // "Blackwing",
  // "Blackwulf",
  // "Blade",
  // "Blaquesmith",
  // "Bling!",
  // "Blink",
  // "Blizzard",
  // "Blizzard II",
  // "Blob",
  // "Bloodaxe",
  // "Bloodhawk",
  // "Bloodwraith",
  // "Blue Beetle",
  // "Blue Beetle II",
  // "Blue Beetle III",
  // "Boba Fett",
  // "Bolt",
  // "Bomb Queen",
  // "Boom-Boom",
  // "Boomer",
  // "Booster Gold",
  // "Box",
  // "Box III",
  // "Box IV",
  // "Brainiac",
  // "Brainiac 5",
  // "Brother Voodoo",
  // "Brundlefly",
  // "Buffy",
  // "Bullseye",
  // "Bumblebee",
  // "Bumbleboy",
  // "Bushido",
  // 145	Cable
  // 146	Callisto
  // 147	Cameron Hicks
  // 148	Cannonball
  // 149	Captain America
  // 150	Captain Atom
  // 151	Captain Britain
  // 152	Captain Cold
  // 153	Captain Epic
  // 154	Captain Hindsight
  // 155	Captain Mar-vell
  // 156	Captain Marvel
  // 157	Captain Marvel
  // 158	Captain Marvel II
  // 159	Captain Midnight
  // 160	Captain Planet
  // 161	Captain Universe
  // 162	Carnage
  // 163	Cat
  // 164	Cat II
  // 165	Catwoman
  // 166	Cecilia Reyes
  // 167	Century
  // 168	Cerebra
  // 169	Chamber
  // 170	Chameleon
  // 171	Changeling
  // 172	Cheetah
  // 173	Cheetah II
  // 174	Cheetah III
  // 175	Chromos
  // 176	Chuck Norris
  // 177	Citizen Steel
  // 178	Claire Bennet
  // 179	Clea
  // 180	Cloak
  // 181	Clock King
  // 182	Cogliostro
  // 183	Colin Wagner
  // 184	Colossal Boy
  // 185	Colossus
  // 186	Copycat
  // 187	Corsair
  // 188	Cottonmouth
  // 189	Crimson Crusader
  // 190	Crimson Dynamo
  // 191	Crystal
  // 192	Curse
  // 193	Cy-Gor
  // 194	Cyborg
  // 195	Cyborg Superman
  // 196	Cyclops
  // 197	Cypher
  // 198	Dagger
  // 199	Danny Cooper
  // 200	Daphne Powell
  // 201	Daredevil
  // 202	Darkhawk
  // 203	Darkman
  // 204	Darkseid
  // 205	Darkside
  // 206	Darkstar
  // 207	Darth Maul
  // 208	Darth Vader
  // 209	Dash
  // 210	Data
  // 211	Dazzler
  // 212	Deadman
  // 213	Deadpool
  // 214	Deadshot
  // 215	Deathlok
  // 216	Deathstroke
  // 217	Demogoblin
  // 218	Destroyer
  // 219	Diamondback
  // 220	DL Hawkins
  // 221	Doc Samson
  // 222	Doctor Doom
  // 223	Doctor Doom II
  // 224	Doctor Fate
  // 225	Doctor Octopus
  // 226	Doctor Strange
  // 227	Domino
  // 228	Donatello
  // 229	Donna Troy
  // 230	Doomsday
  // 231	Doppelganger
  // 232	Dormammu
  // 233	Dr Manhattan
  // 234	Drax the Destroyer
  // 235	Ego
  // 236	Elastigirl
  // 237	Electro
  // 238	Elektra
  // 239	Elle Bishop
  // 240	Elongated Man
  // 241	Emma Frost
  // 242	Enchantress
  // 243	Energy
  // 244	ERG-1
  // #ID	Chracter Name
  // 245	Ethan Hunt
  // 246	Etrigan
  // 247	Evil Deadpool
  // 248	Evilhawk
  // 249	Exodus
  // 250	Fabian Cortez
  // 251	Falcon
  // 252	Fallen One II
  // 253	Faora
  // 254	Feral
  // 255	Fighting Spirit
  // 256	Fin Fang Foom
  // 257	Firebird
  // 258	Firelord
  // 259	Firestar
  // 260	Firestorm
  // 261	Firestorm
  // 262	Fixer
  // 263	Flash
  // 264	Flash Gordon
  // 265	Flash II
  // 266	Flash III
  // 267	Flash IV
  // 268	Forge
  // 269	Franklin Richards
  // 270	Franklin Storm
  // 271	Frenzy
  // 272	Frigga
  // 273	Galactus
  // 274	Gambit
  // 275	Gamora
  // 276	Garbage Man
  // 277	Gary Bell
  // 278	General Zod
  // 279	Genesis
  // 280	Ghost Rider
  // 281	Ghost Rider II
  // 282	Giant-Man
  // 283	Giant-Man II
  // 284	Giganta
  // 285	Gladiator
  // 286	Goblin Queen
  // 287	Godzilla
  // 288	Gog
  // 289	Goku
  // 290	Goliath
  // 291	Goliath
  // 292	Goliath
  // 293	Goliath IV
  // 294	Gorilla Grodd
  // 295	Granny Goodness
  // 296	Gravity
  // 297	Greedo
  // 298	Green Arrow
  // 299	Green Goblin
  // 300	Green Goblin II
  // 301	Green Goblin III
  // 302	Green Goblin IV
  // 303	Groot
  // 304	Guardian
  // 305	Guy Gardner
  // 306	Hal Jordan
  // 307	Han Solo
  // 308	Hancock
  // 309	Harley Quinn
  // 310	Harry Potter
  // 311	Havok
  // 312	Hawk
  // 313	Hawkeye
  // 314	Hawkeye II
  // 315	Hawkgirl
  // 316	Hawkman
  // 317	Hawkwoman
  // 318	Hawkwoman II
  // 319	Hawkwoman III
  // 320	Heat Wave
  // 321	Hela
  // 322	Hellboy
  // 323	Hellcat
  // 324	Hellstorm
  // 325	Hercules
  // 326	Hiro Nakamura
  // 327	Hit-Girl
  // 328	Hobgoblin
  // 329	Hollow
  // 330	Hope Summers
  // 331	Howard the Duck
  // 332	Hulk
  // 333	Human Torch
  // 334	Huntress
  // 335	Husk
  // 336	Hybrid
  // 337	Hydro-Man
  // 338	Hyperion
  // 339	Iceman
  // 340	Impulse
  // 341	Indiana Jones
  // 342	Indigo
  // 343	Ink
  // 344	Invisible Woman
  // 345	Iron Fist
  // 346	Iron Man
  // 347	Iron Monger
  // 348	Isis
  // 349	Jack Bauer
  // 350	Jack of Hearts
  // 351	Jack-Jack
  // 352	James Bond
  // 353	James T. Kirk
  // 354	Jar Jar Binks
  // 355	Jason Bourne
  // 356	Jean Grey
  // 357	Jean-Luc Picard
  // 358	Jennifer Kale
  // 359	Jesse Quick
  // 360	Jessica Cruz
  // 361	Jessica Jones
  // 362	Jessica Sanders
  // 363	Jigsaw
  // 364	Jim Powell
  // 365	JJ Powell
  // 366	Johann Krauss
  // 367	John Constantine
  // 368	John Stewart
  // 369	John Wraith
  // 370	Joker
  // 371	Jolt
  // 372	Jubilee
  // 373	Judge Dredd
  // 374	Juggernaut
  // 375	Junkpile
  // 376	Justice
  // 377	Jyn Erso
  // 378	K-2SO
  // 379	Kang
  // 380	Kathryn Janeway
  // 381	Katniss Everdeen
  // 382	Kevin 11
  // 383	Kick-Ass
  // 384	Kid Flash
  // 385	Kid Flash II
  // 386	Killer Croc
  // 387	Killer Frost
  // 388	Kilowog
  // 389	King Kong
  // 390	King Shark
  // 391	Kingpin
  // 392	Klaw
  // 393	Kool-Aid Man
  // 394	Kraven II
  // 395	Kraven the Hunter
  // 396	Krypto
  // 397	Kyle Rayner
  // 398	Kylo Ren
  // 399	Lady Bullseye
  // 400	Lady Deathstrike
  // 401	Leader
  // 402	Leech
  // 403	Legion
  // 404	Leonardo
  // 405	Lex Luthor
  // 406	Light Lass
  // 407	Lightning Lad
  // 408	Lightning Lord
  // 409	Living Brain
  // 410	Living Tribunal
  // 411	Liz Sherman
  // 412	Lizard
  // 413	Lobo
  // 414	Loki
  // 415	Longshot
  // 416	Luke Cage
  // 417	Luke Campbell
  // 418	Luke Skywalker
  // 419	Luna
  // 420	Lyja
  // 421	Mach-IV
  // 422	Machine Man
  // 423	Magneto
  // 424	Magog
  // 425	Magus
  // 426	Man of Miracles
  // 427	Man-Bat
  // 428	Man-Thing
  // 429	Man-Wolf
  // 430	Mandarin
  // 431	Mantis
  // 432	Martian Manhunter
  // 433	Marvel Girl
  // 434	Master Brood
  // 435	Master Chief
  // 436	Match
  // 437	Matt Parkman
  // 438	Maverick
  // 439	Maxima
  // 440	Maya Herrera
  // 441	Medusa
  // 442	Meltdown
  // 443	Mephisto
  // 444	Mera
  // 445	Metallo
  // 446	Metamorpho
  // 447	Meteorite
  // 448	Metron
  // 449	Micah Sanders
  // 450	Michelangelo
  // 451	Micro Lad
  // 452	Mimic
  // 453	Minna Murray
  // 454	Misfit
  // 455	Miss Martian
  // 456	Mister Fantastic
  // 457	Mister Freeze
  // 458	Mister Knife
  // 459	Mister Mxyzptlk
  // 460	Mister Sinister
  // 461	Mister Zsasz
  // 462	Mockingbird
  // 463	MODOK
  // 464	Mogo
  // 465	Mohinder Suresh
  // 466	Moloch
  // 467	Molten Man
  // 468	Monarch
  // 469	Monica Dawson
  // 470	Moon Knight
  // 471	Moonstone
  // 472	Morlun
  // 473	Morph
  // 474	Moses Magnum
  // 475	Mr Immortal
  // 476	Mr Incredible
  // 477	Ms Marvel II
  // 478	Multiple Man
  // 479	Mysterio
  // 480	Mystique
  // 481	Namor
  // 482	Namor
  // 483	Namora
  // 484	Namorita
  // 485	Naruto Uzumaki
  // 486	Nathan Petrelli
  // 487	Nebula
  // 488	Negasonic Teenage Warhead
  // #ID	Chracter Name
  // 489	Nick Fury
  // 490	Nightcrawler
  // 491	Nightwing
  // 492	Niki Sanders
  // 493	Nina Theroux
  // 494	Nite Owl II
  // 495	Northstar
  // 496	Nova
  // 497	Nova
  // 498	Odin
  // 499	Offspring
  // 500	Omega Red
  // 501	Omniscient
  // 502	One Punch Man
  // 503	One-Above-All
  // 504	Onslaught
  // 505	Oracle
  // 506	Osiris
  // 507	Overtkill
  // 508	Ozymandias
  // 509	Parademon
  // 510	Paul Blart
  // 511	Penance
  // 512	Penance I
  // 513	Penance II
  // 514	Penguin
  // 515	Phantom
  // 516	Phantom Girl
  // 517	Phoenix
  // 518	Plantman
  // 519	Plastic Lad
  // 520	Plastic Man
  // 521	Plastique
  // 522	Poison Ivy
  // 523	Polaris
  // 524	Power Girl
  // 525	Power Man
  // 526	Predator
  // 527	Professor X
  // 528	Professor Zoom
  // 529	Psylocke
  // 530	Punisher
  // 531	Purple Man
  // 532	Pyro
  // 533	Q
  // 534	Quantum
  // 535	Question
  // 536	Quicksilver
  // 537	Quill
  // 538	Ra's Al Ghul
  // 539	Rachel Pirzad
  // 540	Rambo
  // 541	Raphael
  // 542	Raven
  // 543	Ray
  // 544	Razor-Fist II
  // 545	Red Arrow
  // 546	Red Hood
  // 547	Red Hulk
  // 548	Red Mist
  // 549	Red Robin
  // 550	Red Skull
  // 551	Red Tornado
  // 552	Redeemer II
  // 553	Redeemer III
  // 554	Renata Soliz
  // 555	Rey
  // 556	Rhino
  // 557	Rick Flag
  // 558	Riddler
  // 559	Rip Hunter
  // 560	Ripcord
  // 561	Robin
  // 562	Robin II
  // 563	Robin III
  // 564	Robin V
  // 565	Robin VI
  // 566	Rocket Raccoon
  // 567	Rogue
  // 568	Ronin
  // 569	Rorschach
  // 570	Sabretooth
  // 571	Sage
  // 572	Sandman
  // 573	Sasquatch
  // 574	Sauron
  // 575	Savage Dragon
  // 576	Scarecrow
  // 577	Scarlet Spider
  // 578	Scarlet Spider II
  // 579	Scarlet Witch
  // 580	Scorpia
  // 581	Scorpion
  // 582	Sebastian Shaw
  // 583	Sentry
  // 584	Shadow King
  // 585	Shadow Lass
  // 586	Shadowcat
  // 587	Shang-Chi
  // 588	Shatterstar
  // 589	She-Hulk
  // 590	She-Thing
  // 591	Shocker
  // 592	Shriek
  // 593	Shrinking Violet
  // 594	Sif
  // 595	Silk
  // 596	Silk Spectre
  // 597	Silk Spectre II
  // 598	Silver Surfer
  // 599	Silverclaw
  // 600	Simon Baz
  // 601	Sinestro
  // 602	Siren
  // 603	Siren II
  // 604	Siryn
  // 605	Skaar
  // 606	Snake-Eyes
  // 607	Snowbird
  // 608	Sobek
  // 609	Solomon Grundy
  // 610	Songbird
  // 611	Space Ghost
  // 612	Spawn
  // 613	Spectre
  // 614	Speedball
  // 615	Speedy
  // 616	Speedy
  // 617	Spider-Carnage
  // 618	Spider-Girl
  // 619	Spider-Gwen
  // 620	Spider-Man
  // 621	Spider-Man
  // 622	Spider-Man
  // 623	Spider-Woman
  // 624	Spider-Woman II
  // 625	Spider-Woman III
  // 626	Spider-Woman IV
  // 627	Spock
  // 628	Spyke
  // 629	Stacy X
  // 630	Star-Lord
  // 631	Stardust
  // 632	Starfire
  // 633	Stargirl
  // 634	Static
  // 635	Steel
  // 636	Stephanie Powell
  // 637	Steppenwolf
  // 638	Storm
  // 639	Stormtrooper
  // 640	Sunspot
  // 641	Superboy
  // 642	Superboy-Prime
  // 643	Supergirl
  // 644	Superman
  // 645	Swamp Thing
  // 646	Swarm
  // 647	Sylar
  // 648	Synch
  // 649	T-1000
  // 650	T-800
  // 651	T-850
  // 652	T-X
  // 653	Taskmaster
  // 654	Tempest
  // 655	Thanos
  // 656	The Cape
  // 657	The Comedian
  // 658	Thing
  // 659	Thor
  // 660	Thor Girl
  // 661	Thunderbird
  // 662	Thunderbird II
  // 663	Thunderbird III
  // 664	Thunderstrike
  // 665	Thundra
  // 666	Tiger Shark
  // 667	Tigra
  // 668	Tinkerer
  // 669	Titan
  // 670	Toad
  // 671	Toxin
  // 672	Toxin
  // 673	Tracy Strauss
  // 674	Trickster
  // 675	Trigon
  // 676	Triplicate Girl
  // 677	Triton
  // 678	Two-Face
  // 679	Ultragirl
  // 680	Ultron
  // 681	Utgard-Loki
  // 682	Vagabond
  // 683	Valerie Hart
  // 684	Valkyrie
  // 685	Vanisher
  // 686	Vegeta
  // 687	Venom
  // 688	Venom II
  // 689	Venom III
  // 690	Venompool
  // 691	Vertigo II
  // 692	Vibe
  // 693	Vindicator
  // 694	Vindicator
  // 695	Violator
  // 696	Violet Parr
  // 697	Vision
  // 698	Vision II
  // 699	Vixen
  // 700	Vulcan
  // 701	Vulture
  // 702	Walrus
  // 703	War Machine
  // 704	Warbird
  // 705	Warlock
  // 706	Warp
  // 707	Warpath
  // 708	Wasp
  // 709	Watcher
  // 710	Weapon XI
  // 711	White Canary
  // 712	White Queen
  // "Wildfire",
  // "Winter Soldier",
  // "Wiz Kid",
  // "Wolfsbane",
  // "Wolverine",
  // "Wonder Girl",
  // "Wonder Man",
  // "Wonder Woman",
  // "Wondra",
  // "Wyatt Wingfoot",
  // "X-23",
  // "X-Man",
  // "Yellow Claw",
  // "Yellowjacket",
  // "Yellowjacket II",
  // "Ymir",
  // "Yoda",
  // "Zatanna",
  // "Zoom",
];
