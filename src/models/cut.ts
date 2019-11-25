import { CutModel } from "./cut-model";
import { Client } from "./client";
import { Employee } from "./employee";

export interface Cut {
    key?: string,
    model: CutModel,
    client: Client,
    employee: Employee,
    date: string,
    time: string
}