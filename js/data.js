/* ==========================================================================
   SITE CONTENT
   Replace the placeholder values below with the real content. Everything
   the page renders is pulled from this file, so this is the only place
   you should need to edit for day-to-day content changes.
   ========================================================================== */

const SITE = {
  name: "Martin Luuk", // shown in the header and footer
  tagline: "Writer & Songwriter",
  email: "hello@example.com",
};

/* ---- Books --------------------------------------------------------------
   coverColors: two hex values used for a placeholder cover gradient.
   Swap in a real cover by adding `cover: "images/covers/book-1.jpg"` —
   the render code will use the image instead of the gradient if present.
--------------------------------------------------------------------------- */
const BOOKS = [
  {
    id: "book-1",
    title: "Jag ska sluta träffa folk och börja umgås via kommunikéer",
    year: "2005",
    publisher: "Loyal Press",
    coverColors: ["#c98a4b", "#7c4a2d"],
    description: "",
    quotes: [
      "Jag ska bygga någonting så stort och vackert att alla mina brister ska te sig små i jämförelse. Jag ska bygga något så stort så vackert att slå dig i huvudet med.",
      "Jag drömde om en torr estnisk prosa, uppklippt och omkastad som skulle ta världen med storm.",
      "Jag ville ju bara skrika, det var bra umgänge för mig, att skrika och hoppa upp och ner. När jag ser mina vänners barn hoppa upp och ner på sängen och skrika förstår jag ju att det är så man ska umgås, det är så det ska vara. Men nånstans tar den umgängesformen slut och man sätter sig i grupper och börjar definiera sig själva utifrån sin smak och sina åsikter. Jag ville ha nåt mer än så, jag ville blomma fullt ut inför er, ville ni inte ha mig?",
      "Jag spred ut ett rykte om att Erik var död. För att spe på det hela ordnade jag en minneskonsert. För att spe på det ytterligare strödde jag hans aska över en minneslund.",
      "Jag började ange mina vänner den sommaren. Först för att det gav en slags förbjuden kittling. Sen rann det bara på, tills jag en dag fann mig själv som chef för en gigantisk angiveriverksamhet med trådar enda upp till Vatikanen.",
    ],
  },
  {
    id: "book-2",
    title: "Jimmy och jag",
    year: "2006",
    publisher: "Loyal Press",
    coverColors: ["#5c6b52", "#2f3a29"],
    description: "",
    quotes: [
      "Jimmy var min första kärlek, den första som fick mig att komma av mig. Hela mitt liv hade jag letat efter någon som jag, nu hade jag äntligen hittat honom.",
      "Jag lutade mig fram i biofåtöljen för att få se filmen först. När man vet hur man vill att resten av ens liv ska bli så vill man att resten av ens liv ska börja så fort som möjligt.",
      "Jag är så ensam och ledsen. Jag skulle kunna ge upp allt för bara två minuters närhet. Jag tar bussen in till stan, sen på kvällen tar jag bussen hem igen. Jag skulle vilja ringa mina vänner, men jag väntar hellre tills de ringer mig. Jag vill att de ska ringa och fråga om jag vill komma ut ikväll och jag ska svara nej tack, ikväll ska jag stanna inne.",
      "Jag gillar inte folk. Eller...jag älskar idén med folk, sen blir det alltid så fel i slutändan.",
      "Redan nästa dag var han på väg till Medelhavet. Han sa att han kommit på en ny metod för att förgifta grundvattnet.",
      "Det enda jag sökte var skönhet, det enda som erbjöds var ”skönhet”. Jag fick leta i sprickorna, i hålen dit ”skönheten” ännu inte spridit sig.",
      "När jag dog fick jag två frågor ställda till mig. Den första var om jag ångrade något i mitt liv, den andra var om jag ville leva mitt liv om igen. Jag svarade jag ångrar allt, men jag vill inte leva mitt liv igen.",
    ],
  },
  {
    id: "book-3",
    title: "Kära Ballongis",
    year: "2006",
    publisher: "Loyal Press",
    coverColors: ["#8a6a8f", "#3f2f4a"],
    description: "",
    quotes: [
      "Jag tror nu att jag ska dö vid 42, jag vet inte varför eller hur, men jag tänker mig en ”ensam galning” som skjuter mig från ett övergivet bibliotek, eller nåt.",
      "Det är nog döden att rota i det befintliga, fy fan vad tråkigt. Man måste ha blicken fäst vid himlen, mot Gud, annars finns det ingen mening.",
      "Det känns som att din värld har växt ut igen och det kanske är lustigt att du flyttat till London, det är nästan för komiskt för att vara sant, men vad fan, det som funkar funkar, whatever gets you through the night...",
      "Du vet förut var jag alltid så överspänd, jag såg varje umgänge som ett uppträdande, även om jag bara skulle kolla på video med nån. Men även då kunde jag vara relativt avkopplad med dig.",
      "Ibland skäms jag så mycket så jag vill dö, men så inser jag att jag fortfarande inte åstadkommit nåt och då känner jag att jag inte kan dö, för det vore ännu mer skamligt att dö så här, utan att lämna nåt efter sig.",
      "Han sa ”You can shave my back if you want” och det lät som han sa ”Ta min hand, jag ska visa dig en bit av himlen”.",
      "När man varit på månen vill man inte landa på Jorden igen. Eller hur nu Buzz Aldrin sa det... (Han måste sagt det bättre? Eller kanske inte, han var astronaut, inte poet. Eller fan, det vet jag ingenting om, vad kan vara mer poetiskt än att åka till månen?)",
    ],
  },
  {
    id: "book-4",
    title: "Mamsen",
    year: "2006",
    publisher: "Loyal Press",
    coverColors: ["#b5524a", "#5a2620"],
    description: "",
    quotes: [
      "Ni ska inte skriva fula saker om mig på anslagstavlan.",
      "Gud har utrustat mig med hela regnbågens potential, jag kan spraka och gestikulera tills jag spricker för han bor i mitt andetag.",
      "Det kommer liksom i vågor, sen avtar det framåt kvällen, då lyssnar jag mest på radio. På dagarna och morgnarna däremot är jag uppe och hoppar.",
      "Man kan inte fika ensam ett helt liv, måste fika med fler, måste sprida Guds barmhärtiga nåd över fikat, till andra fikare, måste dela med mig av mitt spill.",
      "Jag har elen i mig, det sprakar om mig när mikron är på.",
      "Ni kan inte säga att Han inte är här, för jag känner Honom med mig i varje andetag jag har, utan Honom vore jag ingenting, utan Honom vore jag som ni.",
      "De sa aldrig åt mig vem jag skulle vara så jag hittade på själv. Jag tittade i tidningar och så såg hur folk var. Jag ville vara lite likadan, svänga med håret så där i slowmotion.",
      "Under allt fanns en slags knopp. Här kommer våren skrek jag. Sen ville jag bada, men isen låg fortfarande på och du tyckte det var en dum idé att gå ut och borra hål.",
      "Minns du hur jag sa att jag skulle stanna med dig för evigt och minns du hur du sen lämnade mig bara två dagar senare.",
    ],
  },
  {
    id: "book-5",
    title: "Elkomikern",
    year: "2019",
    publisher: "Natur och kultur",
    coverColors: ["#4b6a8a", "#2a3d52"],
    cover: "images/covers/elkomikern.jpg",
    description: "",
    quotes: [
      "Elektriciteten är en fri kraft, en urladdning. Först i slutet av 1700-talet lärde vi oss att tämja den och använda den till vår fördel. Vi vet hur man utvinner den ur jorden och plockar ner den från himlen, men vi kan aldrig helt förstå den. Elen gjorde världen modern, men den kan lika enkelt ta tillbaka allt och göra världen omodern igen.",
      "Skara är en fascinerande stad, en av Sveriges äldsta. Det sägs att när de första kullerstenarna lades här i slutet av 900-talet stack ormarna nyfiket upp sina långa halsar ur marken. Stenläggarna plattade till jorden med sina spadar och försökte dunka ner de hala reptilerna, men hela tiden undkom de och dök upp på nya ställen.",
      "”Tappa inte fotfästet”, hade de äldre kollegorna sagt när han var på väg upp. ”Gå inte på myten om dig själv!” Lars tyckte att de var naiva. Man ska väl vara glad och tacksam över att överhuvudtaget ha en myt om sig själv. Och att tappa fotfästet … Det är väl så man flyger?",
      "Först var det mörkt, kolsvart. Och helt tyst. När Lars rusade in small det till. Man såg Lars först här, sen där. Det blixtrade till i hela salongen; ljuset var vitt, pulserande. Sen plötsligt: en virvelvind, en motor, någonting for fram som en vettvilling, ryckigt, spastiskt som en fladdermus.",
      "Det lät som trasiga monitorer, som sprickor i substansen, längst in något som glimmade till som vitt guld – en eldkrans; ljuset igen, så starkt nu att man måste titta bort. Lars tycktes vara på flera platser samtidigt. Han skymtade till långt bak och sen genast igen framme vid scenkanten. Det blev mörkt igen. Och sen ljust. Upp och ut ur gnistorna reste sig en serie våldsamma färger: karneol, topas, krysolit, onyx och rubin, hanoi-askvitt och marssvart. Han skred sakta emot oss. Och sen ka-dunk föll han till golvet!",
      "De skulle gräva sig ner till Kina i grannens bakgård på Spejaregatan, men kom bara en halvmeter. De satte örat mot marken, men hörde ingenting. Världen kändes gigantisk, fantastisk, till för att upptäckas och erövras. De var Clark Olofsson och Svartenbrandt, de värsta jävla gangstrarna som världen sett, men de var också små pojkar, som blev oroliga så fort de inte såg mamma i fönstret längre.",
      "Han skulle åstadkomma allt han drömde om och aldrig röra en min. Han skulle inte ge intervjuer, han skulle bli en vetenskapsman, en virtuos, en tyrann. Han skulle aldrig be om lov, han skulle aldrig förklara, han skulle bara göra. Och när folk sett så skulle de förstå. Det skulle inte gå att ta sina ögon från honom.",
      "Tillsammans kastade vi oss huvudstupa ut i mänsklighetens mångtusenåriga historia. All kultur, all konst, alla egenheter var som en stor buffé för oss att festa loss på. Ge oss era halta, era lytta, degenererade, märkta, ge oss dem med udda namn, udda yrken, udda frisyrer. Vi ska suga i oss det vi vill ha och aldrig ge tillbaka.",
      "Lars kopp rann över. Han sa: ”Då skaffar jag mig en ny kopp.” Jag sa: ”Det funkar inte så, då funkar inte metaforen. Du har bara en kopp.” ”Ok, låt den rinna över”, sa han.",
      "Runtom blixtrade och dånade det som att han stod mitt i ett åskväder. Två hundra tusen volt gick genom hans kropp och efter uppvisningarna sken en gloria av ljus runt honom, och hans kläder fortsatte att spraka. Ibland slog det upp små lågor, som han snabbt släckte med fingrarna.",
      "Han läste på om Harpo Marx, Esther Williams och Harry Langdon och han stirrade fascinerat på Eadweard Muybridges bilder av djur och människor i rörelse, som om de innehöll svaret på universums gåta.",
      "Det som fick det att riktigt vattnas i munnen på honom var den unge Muhammad Ali, Cassius Clay. Han kunde första mötet med Sonny Liston utantill. Både fötterna och händerna. Minspelet. Det var en drömmatch. En kanonkula äntligen släppt fri. Om man inte kunde ha absolut närvaro, kunde man kanske lära sig hur absolut närvaro såg ut. Och sen imitera det. Han tittade på Clay om och om igen. Lättheten, piruetterna, det sköra och graciösa i det oövervinnerliga.",
      "En dag stack Lars en gaffel i eluttaget. Begeistrad såg han på hur det sprakade och fräste. Det var som en svetslåga i några sekunder, metalliska blå flisor flög ut. Sen small det till och han for tre meter bakåt, slog huvudet i väggen och svimmade av.",
      "Fyra år hade gått sedan den triumfatoriska hemkomsten och glittret och limousinerna och stadens nycklar och plaketten på hotellsvitsdörren. Fyra år sedan toppen. Lars var tjugosju nu, hans skinn hängde på honom som en nopprig urblekt tröja. Hans tidigare så triumferande kalufs var gles, spröd och torr.",
      "Vår planet, enligt det schweiziska forskarlagets sammanställning, är i sig ingenting, bara ett tomt, livlöst hölje. Avförtrollad, närmast död. Det finns ingenting där som skulle kunna tala om för oss att jorden också kan vara ett paradis, en livskälla, en mörk sexuell plats och vårt eviga hem.",
      "Lars satt ensam på sängen och drog handen genom håret. Han kände något längst ner i hårbottnen. Han gick till spegeln och inspekterade. Det var bränt, förkolnat. Hela vägen runt. Vartenda hårstrå svart som sot vid rötterna. Skalpen likaså.",
      "För det finns ett annat Sverige, ett Sverige långt innan Sverige blev det vi nu känner som Sverige. Det gamla inavlade orm-Sverige som man bara kan känna av om man sätter örat till marken och glömmer bort allt man hört och läst. Ett spritt språngande Sverige som ligger och bankar strax under ytan.",
      "Trots det beter sig invånarna som om mysteriet aldrig funnits och om det gjort det så har de aldrig trott på det själva. Tillvaron är full av svar, men vi kan inte greppa dem, för vi ställer för efterblivna frågor. Mysteriet byter skepnad och människan hänger inte med, utan kravlar runt på golvet på knäna som en vilsen man som tappat sina linser.",
      "Ett Sverige där man kunde skrämma oturen genom att stå stilla eller spotta. Där man kände till människor som lagt ägg och där man sett gäss som växte på träd, ett Sverige där det regnade mask och vattendjur. På taken till vedbon låg fisk som regnat ner från himlen och de troende sprang och köpte frackar och höga hattar för att vara finklädda till uppståndelsen, medan de mindre troende tog med sig fisken hem och åt.",
      "”Slåss slåss slåss!” hörde jag jämt upprepas när det gällde de trasiga, de sjuka. ”Vinn mot cancern! Besegra åldrandet! Slåss mot ljusets utslocknande!” Själv var jag inte lika säker. Att inte slåss kändes på något sätt som en sundare inställning.",
      "Ingenting klarar av att dras till sin spets utan att bli förvanskat eller genomskådat längs vägen. Man måste avbryta allting i förtid, då håller det sig konstant rörligt och levande.",
      "”Den som försöker säga allt säger ingenting och den som försöker säga halvt säger nästan allt.”",
      "En gång när de var unga hade Lars ätit toppslätskivling ute vid Fågelön tillsammans med Lennart och sett hur elektriciteten flög ut ur träden, hur jorden andades som en egen levande organism och han hade sett hur allting hängde ihop. Han hade känt ormarna kräla upp ur marken och in i hans huvud. Han hade sett hur de vuxna träden ammade sina barn och han hade hört dem kommunicera med varandra via jättelika sammanflätade rotsystem, som var de en enda stor varelse. Han hade spelat på vågorna som var det en gigantisk theremin och ljudet som dånade fram genom skogen lät som valsång.",
      "Lennart ställde ner kartongen på golvet och Siri packade försiktigt upp en åbäkig, vedervärdig, färgglad påfågel i papier maché. ”Jag fick den av Lars Widding och jag har aldrig vetat vad jag ska göra av den. Jag tänkte den kunde passa dig.” Tillsammans lyfte hon och Lennart upp den på sängbordet. Siri ställde sig i dörren och tog in allt. Hon nickade för sig själv. ”Den klär dig verkligen. Den har dina färger”, sa hon till slut. Fågeln var orange, brun och röd.",
      "Var de snygga var de sällan smarta, var de smarta kunde de inte ligga, kunde de ligga var de sällan roliga, var de roliga var de sällan särskilt snälla.",
      "”Vi borde aldrig ha gjort det där”, sa Lars en gång för länge sedan när de just hade börjat. ”Vad då?” frågade Lennart. ”Det där som fick dem att klappa.” ”Vad snackar du om? Det var ju det här vi alltid ville.” ”Ja, jag vet”, sa Lars och skrattade och då skrattade Lennart med.",
      "Varför är livet så litet? Varför är hålet så stort?",
    ],
  },
  {
    id: "book-6",
    title: "Ingen jag vet är i mitt träd",
    year: "",
    publisher: "",
    coverColors: ["#7a5c3d", "#3d2e1f"],
    cover: "images/covers/book-6.jpg",
    description: "",
    quotes: [],
  },
  {
    id: "book-7",
    title: "Bok 7 — titel saknas",
    year: "",
    publisher: "",
    coverColors: ["#6a4b7a", "#332040"],
    description: "",
    quotes: [],
  },
  {
    id: "book-8",
    title: "Bok 8 — titel saknas",
    year: "",
    publisher: "",
    coverColors: ["#4b7a5e", "#20402e"],
    description: "",
    quotes: [],
  },
  {
    id: "book-9",
    title: "Bok 9 — titel saknas",
    year: "",
    publisher: "",
    coverColors: ["#7a4b4b", "#402020"],
    description: "",
    quotes: [],
  },
  {
    id: "book-10",
    title: "Bok 10 — titel saknas",
    year: "",
    publisher: "",
    coverColors: ["#7a6f4b", "#403a20"],
    description: "",
    quotes: [],
  },
];

/* ---- Andra verk (other works) ---------------------------------------------
   Blank slots for pictures + titles — same idea as the BOOKS placeholders.
   Add a `cover: "images/covers/your-file.jpg"` to swap in a real picture;
   leave it out and the card falls back to a plain gradient tile.
   `description`, `year`, `quote`, and `link` (URL to the song/video) are optional.
--------------------------------------------------------------------------- */
const OTHER_WORKS = [
  {
    id: "work-1",
    title: "Helokanie",
    description: "Śląsk Polish National Song and Dance Ensemble",
    year: "1959",
    link: "https://open.spotify.com/track/1eb6WVROQYEBjS8Qzteeix?si=18b9a044747249b3&nd=1&dlsi=58d31579bc03499c&autoplay_ok=1",
    cover: "images/covers/helokanie.jpg",
    coverColors: ["#4b6a8a", "#2a3d52"],
  },
  {
    id: "work-2",
    title: "All About Eve (Allt om Eva)",
    description: "Film",
    year: "1950",
    quote:
      "You're an improbable person, Eve, and so am I. We have that in common. Also, our contempt for humanity and inability to love, and be loved, insatiable ambition, and talent. We deserve each other.",
    link: "",
    cover: "images/covers/all-about-eve.jpg",
    coverColors: ["#7a5c3d", "#3d2e1f"],
  },
  {
    id: "work-3",
    title: "We Had It All",
    description: "Donnie Fritts",
    year: "1974",
    quote:
      "Man behöver inte vara folklorist för att se det som en saga.\n\n”Jag kommer att tappa ansiktet och halva hjärnan på fyra dagar.”\n\nMen en gång i tiden hade vi allt.",
    link: "https://open.spotify.com/track/1EOkjtpoS0bBC4CrT6hQiD?si=a6088b11ae19411c&nd=1&dlsi=ed67730a06ff4532&autoplay_ok=1",
    cover: "images/covers/we-had-it-all.jpg",
    coverColors: ["#6a4b7a", "#332040"],
  },
  {
    id: "work-4",
    title: "Naked Man, Back View",
    description: "Lucian Freud — Porträtt",
    year: "1992",
    quote: "Ge mig era trötta, hopkrupna massor som längtar efter att andas fritt.",
    link: "",
    coverColors: ["#4b7a5e", "#20402e"],
  },
  {
    id: "work-5",
    title: "Stars",
    description: "Nina Simone — Uppträdande",
    year: "1976",
    quote: "Virtuositet upplöst i sömmarna och tillbaka igen. Det fanns ingen väg, vi var tvungna att staka ut den själva.",
    link: "https://www.youtube.com/watch?v=995S1v-yHE4&list=RD995S1v-yHE4&start_radio=1",
    cover: "images/covers/stars.jpg",
    coverColors: ["#7a4b4b", "#402020"],
  },
  {
    id: "work-6",
    title: "Chances Are",
    description: "The Wailers — Låt",
    year: "1968",
    quote: "",
    link: "",
    coverColors: ["#7a6f4b", "#403a20"],
  },
  { id: "work-7", title: "Verk 7 — titel saknas", coverColors: ["#c98a4b", "#7c4a2d"] },
  { id: "work-8", title: "Verk 8 — titel saknas", coverColors: ["#5c6b52", "#2f3a29"] },
];

/* ---- Right Now / Notes ----------------------------------------------------
   Fallback content only — used if Supabase isn't configured yet (see
   js/config.js). Once Supabase is set up, entries published through
   admin.html are fetched live from there instead and this array is ignored.
--------------------------------------------------------------------------- */
const NOTES = [];

/* ---- Favorite noises & places --------------------------------------------
   Keep these short and specific — texture, not description.
--------------------------------------------------------------------------- */
const FAVORITES = [
  "Rain on a tin roof, heard from inside",
  "The harbor at Lysekil, just before the boats go out",
  "A radio left on in another room",
  "The particular quiet of a house after everyone's gone to bed",
  "Gravel underfoot on a coast road in October",
  "The sound a ferry makes leaving the dock",
];
