import { serializable } from "serializr";


export class LocationListModel {

    @serializable
    id: number;

    @serializable
    description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}