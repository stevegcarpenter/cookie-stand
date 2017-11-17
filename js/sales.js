'use strict';

// Store constructor definition
function Store(storeName, minCust, maxCust, avgCookiesPerSale) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPerHour = [];
  this.cookiesPerDay = 0;

  // push it real good
  stores.push(this);
}

function amendStoreConstructor() {
  Store.prototype.ranCookieCount = function () {
    var ranCookieCount = Math.floor(ranNum(this.minCust, this.maxCust) * this.avgCookiesPerSale);
    console.log('ranCookieCount:', ranCookieCount);
    return ranCookieCount;
  };

  Store.prototype.render = function (tableEl) {
    this.generateProjections();
    console.log(this.storeName + ' cookie projections:', this.cookiesPerHour);
    appendTableRow(tableEl, this.storeName, this.cookiesPerHour.concat(this.cookiesPerDay));
  };

  Store.prototype.generateProjections = function () {
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

function ranNum(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.log('randomNum:', randomNum);
  return randomNum;
}

function startSalesTable(tableId, headRowList) {
  var table = document.getElementById(tableId);

  // Conditionally create & attach table header if headRowList was provided
  if (headRowList) {
    // Create a row and link it to the table
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

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

function appendTableRow(tableEl, rowName, rowDataList) {
  // Create and link a table row to the table
  var tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);

  // Add dat name as a table head so its bold
  var tableHead = document.createElement('th');
  tableHead.textContent = rowName;
  tableRow.appendChild(tableHead);

  // Create, populate, and attach the table data
  for (var i = 0; i < rowDataList.length; i++) {
    var tableData = document.createElement('td');
    tableData.textContent = rowDataList[i];
    tableRow.appendChild(tableData);
  }
}

function createStores() {
  // These are my data
  new Store('1st and Pike', 23, 65, 6.3);
  new Store('SeaTac Airport', 3, 24, 1.2);
  new Store('Seattle Center', 11, 38, 3.7);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Alki', 2, 16, 4.6);
}

function prepEventListenters() {
  var formEl = document.getElementById(FORMID);

  formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
      storeName: event.target.storeName.value,
      minCust: event.target.minCust.value,
      maxCust: event.target.maxCust.value,
      avgCookiesPerSale: event.target.avgCookiesPerSale.value,
    };

    // Convert and store
    var storeName = formData.storeName;
    var minCust = parseInt(formData.minCust);
    var maxCust = parseInt(formData.maxCust);
    var avgCookiesPerSale = parseFloat(formData.avgCookiesPerSale);

    // minCust must be < maxCust
    if (minCust >= maxCust) {
      alert('Error. Min Cust Per Hour cannot be >= Max Cust Per Hour.');
    }

    // No point in doing anything if
    if (storeName === '') {
      alert('Error. Must provide a store name.');
      return;
    }

    // For now, do an O(n) search through our stores array and if the store
    // already exists, disallow adding it again.
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].storeName.toLowerCase() === storeName.toLowerCase()) {
        alert('Error. ' + storeName + ' already exists.');
        return;
      }
    }

    // Delete the last row, then recalculate it
    var tableEl = document.getElementById(TABLEID);

    // Delete the totals row at the bottom
    tableEl.deleteRow(tableEl.rows.length - 1);

    // Make a new store
    var store = new Store(storeName, minCust, maxCust, avgCookiesPerSale);

    // Render the sales projections to our new table
    store.render(tableEl);

    // Calculate the totals row
    calcTotalsRow(store);

    // Append the new totals row
    appendTableRow(tableEl, 'Totals', totalCookiesPerHour.concat(totalDailyCookies));
  });

  console.log('Added the event listener to', FORMID);
}

function calcTotalsRow(store) {
  // Add per hour cookie sales to total
  for (var i = 0; i < store.cookiesPerHour.length; i++) {
    totalCookiesPerHour[i] += store.cookiesPerHour[i];
  }
  totalDailyCookies += store.cookiesPerDay;
}

function displayStoreStats() {
  console.log('Store list:', stores);
  var tableColumns = [
    '6:00am',
    '7:00am',
    '8:00am',
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
    'Daily Location Total',
  ];

  // Build the object list - in this case stores
  createStores();

  // Create a table and link it to the correct section
  var tableEl = startSalesTable(TABLEID, tableColumns);

  // Iterate through all the stores
  stores.forEach(function (store) {
    // Generate/store all the projected cookie sales
    console.log('store:', store.Name);

    // Render the sales projections to our new table
    store.render(tableEl);

    // Calculate dem totals
    calcTotalsRow(store);
  });

  // Finally, add the final line of the table
  appendTableRow(tableEl, 'Totals', totalCookiesPerHour.concat(totalDailyCookies));
}

/*
 ************************** Code Execution Below *****************************
 */
// globals - not my favorite, but I'm getting lazy
var stores = [];
var totalCookiesPerHour = Array(14).fill(0);
var totalDailyCookies = 0;
const TABLEID = 'main-table';
const FORMID = 'main-form';

// Do it!
amendStoreConstructor();
prepEventListenters();
displayStoreStats();
