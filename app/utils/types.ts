export interface User {
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
        postcode: string; 
    };
    email: string;
}