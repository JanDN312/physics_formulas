import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts"


class Datareader {
    loadedData;

    constructor(){
        this.loadedData=this.getloadData("datafile.json");
    }

    async getloadData(filename: string) {
        const output = await loadJsonFile(filename);
        return output
    }

    getallData(){
        return this.loadedData
    }
}
    