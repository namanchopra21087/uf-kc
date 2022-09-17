import { serializable } from "serializr";


export class PropertiesListModel {
    @serializable
    id: number;

    @serializable
    propertyName: string;

    constructor(id: number, propertyName: string) {
        this.id = id;
        this.propertyName = propertyName;
    }
}