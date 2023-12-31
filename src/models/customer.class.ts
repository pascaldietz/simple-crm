export class Customer {
    name:string;
    email:string;
    street: string;
    zipCode: number;
    city: string;
    phone: string;
    customer_manager:string;
    branche: string;
    profit_per_year: number;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.email = obj ? obj.email : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.phone = obj ? obj.phone : '';
        this.customer_manager = obj ? obj.customer_manager : '';
        this.branche = obj ? obj.branche : '';
        this.profit_per_year = obj? obj.profit_per_year : 0;
    }

    public toJSON() {
        return {
            name: this.name,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            phone: this.phone,
            customer_manager: this.customer_manager,
            branche : this.branche,
            profit_per_year : this.profit_per_year,
        }
    }
}

