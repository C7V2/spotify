new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentColorIndex: 0,
      tracks: [
        {
          name: "Perfect",
          artist: "Ed Sheeran",
          cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
          source:"https://aac.saavncdn.com/286/71bb6cc3391ddf619a4a3f1a1134f1c4_160.mp4",
          url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=f35579c52b194035",
          favorited: false,
          colors: { background: "#6FCBE8", player: "#0A1219" }
        },
        {
          name: "The Night We Met ",
          artist: "Lord Huran",
          cover: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Night_We_Met.jpg",
          source:"https://aac.saavncdn.com/473/25c0567685e233487df2a9050478a3f8_160.mp4",
          url: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=3fce6070c66f4cbb",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#1A1A1A" }
        },
        {
          name: "Best Part(feat. H.E.R.)",
          artist: "Daniel Caeser, H.E.R.",
          cover: "https://c.saavncdn.com/219/Freudian-English-2017-20170731171840-500x500.jpg",
          source:"https://aac.saavncdn.com/219/23f196e57069e96441276d8f6d13763a_160.mp4",
          url: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux?si=da9ac9ba2168488f",
          favorited: false,
          colors: { background: "#5C5552", player: "#433633" }
        },
        {
          name: "cold/mess",
          artist: "Prateek Kuhad",
          cover: "https://c.saavncdn.com/531/cold-mess-English-2020-20201004113231-500x500.jpg",
          source:"https://aac.saavncdn.com/531/2c59ca956f332392bd5fb0bbf1f3c43b_160.mp4",
          url: "https://open.spotify.com/track/7uhINGViZPygI2AljxO8KN?si=ea5753288ef1414b",
          favorited: false,
          colors: { background: "#335C81", player: "#274060" }
        },
        {
          name: "Apocalypse",
          artist: "Cigarettes After Sex",
          cover: "https://c.saavncdn.com/407/Apocalypse-English-2017-500x500.jpg",
          source:"https://aac.saavncdn.com/407/651fb104b6da385e8ee64f1d1fc23bfa_160.mp4",
          url: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=6e1d87db0b7f496c",
          favorited: false,
          colors: { background: "#212529", player: "#343A40" }
        },
        {
          name: "I GUESS I'M IN LOVE",
          artist: "Clinton Kane",
          cover: "https://c.saavncdn.com/447/I-GUESS-I-M-IN-LOVE-English-2021-20210816232921-500x500.jpg",
          source:"https://aac.saavncdn.com/447/54b2412a22749af35f970a85df3ccf4b_160.mp4",
          url: "https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=170864c42aca4221",
          favorited: false,
          colors: { background: "#7E5A9B", player: "#63458A" }
        },
        {
          name: "Dancing With Your Ghost",
          artist: "Sasha Alex Sloan",
          cover: "https://c.saavncdn.com/074/Dancing-With-Your-Ghost-English-2019-20190624173146-500x500.jpg",
          source:"https://aac.saavncdn.com/074/5bd8605468d8c762ef3bc80a3d4d80e3_160.mp4",
          url: "https://open.spotify.com/track/1TQXIltqoZ5XXyfCbAeSQQ?si=16f624f78c7a4a32",
          favorited: false,
          colors: { background: "#635380", player: "#49306B" }
        },
        {
          name: "With You",
          artist: "Jimin",
          cover: "https://c.saavncdn.com/273/Our-Blues-Pt-4-Original-Television-Soundtrack-English-2022-20221111023102-500x500.jpg",
          source:"https://aac.saavncdn.com/273/8b5cd27ba4d93012e99103a3d1da8f58_160.mp4",
          url: "https://open.spotify.com/track/2gzhQaCTeNgxpeB2TPllyY?si=d77b3257caf549e2",
          favorited: false,
          colors: { background: "#E8E9EB", player: "#F2CCCB" }
        },
        {
          name: "Thinking Out Loud",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/835/x-English-2014-500x500.jpg",
          source:"https://aac.saavncdn.com/835/90cd4c9662551e26ad6c458d9b63178b_160.mp4",
          url: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f?si=d36c4c25a9424de6",
          favorited: false,
          colors: { background: "#8bb174", player: "#426b69" }
        },
        {
          name: "Until I Found You",
          artist: "Stephen Sanchez",
          cover: "https://c.saavncdn.com/000/Until-I-Found-You-English-2021-20210901105938-500x500.jpg",
          source:"https://aac.saavncdn.com/000/428bc701b7b9718e6f543cb6b631f5c4_160.mp4",
          url: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV?si=6e1f0c7c2adf41bd",
          favorited: false,
          colors: { background: "#6096BA", player: "#274C77" }
        },
        {
          name: "Mr. Loverman",
          artist: "Ricky Montgomery",
          cover: "https://c.saavncdn.com/357/Montgomery-Ricky-English-2016-20201214233324-500x500.jpg",
          source:"https://aac.saavncdn.com/357/afa6e9acf94e64e36751082daf2f7910_160.mp4",
          url: "https://open.spotify.com/track/2IVsRhKrx8hlQBOWy4qebo?si=297fe41c5ab84509",
          favorited: false,
          colors: { background: "#FFFFFF", player: "#000000" }
        },
        {
          name: "you were good to me",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/473/How-To-Be-Human-English-2020-20200116231422-500x500.jpg",
          source:"https://aac.saavncdn.com/473/8e32836bda1f92f4e82dda029a5f759a_160.mp4",
          url: "https://open.spotify.com/track/4CxFN5zON70B3VOPBYbd6P?si=d3fd21f660814006",
          favorited: false,
          colors: { background: "#98B4C6", player: "#D9D3D3" }
        },
        {
          name: "Make You Mine(Acoustic)",
          artist: "PUBLIC",
          cover: "https://c.saavncdn.com/807/Make-You-Mine-English-2019-20190808233058-500x500.jpg",
          source:"https://aac.saavncdn.com/807/fcb8b2b3f9dff6fd394b7f9ab56d074f_160.mp4",
          url: "https://open.spotify.com/track/5iFwAOB2TFkPJk8sMlxP8g?si=939fe462aa0b442c",
          favorited: false,
          colors: { background: "#D6FFF6", player: "#231651" }
        },
        {
          name: "this is how you fall in love",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/669/brent-ii-English-2021-20210205053353-500x500.jpg",
          source:"https://aac.saavncdn.com/669/7f8b9a7e4b387f4bda1d5e93f9480e71_160.mp4",
          url: "https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=6b3a8ebcfb3c4cac",
          favorited: false,
          colors: { background: "#9F7833", player: "#413620" }
        },
        {
          name: "Supermarket Flowers",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
          source:"https://aac.saavncdn.com/286/559d5e175fdea00090e3ae7596988376_160.mp4",
          url: "https://open.spotify.com/track/4VuS959DSpr82t3qBqCrWG?si=eb00049ae858465a",
          favorited: false,
          colors: { background: "#6FCBE8", player: "#0A1219" }
        },
        {
          name: "willow",
          artist: "Taylor Swift",
          cover: "https://c.saavncdn.com/675/evermore-English-2020-20201211103907-500x500.jpg",
          source:"https://aac.saavncdn.com/675/0330684c945a7ac8a1191f12cac6d507_160.mp4",
          url: "https://open.spotify.com/track/3Uo7WG0vmLQ07WB4BDwy7D?si=729b0d4d9a9542d0",
          favorited: false,
          colors: { background: "#7D6245", player: "#3C2A1D" }
        },
        {
          name: "It,ll Be Okay",
          artist: "Shawn Mendes",
          cover: "https://c.saavncdn.com/967/It-ll-Be-Okay-English-2021-20211202053747-500x500.jpg",
          source:"https://aac.saavncdn.com/967/0148953f46c901928495047a1973036a_160.mp4",
          url: "https://open.spotify.com/track/2KnLkZ3z7PO3kgVGHGqDpD?si=42518e21ae444173",
          favorited: false,
          colors: { background: "#212529", player: "#343A40" }
        },
        {
          name: "Never Not",
          artist: "Lauv",
          cover: "https://c.saavncdn.com/347/I-met-you-when-I-was-18-the-playlist-English-2018-20241001212018-500x500.jpg",
          source:"https://aac.saavncdn.com/347/30489cd39eae83062fae3a91af4996be_160.mp4",
          url: "https://open.spotify.com/track/3ZPBZH2k9p306C1bu7bkhC?si=a459994b79f8463b",
          favorited: false,
          colors: { background: "#D3D3D6", player: "#3C557F" }
        },
        {
          name: "Like My Father (Acoustic Version)",
          artist: "Jax",
          cover: "https://c.saavncdn.com/742/Like-My-Father-Acoustic-Version--English-2021-20210906115021-500x500.jpg",
          source:"https://aac.saavncdn.com/742/633f11638b67d9447327a4b3492b71a7_160.mp4",
          url: "https://open.spotify.com/track/5YVmHTAsdWnoanWXB7AwZX?si=118e8c0547294529",
          favorited: false,
          colors: { background: "#FAEDCD", player: "#D4A373" }
        },
        {
          name: "Glimpse of Us",
          artist: "Joji",
          cover: "https://c.saavncdn.com/016/Glimpse-of-Us-English-2022-20221006092148-500x500.jpg",
          source:"https://aac.saavncdn.com/016/d09c42a7bbc0a4bbd108805e6a5e9262_160.mp4",
          url: "https://open.spotify.com/track/4ewazQLXFTDC8XvCbhvtXs?si=1d19ae14e8674c2c",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#24292e" }
        },
        {
          name: "Love Yourself",
          artist: "Justin Bieber",
          cover: "https://c.saavncdn.com/459/Purpose-English-2015-500x500.jpg",
          source:"https://aac.saavncdn.com/459/730715ce51ce7209f66f7c6396c1a9a0_160.mp4",
          url: "https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0?si=8e1c7e6d890a4f6c",
          favorited: false,
          colors: { background: "#5C5552", player: "#433633" }
        },
        {
          name: "death bed(coffee for your head)",
          artist: "Powfu,beadbadoobee",
          cover: "https://c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg",
          source:"https://aac.saavncdn.com/180/77375fc68cbb672798c601d8047c46d1_160.mp4",
          url: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx?si=9892abfc20cd47f2",
          favorited: false,
          colors: { background: "#52528C", player: "#372554" }
        },
        {
          name: "Strawberries & Cigarettes",
          artist: "Troye Sivan",
          cover: "https://c.saavncdn.com/883/Strawberries-Cigarettes-English-2018-20190502104617-500x500.jpg",
          source:"https://aac.saavncdn.com/883/8ff1cb5c5bc50cf85052fbdf8195c295_160.mp4",
          url: "https://open.spotify.com/track/3afkJSKX0EAMsJXTZnDXXJ?si=f26a733723be4160",
          favorited: false,
          colors: { background: "#bf4342", player: "#8c1c13" }
        },
        {
          name: "Heather",
          artist: "Conan Gray",
          cover: "https://c.saavncdn.com/408/Kid-Krow-English-2020-20200320000834-500x500.jpg",
          source:"https://aac.saavncdn.com/408/d72e7e3e73ca95423e5e91f3ef435bcd_160.mp4",
          url: "https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=685cf5aecc9c44de",
          favorited: false,
          colors: { background: "#E9EAE5", player: "#b9bdc1" }
        },
        {
          name: "Reckless",
          artist: "Madison Beer",
          cover: "https://c.saavncdn.com/617/Reckless-English-2021-20210527143518-500x500.jpg",
          source:"https://aac.saavncdn.com/617/714e94a81b4b711f273b62263b412f55_160.mp4",
          url: "https://open.spotify.com/track/5ajjAnNRh8bxFvaVHzpPjh?si=23547e748b3647b3",
          favorited: false,
          colors: { background: "#462E16", player: "#241B0B" }
        },
        {
          name: "Get You The Moon",
          artist: "Kinà ft. SNØW",
          cover: "https://c.saavncdn.com/142/Get-You-The-Moon-English-2018-20231003051405-500x500.jpg",
          source:"https://aac.saavncdn.com/142/7f23e22c8d320a9ab33854092fefee8e_160.mp4",
          url: "https://open.spotify.com/track/4ZLzoOkj0MPWrTLvooIuaa?si=5340eac62c4845ce",
          favorited: false,
          colors: { background: "#313131", player: "#181818" }
        },
        {
          name: "I Like Me Better",
          artist: "Lauv",
          cover: "https://c.saavncdn.com/347/I-met-you-when-I-was-18-the-playlist-English-2018-20241001212018-500x500.jpg",
          source:"https://aac.saavncdn.com/188/2d3098fce3870b41f79bc3dad82c1ce7_160.mp4",
          url: "https://open.spotify.com/track/4MagTPnkPiDuIa4P8GtW1b?si=1d7bf12aef3646f1",
          favorited: false,
          colors: { background: "#D3D3D6", player: "#3C557F" }
        },
        {
          name: "I Like You So Much, You'll Know It",
          artist: "Ysabelle Cuevas",
          cover: "https://c.saavncdn.com/617/I-Like-You-so-Much-You-ll-Know-It-Unknown-2020-20200524133540-500x500.jpg",
          source:"https://aac.saavncdn.com/617/78fb69815bd0f29dfc6311c81e437872_160.mp4",
          url: "https://open.spotify.com/track/4CreOwx4doKJUyxRR0GjIE?si=62bd16c9ea184e47",
          favorited: false,
          colors: { background: "#988A83", player: "#362233" }
        },
        {
          name: "Talking to the Moon",
          artist: "Bruno Mars",
          cover: "https://c.saavncdn.com/517/Doo-Wops-Hooligans-English-2010-20211110051526-500x500.jpg",
          source:"https://aac.saavncdn.com/517/8268462b1137d1cd4499b00d2c7ece37_160.mp4",
          url: "https://open.spotify.com/track/161DnLWsx1i3u1JT05lzqU?si=f041a77a500f485c",
          favorited: false,
          colors: { background: "#FBF0C3", player: "#FBBE24" }
        },
        {
          name: "comethru",
          artist: "Jeremy Zucker",
          cover: "https://c.saavncdn.com/279/summer-English-2018-20240828234703-500x500.jpg",
          source:"https://aac.saavncdn.com/279/6040dbf37af3d254e8eaf90902861c28_160.mp4",
          url: "https://open.spotify.com/track/18uwL0vNUanqZH0ro2QcOP?si=291cc4685b064644",
          favorited: false,
          colors: { background: "#6D7E8E", player: "#2E3842" }
        },
        {
          name: "Fall Into Me",
          artist: "Forest Blakk",
          cover: "https://c.saavncdn.com/886/Fall-Into-Me-English-2021-20210921123516-500x500.jpg",
          source:"https://aac.saavncdn.com/886/31b71dfc7985053496eef5a5f3a524c0_160.mp4",
          url: "https://open.spotify.com/track/7Lv78wiIJcKgND9Zi7AIOt?si=0845dd5e5cba4e29",
          favorited: false,
          colors: { background: "#7F3F50", player: "#362233" }
        },
        {
          name: "Ghost",
          artist: "Justin Bieber",
          cover: "https://c.saavncdn.com/983/Justice-English-2021-20210325102906-500x500.jpg",
          source:"https://aac.saavncdn.com/983/44380309712b93debbc796eb80518592_160.mp4",
          url: "https://open.spotify.com/track/6I3mqTwhRpn34SLVafSH7G?si=512c01971ee54a11",
          favorited: false,
          colors: { background: "#18808B", player: "#214B52" }
        },
        {
          name: "Gone, Gone, Gone",
          artist: "Phillip Phillips",
          cover: "https://c.saavncdn.com/909/The-World-From-The-Side-Of-The-Moon-English-2012-20220824024545-500x500.jpg",
          source:"https://aac.saavncdn.com/909/e8ac888767021d2fc44bee767a5ce9a5_160.mp4",
          url: "https://open.spotify.com/track/56sxN1yKg1dgOZXBcAHkJG?si=ecf503a464ed49a2",
          favorited: false,
          colors: { background: "#61544C", player: "#221912" }
        },
        {
          name: "Tightrope",
          artist: "ZAYN",
          cover: "https://c.saavncdn.com/052/Nobody-Is-Listening-English-2021-20210114210552-500x500.jpg",
          source:"https://aac.saavncdn.com/052/6c139f8ef166c936481f91e18661fe33_160.mp4",
          url: "https://open.spotify.com/track/44ngiCPfS8FfdJOqN0eULl?si=7f42bf7e6db046dd",
          favorited: false,
          colors: { background: "#862C1A", player: "#141214" }
        },
        {
          name: "Give Me Your Forever",
          artist: "Zack Tabudlo",
          cover: "https://c.saavncdn.com/966/Episode-English-2021-20211014053722-500x500.jpg",
          source:"https://aac.saavncdn.com/966/d6f4ae209fdf2713d11a86701d03258e_160.mp4",
          url: "https://open.spotify.com/track/4mzP5mHkRvGxdhdGdAH7EJ?si=7c4cd388d749489e",
          favorited: false,
          colors: { background: "#5639AD", player: "#20176A" }
        },
        {
          name: "Falling",
          artist: "Harry Styles",
          cover: "https://c.saavncdn.com/213/Fine-Line-English-2019-20191211223631-500x500.jpg",
          source:"https://aac.saavncdn.com/213/588dc66958d864c841f702f1e892d87f_160.mp4",
          url: "https://open.spotify.com/track/1ZMiCix7XSAbfAJlEZWMCp?si=108c36d65d694465",
          favorited: false,
          colors: { background: "#D6888A", player: "#7D3E4E" }
        },
        {
          name: "a thousand years",
          artist: "Christina Perri",
          cover: "https://c.saavncdn.com/912/A-Thousand-Years-English-2011-20200822053427-500x500.jpg",
          source:"https://aac.saavncdn.com/912/3d068ce7502fc7d4bb839d8ed98fc9eb_160.mp4",
          url: "https://open.spotify.com/track/03H03k1F6t3VqCSPRBtuHk?si=0d2a0f6bf5214e30",
          favorited: false,
          colors: { background: "#D27645", player: "#722213" }
        },
        {
          name: "Intentions",
          artist: "Justin Bieber",
          cover: "https://c.saavncdn.com/294/Intentions-English-2020-20200207033302-500x500.jpg",
          source:"https://aac.saavncdn.com/294/5e81cf148715f8e6c21e46873bc1d800_160.mp4",
          url: "https://open.spotify.com/track/364dI1bYnvamSnBJ8JcNzN?si=95210f5027864461",
          favorited: false,
          colors: { background: "#EC4839", player: "#712227" }
        },
        {
          name: "Rewrite The Stars",
          artist: "James Arthur, Anne-Marie",
          cover: "https://c.saavncdn.com/116/The-Greatest-Showman-Reimagined-English-2018-20190604210109-500x500.jpg",
          source:"https://aac.saavncdn.com/116/d934dc2bf90b9d8a2a328e5942729b7a_160.mp4",
          url: "https://open.spotify.com/track/7FlHNJT4TC120CDvFOHzei?si=681d50887cc64483",
          favorited: false,
          colors: { background: "#67543A", player: "#222127" }
        },
        {
          name: "Be Alright",
          artist: "Dean Lewis",
          cover: "https://c.saavncdn.com/909/Be-Alright-English-2018-20180627230712-500x500.jpg",
          source:"https://aac.saavncdn.com/909/259a48b7d5988d737860a6983a43c53e_160.mp4",
          url: "https://open.spotify.com/track/3EPXxR3ImUwfayaurPi3cm?si=eb2a9d8b2ebb4b30",
          favorited: false,
          colors: { background: "#97A3AF", player: "#616F7A" }
        },
        {
          name: "Say You Won't Let Go",
          artist: "James Arthur",
          cover: "https://c.saavncdn.com/054/Say-You-Won-t-Let-Go-English-2016-500x500.jpg",
          source:"https://aac.saavncdn.com/054/9a4455d4e9a523f9001aeb0f653e1db6_160.mp4",
          url: "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=af676942d10347cd",
          favorited: false,
          colors: { background: "#BDBCC0", player: "#282C47" }
        },
        {
          name: "This Town",
          artist: "Niall Horan",
          cover: "https://c.saavncdn.com/427/This-Town-English-2016-500x500.jpg",
          source:"https://aac.saavncdn.com/427/b79e2390157e97b8bbd66f74018a44fd_160.mp4",
          url: "https://open.spotify.com/track/0qvzXomUDJVaUboy2wMfiS?si=aff393e741e142d3",
          favorited: false,
          colors: { background: "#CFCEBC", player: "#858779" }
        },
        // {
        //   name: "",
        //   artist: "",
        //   cover: "",
        //   source:"",
        //   url: "",
        //   favorited: false,
        //   colors: { background: "#988A83", player: "#362233" }
        // },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) { durmin = "0" + durmin; }
      if (dursec < 10) { dursec = "0" + dursec; }
      if (curmin < 10) { curmin = "0" + curmin; }
      if (cursec < 10) { cursec = "0" + cursec; }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) { percentage = 100; }
      if (percentage < 0) { percentage = 0; }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.changeColors();  // Update colors based on current track
      this.resetPlayer();
      localStorage.setItem("currentTrackIndex", this.currentTrackIndex);
    },
    nextTrack() {
      this.transitionName = "scale-out";
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.changeColors();  // Update colors based on current track
      this.resetPlayer();
      localStorage.setItem("currentTrackIndex", this.currentTrackIndex);
    },
    changeColors() {
      const currentTrackColors = this.currentTrack.colors;
      // Update the document background and player background colors
      document.body.style.backgroundColor = currentTrackColors.background;
      document.querySelector('.player').style.backgroundColor = currentTrackColors.player;
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      
      // Update the media session metadata to show the album cover in the notification
      this.updateMediaSession();
      
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[this.currentTrackIndex].favorited;
      this.saveFavorites();
    },
    saveFavorites() {
      const favStatus = this.tracks.map(track => track.favorited);
      localStorage.setItem('favorites', JSON.stringify(favStatus));
    },
    loadFavorites() {
      const favs = localStorage.getItem('favorites');
      if (favs) {
        const favArr = JSON.parse(favs);
        this.tracks.forEach((track, index) => {
          if (favArr[index] !== undefined) {
            track.favorited = favArr[index];
          }
        });
      }
    },
    // New method to update media session metadata and set action handlers
    updateMediaSession() {
      if ('mediaSession' in navigator) {
        // Update metadata shown in notification/lock-screen
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.currentTrack.name,
          artist: this.currentTrack.artist,
          album: "Your Album Name", // Replace if you have album info
          artwork: [
            {
              src: this.currentTrack.cover,
              sizes: '500x500',
              type: 'image/jpeg'
            }
          ]
        });
        // Set action handlers for remote controls
        navigator.mediaSession.setActionHandler('play', () => {
          this.play();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          this.play();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          this.prevTrack();
        });
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          this.nextTrack();
        });
        // Workaround: repurpose the "seekbackward" action to toggle favorite.
        // Note: This means you lose the default "seekbackward" function in the notification.
        navigator.mediaSession.setActionHandler('seekbackward', () => {
          this.favorite();
        });
      }
    }
  },
  created() {
    this.loadFavorites();
    
    // Load the last played track index from localStorage, if available
    const savedTrackIndex = localStorage.getItem("currentTrackIndex");
    if (savedTrackIndex !== null) {
      this.currentTrackIndex = parseInt(savedTrackIndex);
    }
    
    // Set the current track based on the saved index (or default to the first track)
    this.currentTrack = this.tracks[this.currentTrackIndex];
    // Change background and player colors based on the current track
    this.changeColors();
    
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = () => {
      this.generateTime();
    };
    this.audio.onloadedmetadata = () => {
      this.generateTime();
    };
    this.audio.onended = () => {
      this.nextTrack();
      this.isTimerPlaying = true;
    };
    
    // Initialize media session metadata and action handlers on load
    this.updateMediaSession();
  }
});
