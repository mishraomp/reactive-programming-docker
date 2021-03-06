import * as mongoose from "mongoose";
export class Employee {
    public static employeeModel?: mongoose.Model<any>;
    private static isInstantiated: boolean = false;
    constructor() {
        if (!Employee.isInstantiated) {
            const schema = mongoose.Schema;
            const employeeSchema = new schema({
                age: {
                    type: Number,
                    required: [true, 'Age is mandatory.']
                },
                employeeName: {
                    type: String,
                    index: true,
                    required: [true, 'Name is mandatory.']
                },
                employeeId: {
                    type: String,
                    unique: true,
                    index: true,
                    required: [true, 'ID is mandatory.']
                },
            }, { collection: 'employeenode' });
            Employee.employeeModel = mongoose.model('EmployeeNode', employeeSchema, 'employeenode');
            Employee.isInstantiated = true;
        }
    }

}