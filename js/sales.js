'use strict';

function getStoreList() {
  var firstAndPike = {
    storeName: '1st and Pike',
    storeListId: 'first-and-pike',
    minCust: 23,
    maxCust: 65,
    avgCookiePerSale: 6.3,
    cookiesPerHour: [],
    cookiesPerDay: 0,
    ranNumCust: function () {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log('randomNum:', randomNum);
      return randomNum;
    },
    ranCookieCount: function () {
      var ranCookieCount = Math.floor(this.ranNumCust() * this.avgCookiePerSale);
      console.log('ranCookieCount:', ranCookieCount);
      return ranCookieCount;
    },
    generateProjections: function () {
      // Shop Hours: 6am - 8pm --> 14 hours
      console.log('Generating cookie projections:', this.storeName);
      for (var i = 0; i < 14; i++) {
        var randomCookieCount = this.ranCookieCount();
        this.cookiesPerHour.push(randomCookieCount);
        console.log('Hour:', i, 'Cookies:', randomCookieCount);
        this.cookiesPerDay += randomCookieCount;
      }
      console.log('Projected Cookies Per Day:', this.cookiesPerDay);
    },
  };

  var seaTacAirport = {
    storeName: 'SeaTac Airport',
    storeListId: 'seatac-airport',
    minCust: 3,
    maxCust: 24,
    avgCookiePerSale: 1.2,
    cookiesPerHour: [],
    cookiesPerDay: 0,
    ranNumCust: function () {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log('randomNum:', randomNum);
      return randomNum;
    },
    ranCookieCount: function () {
      var ranCookieCount = Math.floor(this.ranNumCust() * this.avgCookiePerSale);
      console.log('ranCookieCount:', ranCookieCount);
      return ranCookieCount;
    },
    generateProjections: function () {
      // Shop Hours: 6am - 8pm --> 14 hours
      console.log('Generating cookie projections:', this.storeName);
      for (var i = 0; i < 14; i++) {
        var randomCookieCount = this.ranCookieCount();
        this.cookiesPerHour.push(randomCookieCount);
        console.log('Hour:', i, 'Cookies:', randomCookieCount);
        this.cookiesPerDay += randomCookieCount;
      }
      console.log('Projected Cookies Per Day:', this.cookiesPerDay);
    },
  };

  var seattleCenter = {
    storeName: 'Seattle Center',
    storeListId: 'seattle-center',
    minCust: 11,
    maxCust: 38,
    avgCookiePerSale: 3.7,
    cookiesPerHour: [],
    cookiesPerDay: 0,
    ranNumCust: function () {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log('randomNum:', randomNum);
      return randomNum;
    },
    ranCookieCount: function () {
      var ranCookieCount = Math.floor(this.ranNumCust() * this.avgCookiePerSale);
      console.log('ranCookieCount:', ranCookieCount);
      return ranCookieCount;
    },
    generateProjections: function () {
      // Shop Hours: 6am - 8pm --> 14 hours
      console.log('Generating cookie projections:', this.storeName);
      for (var i = 0; i < 14; i++) {
        var randomCookieCount = this.ranCookieCount();
        this.cookiesPerHour.push(randomCookieCount);
        console.log('Hour:', i, 'Cookies:', randomCookieCount);
        this.cookiesPerDay += randomCookieCount;
      }
      console.log('Projected Cookies Per Day:', this.cookiesPerDay);
    },
  };

  var capitolHill = {
    storeName: 'Capitol Hill',
    storeListId: 'capitol-hill',
    minCust: 20,
    maxCust: 38,
    avgCookiePerSale: 2.3,
    cookiesPerHour: [],
    cookiesPerDay: 0,
    ranNumCust: function () {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log('randomNum:', randomNum);
      return randomNum;
    },
    ranCookieCount: function () {
      var ranCookieCount = Math.floor(this.ranNumCust() * this.avgCookiePerSale);
      console.log('ranCookieCount:', ranCookieCount);
      return ranCookieCount;
    },
    generateProjections: function () {
      // Shop Hours: 6am - 8pm --> 14 hours
      console.log('Generating cookie projections:', this.storeName);
      for (var i = 0; i < 14; i++) {
        var randomCookieCount = this.ranCookieCount();
        this.cookiesPerHour.push(randomCookieCount);
        console.log('Hour:', i, 'Cookies:', randomCookieCount);
        this.cookiesPerDay += randomCookieCount;
      }
      console.log('Projected Cookies Per Day:', this.cookiesPerDay);
    },
  };

  var alki = {
    storeName: 'Alki',
    storeListId: 'alki',
    minCust: 2,
    maxCust: 16,
    avgCookiePerSale: 4.6,
    cookiesPerHour: [],
    cookiesPerDay: 0,
    ranNumCust: function () {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log('randomNum:', randomNum);
      return randomNum;
    },
    ranCookieCount: function () {
      var ranCookieCount = this.ranNumCust() * this.avgCookiePerSale;
      console.log('ranCookieCount:', ranCookieCount);
      return Math.floor(ranCookieCount);
    },
    generateProjections: function () {
      // Shop Hours: 6am - 8pm --> 14 hours
      console.log('Generating cookie projections:', this.storeName);
      for (var i = 0; i < 14; i++) {
        var randomCookieCount = this.ranCookieCount();
        this.cookiesPerHour.push(randomCookieCount);
        console.log('Hour:', i, 'Cookies:', randomCookieCount);
        this.cookiesPerDay += randomCookieCount;
      }
      console.log('Projected Cookies Per Day:', this.cookiesPerDay);
    },
  };

  return [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
}

function displayStoreStats() {
  var storeList = getStoreList();
  console.log('Store list:', storeList);

  // Iterate through all the stores
  storeList.forEach(function (store) {
    // Generate/store all the projected cookie sales
    console.log('store:', store.Name);
    store.generateProjections();
    console.log(store.storeName + ' cookie projections:', store.cookiesPerHour);

    // Obtain the ul tag specific to this store
    var unorderedList = document.getElementById(store.storeListId);
    console.log('unorderedList:', unorderedList);

    var listItems = unorderedList.getElementsByTagName('li');

    // Set the hourly projection list items
    for (var i = 0; i < listItems.length - 1; i++) {
      listItems[i].innerText += ' '.concat(store.cookiesPerHour[i]).concat(' cookies');
    }

    // Populate the Total Count list item
    listItems[listItems.length - 1].innerText += ' '.concat(store.cookiesPerDay).concat(' cookies');
    console.log(store.storeName + ' cookies per day:', store.cookiesPerDay);
  });
}

// Do it!
displayStoreStats();