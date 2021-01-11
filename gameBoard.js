module.exports = class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    let elArr = [];
    let resArr = [];
    this.terrainList.forEach((el, idx) => {

      const word = this.terrainHelper.letterToTerrain(el);
      if (typeof word == 'string')
        elArr.push(word);
      if (idx !== 0 && (idx + 1) % this.size === 0) {
        resArr.push(elArr);
        elArr = [];
      }
    });
    return resArr;
    // напишите этот метод сами
  }

  difficultyOfJourney(arr) {
    const mapArr = this.terrainMap();
    const res = arr.reduce((sum, item) => sum + this.terrainHelper.scoreDifficulty(mapArr[item[0]][item[1]]), 0);
    return res
    // напишите этод метод сами
  }
}

