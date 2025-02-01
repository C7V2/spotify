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
          source: "https://hello6432673.blob.core.windows.net/hellooo/a.mp3?sp=r&st=2023-12-17T21:29:51Z&se=2030-05-09T05:29:51Z&spr=https&sv=2022-11-02&sr=b&sig=fXN%2F%2FP3I%2BKASvZoz25oFmi2rz7fG8QQtJehfg%2FAcyo8%3D",
          url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=f35579c52b194035",
          favorited: false,
          colors: { background: "#6FCBE8", player: "#0A1219" }
        },
        {
          name: "The Night We Met ",
          artist: "Lord Huran",
          cover: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Night_We_Met.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/b.mp3?sp=r&st=2023-12-17T21:28:40Z&se=2030-03-07T05:28:40Z&spr=https&sv=2022-11-02&sr=b&sig=7TJR45z0VYYKSw7d6RKg8caTIcYjmgbc4a%2F3BubdAOE%3D",
          url: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=3fce6070c66f4cbb",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#1A1A1A" }
        },
        {
          name: "Best Part(feat. H.E.R.)",
          artist: "Daniel Caeser, H.E.R.",
          cover: "https://c.saavncdn.com/219/Freudian-English-2017-20170731171840-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/c.mp3?sp=r&st=2023-12-17T21:27:47Z&se=2030-05-09T05:27:47Z&spr=https&sv=2022-11-02&sr=b&sig=spC17%2Fa%2BXf8vKkYgtFpLqE9Ll3M2ZgAYdR8YB7uEa7A%3D",
          url: "https://open.spotify.com/track/1RMJOxR6GRPsBHL8qeC2ux?si=da9ac9ba2168488f",
          favorited: false,
          colors: { background: "#5C5552", player: "#433633" }
        },
        {
          name: "cold/mess",
          artist: "Prateek Kuhad",
          cover: "https://c.saavncdn.com/531/cold-mess-English-2020-20201004113231-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/d.mp3?sp=r&st=2023-12-17T21:26:45Z&se=2030-03-15T05:26:45Z&spr=https&sv=2022-11-02&sr=b&sig=72OVdkWG88do%2FoFo5Q8%2FJNiJL62YElEH3a30eof0urk%3D",
          url: "https://open.spotify.com/track/7uhINGViZPygI2AljxO8KN?si=ea5753288ef1414b",
          favorited: false,
          colors: { background: "#335C81", player: "#274060" }
        },
        {
          name: "Apocalypse",
          artist: "Cigarettes After Sex",
          cover: "https://c.saavncdn.com/407/Apocalypse-English-2017-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/e.mp3?sp=r&st=2023-12-17T21:17:33Z&se=2030-05-09T05:17:33Z&spr=https&sv=2022-11-02&sr=b&sig=rQlAz3xbAHdhKSXpK51I3UU8LjjAFQlArwqg48uEn5E%3D",
          url: "https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=6e1d87db0b7f496c",
          favorited: false,
          colors: { background: "#212529", player: "#343A40" }
        },
        {
          name: "I GUESS I'M IN LOVE",
          artist: "Clinton Kane",
          cover: "https://c.saavncdn.com/447/I-GUESS-I-M-IN-LOVE-English-2021-20210816232921-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/f.mp3?sp=r&st=2023-12-19T12:19:44Z&se=2030-04-10T20:19:44Z&spr=https&sv=2022-11-02&sr=b&sig=VgAPcqiRJA6bPEctqj49wKuxvF%2BIfCTFpDtIjIp3D90%3D",
          url: "https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=170864c42aca4221",
          favorited: false,
          colors: { background: "#7E5A9B", player: "#63458A" }
        },
        {
          name: "Dancing With Your Ghost",
          artist: "Sasha Alex Sloan",
          cover: "https://c.saavncdn.com/074/Dancing-With-Your-Ghost-English-2019-20190624173146-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/g.mp3?sp=r&st=2023-12-17T21:20:31Z&se=2029-11-01T05:20:31Z&spr=https&sv=2022-11-02&sr=b&sig=lgcneeGnC%2FWxH%2BzC8WdPXYy8AczFeTL8h0NsjQ5C5u0%3D",
          url: "https://open.spotify.com/track/1TQXIltqoZ5XXyfCbAeSQQ?si=16f624f78c7a4a32",
          favorited: false,
          colors: { background: "#635380", player: "#49306B" }
        },
        {
          name: "With You",
          artist: "Jimin",
          cover: "https://c.saavncdn.com/273/Our-Blues-Pt-4-Original-Television-Soundtrack-English-2022-20221111023102-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/h.mp3?sp=r&st=2023-12-17T21:22:29Z&se=2029-07-12T05:22:29Z&spr=https&sv=2022-11-02&sr=b&sig=VH6Md6hMInJq%2F5TBzevfQwL5Hp8turAdrRFT9cV%2BMSA%3D",
          url: "https://open.spotify.com/track/2gzhQaCTeNgxpeB2TPllyY?si=d77b3257caf549e2",
          favorited: false,
          colors: { background: "#E8E9EB", player: "#F2CCCB" }
        },
        {
          name: "Thinking Out Loud",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/835/x-English-2014-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/i.mp3?sp=r&st=2023-12-17T21:24:07Z&se=2029-12-12T05:24:07Z&spr=https&sv=2022-11-02&sr=b&sig=%2FNJjwB%2FmaRKi8atAPriax55b6IkDx9fQObPAOsJvKho%3D",
          url: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f?si=d36c4c25a9424de6",
          favorited: false,
          colors: { background: "#8bb174", player: "#426b69" }
        },
        {
          name: "Until I Found You",
          artist: "Stephen Sanchez",
          cover: "https://c.saavncdn.com/000/Until-I-Found-You-English-2021-20210901105938-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/j.mp3?sp=r&st=2023-12-17T21:24:57Z&se=2029-12-07T05:24:57Z&spr=https&sv=2022-11-02&sr=b&sig=p09GOGXwVxDyCkUKge%2B22VzfXk7WiSZprwVjMYa6xcA%3D",
          url: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV?si=6e1f0c7c2adf41bd",
          favorited: false,
          colors: { background: "#6096BA", player: "#274C77" }
        },
        {
          name: "Mr. Loverman",
          artist: "Ricky Montgomery",
          cover: "https://c.saavncdn.com/357/Montgomery-Ricky-English-2016-20201214233324-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/k.mp3?sp=r&st=2023-12-17T21:25:49Z&se=2030-01-09T05:25:49Z&spr=https&sv=2022-11-02&sr=b&sig=hM%2B3EAGGE7rRD818Y58loCPdmZpyJn65v7pPdn8D11A%3D",
          url: "https://open.spotify.com/track/2IVsRhKrx8hlQBOWy4qebo?si=297fe41c5ab84509",
          favorited: false,
          colors: { background: "#FFFFFF", player: "#000000" }
        },
        {
          name: "you were good to me",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/915/you-were-good-to-me-shallou-remix--English-2020-20200612000758-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/l.mp3?sp=r&st=2023-12-20T05:26:59Z&se=2030-01-04T13:26:59Z&spr=https&sv=2022-11-02&sr=b&sig=ro5AR%2FrF3FtA9F0u3svwZB7sKYRkh0dh6BglCHAQBs4%3D",
          url: "https://open.spotify.com/track/4CxFN5zON70B3VOPBYbd6P?si=d3fd21f660814006",
          favorited: false,
          colors: { background: "#98B4C6", player: "#D9D3D3" }
        },
        {
          name: "Make You Mine(Acoustic)",
          artist: "PUBLIC",
          cover: "https://c.saavncdn.com/807/Make-You-Mine-English-2019-20190808233058-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/v.mp3?sp=r&st=2023-12-21T03:25:20Z&se=2030-01-03T11:25:20Z&spr=https&sv=2022-11-02&sr=b&sig=T5mrPn7586SGh7ZiX%2FKjSb1P3Ps5GdJd%2FjtC8XitdNs%3D",
          url: "https://open.spotify.com/track/5iFwAOB2TFkPJk8sMlxP8g?si=939fe462aa0b442c",
          favorited: false,
          colors: { background: "#D6FFF6", player: "#231651" }
        },
        {
          name: "this is how you fall in love",
          artist: "Jeremy Zucker, Chelsea",
          cover: "https://c.saavncdn.com/669/brent-ii-English-2021-20210205053353-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/n.mp3?sp=r&st=2023-12-20T05:46:02Z&se=2030-01-11T13:46:02Z&spr=https&sv=2022-11-02&sr=b&sig=lFOu3wF%2BUSY0BmVg%2F48oT%2FyzHb%2BStHK87DIeenWsDUs%3D",
          url: "https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=6b3a8ebcfb3c4cac",
          favorited: false,
          colors: { background: "#9F7833", player: "#413620" }
        },
        {
          name: "Supermarket Flowers",
          artist: "Ed Sheeran",
          cover: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/o.mp3?sp=r&st=2023-12-20T05:49:50Z&se=2030-01-05T13:49:50Z&spr=https&sv=2022-11-02&sr=b&sig=obJdnw%2BmUSX7g21qbwAna9FSGBDno7db2OuN4xgiI1A%3D",
          url: "https://open.spotify.com/track/4VuS959DSpr82t3qBqCrWG?si=eb00049ae858465a",
          favorited: false,
          colors: { background: "#6FCBE8", player: "#0A1219" }
        },
        {
          name: "willow",
          artist: "Taylor Swift",
          cover: "https://c.saavncdn.com/675/evermore-English-2020-20201211103907-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/p.mp3?sp=r&st=2023-12-20T05:50:29Z&se=2030-05-01T13:50:29Z&spr=https&sv=2022-11-02&sr=b&sig=C5gIU5oS%2BEoZqa8G7pbCan1LgDmlsyamEkkTpIK3I%2F0%3D",
          url: "https://open.spotify.com/track/3Uo7WG0vmLQ07WB4BDwy7D?si=729b0d4d9a9542d0",
          favorited: false,
          colors: { background: "#7D6245", player: "#3C2A1D" }
        },
        {
          name: "It,ll Be Okay",
          artist: "Shawn Mendes",
          cover: "https://c.saavncdn.com/967/It-ll-Be-Okay-English-2021-20211202053747-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/q.mp3?sp=r&st=2023-12-20T05:51:09Z&se=2030-01-12T13:51:09Z&spr=https&sv=2022-11-02&sr=b&sig=LdsVl2F4zUOodtdbzroNfd60KwK7%2FZmpwiBaIMnJoYc%3D",
          url: "https://open.spotify.com/track/2KnLkZ3z7PO3kgVGHGqDpD?si=42518e21ae444173",
          favorited: false,
          colors: { background: "#212529", player: "#343A40" }
        },
        {
          name: "Never Not",
          artist: "Lauv",
          cover: "https://c.saavncdn.com/216/Never-Not-English-2018-20230426131329-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/r.mp3?sp=r&st=2023-12-20T05:51:40Z&se=2030-01-12T13:51:40Z&spr=https&sv=2022-11-02&sr=b&sig=LR1enFyyP68ESdXZ8aQdlinVp53hQ%2BIWbRso1QpTcWk%3D",
          url: "https://open.spotify.com/track/3ZPBZH2k9p306C1bu7bkhC?si=a459994b79f8463b",
          favorited: false,
          colors: { background: "#dfe7ef", player: "#eef3f7" }
        },
        {
          name: "Like My Father",
          artist: "Jax",
          cover: "https://c.saavncdn.com/833/Like-My-Father-English-2021-20210531115941-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/s.mp3?sp=r&st=2023-12-20T05:52:14Z&se=2030-01-05T13:52:14Z&spr=https&sv=2022-11-02&sr=b&sig=TLdmyowDYSmQ12kSoqU8TSw49l0yrcao7XV1S7I6fAo%3D",
          url: "https://open.spotify.com/track/5YVmHTAsdWnoanWXB7AwZX?si=118e8c0547294529",
          favorited: false,
          colors: { background: "#FAEDCD", player: "#D4A373" }
        },
        {
          name: "Glimpse of Us",
          artist: "Joji",
          cover: "https://c.saavncdn.com/016/Glimpse-of-Us-English-2022-20221006092148-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/t.mp3?sp=r&st=2023-12-20T05:54:38Z&se=2030-01-02T13:54:38Z&spr=https&sv=2022-11-02&sr=b&sig=OZQQaZerOzDFwlu2AnREaQXXuUD9CPUOlUaFJq0HYCs%3D",
          url: "https://open.spotify.com/track/4ewazQLXFTDC8XvCbhvtXs?si=1d19ae14e8674c2c",
          favorited: false,
          colors: { background: "#2F4F4F", player: "#24292e" }
        },
        {
          name: "Mistletoe",
          artist: "Justin Bieber",
          cover: "https://c.saavncdn.com/894/Mistletoe-English-2011-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/u.mp3?sp=r&st=2023-12-20T05:53:23Z&se=2030-01-11T13:53:23Z&spr=https&sv=2022-11-02&sr=b&sig=WoMfWjvk%2BJmwVVISKjP860FSdqLDY0j%2Ft%2B5jLFB6vxU%3D",
          url: "https://open.spotify.com/track/7xapw9Oy21WpfEcib2ErSA?si=715f8124d17944b8",
          favorited: false,
          colors: { background: "#5C5552", player: "#433633" }
        },
        {
          name: "death bed(coffee for your head)",
          artist: "Powfu,beadbadoobee",
          cover: "https://c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/w.mp3?sp=r&st=2023-12-21T16:07:19Z&se=2030-01-12T00:07:19Z&spr=https&sv=2022-11-02&sr=b&sig=48ZrJGmUkHTTcW1fu1Rjuv0c42FIW8eKTSx0IKDBn9M%3D",
          url: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx?si=9892abfc20cd47f2",
          favorited: false,
          colors: { background: "#52528C", player: "#372554" }
        },
        {
          name: "Strawberries & Cigarettes",
          artist: "Troye Sivan",
          cover: "https://c.saavncdn.com/883/Strawberries-Cigarettes-English-2018-20190502104617-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/x.mp3?sp=r&st=2023-12-21T16:08:07Z&se=2030-01-12T00:08:07Z&spr=https&sv=2022-11-02&sr=b&sig=psR%2BrFg9GYFSZbuHiN6FDBGyY%2BjHhdD5b2nOHaz%2FuOQ%3D",
          url: "https://open.spotify.com/track/3afkJSKX0EAMsJXTZnDXXJ?si=f26a733723be4160",
          favorited: false,
          colors: { background: "#bf4342", player: "#8c1c13" }
        },
        {
          name: "Heather",
          artist: "Conan Gray",
          cover: "https://c.saavncdn.com/408/Kid-Krow-English-2020-20200320000834-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/y.mp3?sp=r&st=2023-12-21T16:08:53Z&se=2030-11-04T00:08:53Z&spr=https&sv=2022-11-02&sr=b&sig=fMAm701ZSjusUfZijh6CYp09M8qouvEBPyKB90VHLeQ%3D",
          url: "https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=685cf5aecc9c44de",
          favorited: false,
          colors: { background: "#E9EAE5", player: "#b9bdc1" }
        },
        {
          name: "Reckless ",
          artist: "Madison Beer",
          cover: "https://c.saavncdn.com/617/Reckless-English-2021-20210527143518-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/z.mp3?sp=r&st=2023-12-21T16:10:14Z&se=2030-02-08T00:10:14Z&spr=https&sv=2022-11-02&sr=b&sig=Hyxr94xl%2FbF%2BwjyDhhAYt66pFe77ZDWeo8%2FPFuIgLxs%3D",
          url: "https://open.spotify.com/track/5ajjAnNRh8bxFvaVHzpPjh?si=23547e748b3647b3",
          favorited: false,
          colors: { background: "#462E16", player: "#241B0B" }
        },
        {
          name: "Why Why Why ",
          artist: "Shawn Mendes",
          cover: "https://c.saavncdn.com/531/Shawn-English-2024-20240809064633-500x500.jpg",
          source: "https://hello6432673.blob.core.windows.net/hellooo/aa.mp3?sp=r&st=2024-08-11T08:00:53Z&se=2030-08-11T16:00:53Z&spr=https&sv=2022-11-02&sr=b&sig=YiH3%2FiLUW7kgIO15YVt0a8SmYpWefMZs%2FzKOk0evTUs%3D",
          url: "https://open.spotify.com/track/52A0oY4u5ufxrHC85JGf4x?si=3933980e4e8043b6",
          favorited: false,
          colors: { background: "#969488", player: "#52534D" }
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
      // Save the current track index
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
      // Save the current track index
      localStorage.setItem("currentTrackIndex", this.currentTrackIndex);
    },
    changeColors() {
      const currentTrackColors = this.currentTrack.colors;
      document.body.style.backgroundColor = currentTrackColors.background;
      document.querySelector('.player').style.backgroundColor = currentTrackColors.player;
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    // Modified favorite method and new helper methods
    favorite() {
      // Toggle the current track's favorite status
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[this.currentTrackIndex].favorited;
      this.saveFavorites();
    },
    saveFavorites() {
      // Create an array of favorite statuses for all tracks
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
    }
  },
  created() {
    // Load favorite statuses from localStorage (if available)
    this.loadFavorites();
    
    // Load the saved track index (if any) so we start with the last played song
    const savedTrackIndex = localStorage.getItem("currentTrackIndex");
    if (savedTrackIndex !== null) {
      this.currentTrackIndex = parseInt(savedTrackIndex);
    }
    this.currentTrack = this.tracks[this.currentTrackIndex];
    
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
    
    // Also set the colors based on the current track when the app is created
    this.changeColors();
  }
});
