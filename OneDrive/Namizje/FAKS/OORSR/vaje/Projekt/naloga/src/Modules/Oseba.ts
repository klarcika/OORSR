
interface Oseba{
    ime: String;
    letoRojstva: number;
    krajRojstva?: string;
    id: number

}

interface Igralec extends Oseba{
    visina: number;
    teza: number;
    poskodovan: boolean
}

interface Funkcionar extends Oseba{
    vloga: string;
    veljavnost: number
}

export{ Igralec, Funkcionar}