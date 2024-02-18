import fs from "fs"
import { parse } from 'csv-parse'


export const CSVReader = async () => {

        const records = new Map();
        const parser = fs
            .createReadStream(`../Assets/SuEatableLife_Food_Fooprint_database.csv`)
            .pipe(parse({
                columns: true,
              relax_column_count: true
            }));
        for await (const record of parser) {
            records.set(record["Food commodity ITEM"].toLowerCase(), record["Carbon Footprint kg CO2eq/kg or l of food ITEM"]);
        }
        return records;
    };

