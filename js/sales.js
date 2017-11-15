'use strict';

// Store constructor definition
function Store(storeName, storeListId, minCust, maxCust, avgCookiesPerSale) {
  this.storeName = storeName;
  this.storeListId = storeListId;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPerHour = [];
  this.cookiesPerDay = 0;
}

function amendStoreConstructor() {
  Store.prototype.ranNumCust = function () {
    var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    console.log('randomNum:', randomNum);
    return randomNum;
  };

  Store.prototype.ranCookieCount = function() {
    var ranCookieCount = Math.floor(this.ranNumCust() * this.avgCookiesPerSale);
    console.log('ranCookieCount:', ranCookieCount);
    return ranCookieCount;
  };

  Store.prototype.generateProjections = function() {
    // Shop Hours: 6am - 8pm --> 14 hours
    console.log('Generating cookie projections:', this.storeName);
    for (var i = 0; i < 14; i++) {
      var randomCookieCount = this.ranCookieCount();
      this.cookiesPerHour.push(randomCookieCount);
      console.log('Hour:', i, 'Cookies:', randomCookieCount);
      this.cookiesPerDay += randomCookieCount;
    }
    console.log('Projected Cookies Per Day:', this.cookiesPerDay);
  };
}

function startSalesTable(headRowList) {
  var table = document.createElement('table');

  // Conditionally create & attach table header if headRowList was provided
  if (headRowList) {
    // Create a row and link it to the table
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow)

    // First, create & link an empty table head for the top left
    let tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);

    // Now, create & link remaining header columns
    for (var i = 0; i < headRowList.length; i++) {
      tableHead = document.createElement('th');
      tableHead.textContent = headRowList[i];
      tableRow.appendChild(tableHead);
    }
  }

  return table;
}

function getStoreList() {
  return [
    new Store('1st and Pike', 'first-and-pike', 23, 65, 6.3),
    new Store('SeaTac Airport', 'seatac-airport', 3, 24, 1.2),
    new Store('Seattle Center', 'seattle-center', 11, 38, 3.7),
    new Store('Capitol Hill', 'capitol-hill', 20, 38, 2.3),
    new Store('Alki', 'alki', 2, 16, 4.6),
  ];
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