'use strict';

class Song {
  constructor(songName, songLength) {
    this.songName = songName;
    this.songLength = songLength;
  }
  getSongName() {
    return this.songName;
  }
}

class PlayerList {
  constructor(songs) {
    this.songs = songs || [];
    this.currentTrackIndex = 0;
    if (songs && songs.length !== 0) {
      this.currentTrackName = songs[this.currentTrackIndex].getSongName();
    }
  }
  next() {
    if (this.songs && this.songs.length !== 0) {
      this.currentTrackIndex += 1;
      if (this.currentTrackIndex > this.songs.length - 1) {
        this.currentTrackIndex = 0;
      }
      this.currentTrackName = this.songs[this.currentTrackIndex].getSongName();
    }
  }
  prev() {
    if (this.songs && this.songs.length !== 0) {
      this.currentTrackIndex -= 1;
      if (this.currentTrackIndex < 0) {
        this.currentTrackIndex = this.songs.length - 1;
      }
      this.currentTrackName = this.songs[this.currentTrackIndex].getSongName();
    }
  }
  getCurrentTrack() {
    return this.currentTrackName;
  }
}

class Player {
  constructor(playerList) {
    this.playerList = new PlayerList(playerList);
    this.status = 'stop';
  }
  display() {
    if (this.playerList.songs.length > 0) {
      return 'Track: ' + this.playerList.getCurrentTrack() + '; Status: ' + this.status;
    } else {
      return 'Player list is empty';
    }
  }
  play() {
    if (this.playerList.songs.length > 0) {
      this.status = 'play';
    }
  }
  pause() {
    if (this.playerList.songs.length > 0) {
      this.status = 'pause';
    }
  }
  stop() {
    if (this.playerList.songs.length > 0) {
      this.status = 'stop';
    }
  }
  next() {
    this.playerList.next();
  }
  prev() {
    this.playerList.prev();
  }
}
const player = new Player([new Song('Children of cyberpunk', 209),
new Song('Beat it', 211), new Song('Country road', 240),
new Song('Venger', 310), new Song('Чёрное солнце', 289)]);

console.log(player.next());
console.log(player.next());
console.log(player.display());
console.log(player.prev());
console.log(player.display());
console.log(player.play());
console.log(player.display());
console.log(player.pause());
console.log(player.display());

const player2 = new Player([]);
console.log(player2.display());
console.log(player2.next());
console.log(player2.display());
console.log(player2.prev());
console.log(player2.display());

