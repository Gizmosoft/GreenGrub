//const fs = import("fs");
import fs from "fs"
import csv from "csv-parser"

export var map1 = new Map();

export function CSVReader() {

    fs.createReadStream("C:/TFC/TFC_Hackathon/Assets/SuEatableLife_Food_Fooprint_database.csv").pipe(csv())
    .on('data', function (data) {
        try {
            //console.log("Product name - " + data['Food commodity ITEM']);
            map1.set(data['Food commodity ITEM'], data['Carbon Footprint kg CO2eq/kg or l of food ITEM'])
            console.log(map1.size)
        }
        catch {
            console.log("Error occured");
        }
    });
}

