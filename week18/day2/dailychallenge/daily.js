class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("Learn JavaScript Basics", "Alice", 300);
video1.watch();

const video2 = new Video("CSS Flexbox Tutorial", "Bob", 450);
video2.watch();