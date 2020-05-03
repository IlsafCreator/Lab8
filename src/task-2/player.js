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
  shuffle() {
    if (this.songs && this.songs.length !== 0) {
      for (let i = this.songs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
      }
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
    this.volume = 50;
  }
  display() {
    if (this.playerList.songs.length > 0) {
      return 'Track: ' + this.playerList.getCurrentTrack() + '; Status: ' + this.status + '; Volume:' + this.volume;
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
  increaseVolume() {
    if (this.volume >= 0 && this.volume + 10 <= 100) {
      this.volume += 10;
    } else {
      return 'volume is already max';
    }
  }
  decreaseVolume() {
    if (this.volume - 10 >= 0 && this.volume <= 100) {
      this.volume -= 10;
    } else {
      return 'volume is already min';
    }
  }
  shuffle() {
    this.playerList.shuffle();
  }
}
module.exports = { Song, Player };