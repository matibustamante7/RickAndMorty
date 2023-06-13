export interface TypeCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: Location;
    origin: Location;
    image: string;
    episodie: string[];
    url: string;
    created: Date;
}

export interface Location {
    name:string;
    url: string;
}