export const createDataTracker = async (data) => {
  const tracker = new dataTracker();
  await tracker.insert(data)
  return tracker;
};


export class dataTracker {

  constructor() {
    this.minTemp = null;
    this.maxTemp = null;
    this.meanTemp = null;
    this.modeTemp = null;
    this.dataStore = [];
  }

  //Records new values into the tracker, 
  // value should be an array
  insert = (value) => {
    this.dataStore = [...this.dataStore, ...value];
    this.storeMin(value);
    this.storeMax(value);
    this.storeMean(this.dataStore);
    this.storeMode(this.dataStore);

  }
  //functions in this section store values 

  storeMin = (value) => {
    const tempValue = Math.min(...value)
    if (this.minTemp === null) this.minTemp = Math.min(...value)
    this.minTemp = this.minTemp > tempValue ? tempValue : this.minTemp;
  }


  storeMax = (value) => {
    const tempValue = Math.max(...value)
    this.maxTemp = this.maxTemp < tempValue ? tempValue : this.maxTemp;
  }

  storeMean = (value) => {
    // rounds to 2 decimel places the mean (sum / num of elements)
    this.meanTemp = (Math.floor(((value.reduce((a, b) => a + b, 0)) / value.length) * 100) / 100);
  }

  storeMode = (value) => {
    const map = new Map();
    let maxFreq = 0;
    let mode;

    for (const item of value) {
      let freq = map.has(item) ? map.get(item) : 0;
      freq++;

      if (freq > maxFreq) {
        maxFreq = freq;
        mode = item;
      }

      map.set(item, freq);
    }

    this.modeTemp = mode;
  };

  //functions in this section show values 
  showMin = () => this.minTemp;
  showMax = () => this.maxTemp;
  showMean = () => this.meanTemp;
  showMode = () => this.modeTemp;

}