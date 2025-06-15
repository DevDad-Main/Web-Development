let teaFlavours = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavours[0];

/*
Soft Copy of an array
*/

let popularTeas = ["green tea", "oolong tea", "chai tea"];
let softCopyTeas = popularTeas;

//NOTE: if we now pop the last item out of popular teas
//It will actually it out of both due to it being a soft copy
console.log(softCopyTeas);
console.log(popularTeas);

/*
Hard Copy of an array
*/

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];
