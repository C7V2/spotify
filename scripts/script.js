
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
      colorOptions: [
        { background: "#2F4F4F", player: "#24292e" },
        { background: "#6A5ACD", player: "#483D8B" },
        { background: "#bde0fe", player: "#a2d2ff" },
        { background: "#FFFFFF", player: "#000000" },
        { background: "#758BFD", player: "#27187E" },
        { background: "#58A4B0", player: "#373F51" },
        { background: "#648DE5", player: "#304C89" },
        { background: "#FFA5AB", player: "#A53860" },
        { background: "#9F7833", player: "#413620" },
        { background: "#52528C", player: "#372554" },
        { background: "#faedcd", player: "#d4a373" },
        { background: "#f5ebe0", player: "#d6ccc2" },
        { background: "#dfe7ef", player: "#eef3f7" },
        { background: "#b2beb5", player: "#2f4f4f" },
        { background: "#1E441E", player: "#152614" },
        { background: "#335C81", player: "#274060" },
        { background: "#9FA0FF", player: "#7F87F0" },
        { background: "#86DEB7", player: "#63B995" },
        { background: "#5C5552", player: "#433633" },
        { background: "#526760", player: "#374B4A" },
        { background: "#D6FFF6", player: "#231651" },
        { background: "#5D5E60", player: "#5D5E60" },
        { background: "#C0FDFB", player: "#64B6AC" },
        { background: "#7E5A9B", player: "#63458A" },
        { background: "#8797AF", player: "#56667A" },
        { background: "#ABD2FA", player: "#3D518C" },
        { background: "#635380", player: "#49306B" },
        { background: "#49306B", player: "#462521" },
        { background: "#6096BA", player: "#274C77" },
        { background: "#368F8B", player: "#368F8B" },
        { background: "#A7BBEC", player: "#9097C0" },
        { background: "#85BDA6", player: "#3E885B" },
        { background: "#B79CED", player: "#957FEF" },
        { background: "#EAEAEA", player: "#C0D6DF" },
        { background: "#C0D6DF", player: "#4F6D7A" },
      ],
      currentColorIndex: 0,
      tracks: [
        {
          name: "Perfect",
          artist: "Ed Sheeran",
          cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
          source: "https://hello6432673.blob.core.windows.net/hellooo/a.mp3?sp=r&st=2023-12-17T21:29:51Z&se=2030-05-09T05:29:51Z&spr=https&sv=2022-11-02&sr=b&sig=fXN%2F%2FP3I%2BKASvZoz25oFmi2rz7fG8QQtJehfg%2FAcyo8%3D",
          url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=f35579c52b194035",
          favorited: false
        },
        {
          name: "The Night We Met ",
          artist: "Lord Huran",
          cover: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Night_We_Met.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/b.mp3?sp=r&st=2023-12-17T21:28:40Z&se=2030-03-07T05:28:40Z&spr=https&sv=2022-11-02&sr=b&sig=7TJR45z0VYYKSw7d6RKg8caTIcYjmgbc4a%2F3BubdAOE%3D",
          url: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=3fce6070c66f4cbb",
          favorited: false
        },

        {
          name: "Best Part(feat. H.E.R.)",
          artist: "Daniel Caeser, H.E.R.",
          cover: "https://c.saavncdn.com/219/Freudian-English-2017-20170731171840-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/c.mp3?sp=r&st=2023-12-17T21:27:47Z&se=2030-05-09T05:27:47Z&spr=https&sv=2022-11-02&sr=b&sig=spC17%2Fa%2BXf8vKkYgtFpLqE9Ll3M2ZgAYdR8YB7uEa7A%3D",
          url: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux?si=da9ac9ba2168488f",
          favorited: false
        },

        {
          name: "cold/mess",
          artist: "Prateek Kuhad",
          cover: "https://c.saavncdn.com/531/cold-mess-English-2020-20201004113231-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/d.mp3?sp=r&st=2023-12-17T21:26:45Z&se=2030-03-15T05:26:45Z&spr=https&sv=2022-11-02&sr=b&sig=72OVdkWG88do%2FoFo5Q8%2FJNiJL62YElEH3a30eof0urk%3D",
          url: "https://open.spotify.com/track/7uhINGViZPygI2AljxO8KN?si=ea5753288ef1414b",
          favorited: false
        },
        {
          name: "Apocalypse",
          artist: "Cigarettes After Sex",
          cover: "https://c.saavncdn.com/407/Apocalypse-English-2017-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/e.mp3?sp=r&st=2023-12-17T21:17:33Z&se=2030-05-09T05:17:33Z&spr=https&sv=2022-11-02&sr=b&sig=rQlAz3xbAHdhKSXpK51I3UU8LjjAFQlArwqg48uEn5E%3D",
          url: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=6e1d87db0b7f496c",
          favorited: false
        },
        {
          name: "I GUESS I'M IN LOVE",
          artist: "Clinton Kane",
          cover: "https://c.saavncdn.com/447/I-GUESS-I-M-IN-LOVE-English-2021-20210816232921-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/f.mp3?sp=r&st=2023-12-19T12:19:44Z&se=2030-04-10T20:19:44Z&spr=https&sv=2022-11-02&sr=b&sig=VgAPcqiRJA6bPEctqj49wKuxvF%2BIfCTFpDtIjIp3D90%3D",
          url: "https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=170864c42aca4221",
          favorited: false
        },
        {
          name: "Dancing With Your Ghost",
          artist: "Sasha Alex Sloan",
          cover: "https://c.saavncdn.com/074/Dancing-With-Your-Ghost-English-2019-20190624173146-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/g.mp3?sp=r&st=2023-12-17T21:20:31Z&se=2029-11-01T05:20:31Z&spr=https&sv=2022-11-02&sr=b&sig=lgcneeGnC%2FWxH%2BzC8WdPXYy8AczFeTL8h0NsjQ5C5u0%3D",
          url: "https://open.spotify.com/track/1TQXIltqoZ5XXyfCbAeSQQ?si=16f624f78c7a4a32",
          favorited: false
        },
        {
          name: "With You",
          artist: "Jimin",
          cover: "https://c.saavncdn.com/273/Our-Blues-Pt-4-Original-Television-Soundtrack-English-2022-20221111023102-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/h.mp3?sp=r&st=2023-12-17T21:22:29Z&se=2029-07-12T05:22:29Z&spr=https&sv=2022-11-02&sr=b&sig=VH6Md6hMInJq%2F5TBzevfQwL5Hp8turAdrRFT9cV%2BMSA%3D",
          url: "https://open.spotify.com/track/2gzhQaCTeNgxpeB2TPllyY?si=d77b3257caf549e2",
          favorited: false
        },
        {
          name: "Thinking Out Loud",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/835/x-English-2014-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/i.mp3?sp=r&st=2023-12-17T21:24:07Z&se=2029-12-12T05:24:07Z&spr=https&sv=2022-11-02&sr=b&sig=%2FNJjwB%2FmaRKi8atAPriax55b6IkDx9fQObPAOsJvKho%3D",
          url: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f?si=d36c4c25a9424de6",
          favorited: false
        },
        {
          name: "Until I Found You",
          artist: "Stephen Sanchez",
          cover: "https://c.saavncdn.com/000/Until-I-Found-You-English-2021-20210901105938-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/j.mp3?sp=r&st=2023-12-17T21:24:57Z&se=2029-12-07T05:24:57Z&spr=https&sv=2022-11-02&sr=b&sig=p09GOGXwVxDyCkUKge%2B22VzfXk7WiSZprwVjMYa6xcA%3D",
          url: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV?si=6e1f0c7c2adf41bd",
          favorited: false
        },
        {
          name: "Mr. Loverman",
          artist: "Ricky Montgomery",
          cover: "https://c.saavncdn.com/357/Montgomery-Ricky-English-2016-20201214233324-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/k.mp3?sp=r&st=2023-12-17T21:25:49Z&se=2030-01-09T05:25:49Z&spr=https&sv=2022-11-02&sr=b&sig=hM%2B3EAGGE7rRD818Y58loCPdmZpyJn65v7pPdn8D11A%3D",
          url: "https://open.spotify.com/track/2IVsRhKrx8hlQBOWy4qebo?si=297fe41c5ab84509",
          favorited: false
        },
        {
          name: "you were good to me",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/915/you-were-good-to-me-shallou-remix--English-2020-20200612000758-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/l.mp3?sp=r&st=2023-12-20T05:26:59Z&se=2030-01-04T13:26:59Z&spr=https&sv=2022-11-02&sr=b&sig=ro5AR%2FrF3FtA9F0u3svwZB7sKYRkh0dh6BglCHAQBs4%3D",
          url: "https://open.spotify.com/track/4CxFN5zON70B3VOPBYbd6P?si=d3fd21f660814006",
          favorited: false
        },

        {
          name: "Make You Mine(Acoustic)",
          artist: "PUBLIC",
          cover: "https://c.saavncdn.com/807/Make-You-Mine-English-2019-20190808233058-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/v.mp3?sp=r&st=2023-12-21T03:25:20Z&se=2030-01-03T11:25:20Z&spr=https&sv=2022-11-02&sr=b&sig=T5mrPn7586SGh7ZiX%2FKjSb1P3Ps5GdJd%2FjtC8XitdNs%3D",
          url: "https://open.spotify.com/track/5iFwAOB2TFkPJk8sMlxP8g?si=939fe462aa0b442c",
          favorited: false
        },
        {
          name: "this is how you fall in love",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/669/brent-ii-English-2021-20210205053353-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/n.mp3?sp=r&st=2023-12-20T05:46:02Z&se=2030-01-11T13:46:02Z&spr=https&sv=2022-11-02&sr=b&sig=lFOu3wF%2BUSY0BmVg%2F48oT%2FyzHb%2BStHK87DIeenWsDUs%3D",
          url: "https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=6b3a8ebcfb3c4cac",
          favorited: false
        },
        {
          name: "Supermarket Flowers",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/o.mp3?sp=r&st=2023-12-20T05:49:50Z&se=2030-01-05T13:49:50Z&spr=https&sv=2022-11-02&sr=b&sig=obJdnw%2BmUSX7g21qbwAna9FSGBDno7db2OuN4xgiI1A%3D",
          url: "https://open.spotify.com/track/4VuS959DSpr82t3qBqCrWG?si=eb00049ae858465a",
          favorited: false
        },
        {
          name: "willow",
          artist: "Taylor Swift",
          cover: "https://c.saavncdn.com/675/evermore-English-2020-20201211103907-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/p.mp3?sp=r&st=2023-12-20T05:50:29Z&se=2030-05-01T13:50:29Z&spr=https&sv=2022-11-02&sr=b&sig=C5gIU5oS%2BEoZqa8G7pbCan1LgDmlsyamEkkTpIK3I%2F0%3D",
          url: "https://open.spotify.com/track/3Uo7WG0vmLQ07WB4BDwy7D?si=729b0d4d9a9542d0",
          favorited: false
        },
        {
          name: "It,ll Be Okay",
          artist: "Shawn Mendes",
          cover: "https://c.saavncdn.com/967/It-ll-Be-Okay-English-2021-20211202053747-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/q.mp3?sp=r&st=2023-12-20T05:51:09Z&se=2030-01-12T13:51:09Z&spr=https&sv=2022-11-02&sr=b&sig=LdsVl2F4zUOodtdbzroNfd60KwK7%2FZmpwiBaIMnJoYc%3D",
          url: "https://open.spotify.com/track/2KnLkZ3z7PO3kgVGHGqDpD?si=42518e21ae444173",
          favorited: false
        },
        {
          name: "Never Not",
          artist: "Lauv",
          cover: "https://c.saavncdn.com/216/Never-Not-English-2018-20230426131329-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/r.mp3?sp=r&st=2023-12-20T05:51:40Z&se=2030-01-12T13:51:40Z&spr=https&sv=2022-11-02&sr=b&sig=LR1enFyyP68ESdXZ8aQdlinVp53hQ%2BIWbRso1QpTcWk%3D",
          url: "https://open.spotify.com/track/3ZPBZH2k9p306C1bu7bkhC?si=a459994b79f8463b",
          favorited: false
        },
        {
          name: "Like My Father",
          artist: "Jax",
          cover: "https://c.saavncdn.com/833/Like-My-Father-English-2021-20210531115941-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/s.mp3?sp=r&st=2023-12-20T05:52:14Z&se=2030-01-05T13:52:14Z&spr=https&sv=2022-11-02&sr=b&sig=TLdmyowDYSmQ12kSoqU8TSw49l0yrcao7XV1S7I6fAo%3D",
          url: "https://open.spotify.com/track/5YVmHTAsdWnoanWXB7AwZX?si=118e8c0547294529",
          favorited: false
        },
        {
          name: "Glimpse of Us",
          artist: "Joji",
          cover: "https://c.saavncdn.com/016/Glimpse-of-Us-English-2022-20221006092148-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/t.mp3?sp=r&st=2023-12-20T05:54:38Z&se=2030-01-02T13:54:38Z&spr=https&sv=2022-11-02&sr=b&sig=OZQQaZerOzDFwlu2AnREaQXXuUD9CPUOlUaFJq0HYCs%3D",
          url: "https://open.spotify.com/track/4ewazQLXFTDC8XvCbhvtXs?si=1d19ae14e8674c2c",
          favorited: false
        },
        {
          name: "Mistletoe",
          artist: "Justin Bieber",
          cover: "https://c.saavncdn.com/894/Mistletoe-English-2011-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/u.mp3?sp=r&st=2023-12-20T05:53:23Z&se=2030-01-11T13:53:23Z&spr=https&sv=2022-11-02&sr=b&sig=WoMfWjvk%2BJmwVVISKjP860FSdqLDY0j%2Ft%2B5jLFB6vxU%3D",
          url: "https://open.spotify.com/track/7xapw9Oy21WpfEcib2ErSA?si=715f8124d17944b8",
          favorited: false
        },
        {
          name: "death bed(coffee for your head)",
          artist: "Powfu,beadbadoobee",
          cover: "https://c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/w.mp3?sp=r&st=2023-12-21T16:07:19Z&se=2030-01-12T00:07:19Z&spr=https&sv=2022-11-02&sr=b&sig=48ZrJGmUkHTTcW1fu1Rjuv0c42FIW8eKTSx0IKDBn9M%3D",
          url: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx?si=9892abfc20cd47f2",
          favorited: false
        },
        {
          name: "Strawberries & Cigarettes",
          artist: "Troye Sivan",
          cover: "https://c.saavncdn.com/883/Strawberries-Cigarettes-English-2018-20190502104617-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/x.mp3?sp=r&st=2023-12-21T16:08:07Z&se=2030-01-12T00:08:07Z&spr=https&sv=2022-11-02&sr=b&sig=psR%2BrFg9GYFSZbuHiN6FDBGyY%2BjHhdD5b2nOHaz%2FuOQ%3D",
          url: "https://open.spotify.com/track/3afkJSKX0EAMsJXTZnDXXJ?si=f26a733723be4160",
          favorited: false
        },
        {
          name: "Heather",
          artist: "Conan Gray",
          cover: "https://c.saavncdn.com/408/Kid-Krow-English-2020-20200320000834-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/y.mp3?sp=r&st=2023-12-21T16:08:53Z&se=2030-11-04T00:08:53Z&spr=https&sv=2022-11-02&sr=b&sig=fMAm701ZSjusUfZijh6CYp09M8qouvEBPyKB90VHLeQ%3D",
          url: "https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=685cf5aecc9c44de",
          favorited: false
        },
        {
          name: "Reckless ",
          artist: "Madison Beer",
          cover: "https://c.saavncdn.com/617/Reckless-English-2021-20210527143518-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/z.mp3?sp=r&st=2023-12-21T16:10:14Z&se=2030-02-08T00:10:14Z&spr=https&sv=2022-11-02&sr=b&sig=Hyxr94xl%2FbF%2BwjyDhhAYt66pFe77ZDWeo8%2FPFuIgLxs%3D",
          url: "https://open.spotify.com/track/5ajjAnNRh8bxFvaVHzpPjh?si=23547e748b3647b3",
          favorited: false
        }
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
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
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
      this.isShowCover = false;
      
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
        this.changeColors();
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
        this.changeColors();
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      
    },
    changeColors() {
  // Change background and player colors using a random color combination
  const randomIndex = Math.floor(Math.random() * this.colorOptions.length);
  const randomColors = this.colorOptions[randomIndex];
  document.body.style.backgroundColor = randomColors.background;
  // Update the player background color
  document.querySelector('.player').style.backgroundColor = randomColors.player;
},

    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
