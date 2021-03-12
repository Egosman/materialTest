

export interface DZ {
    country: string;
    region: string;
}

export interface AO {
    country: string;
    region: string;
}

export interface BJ {
    country: string;
    region: string;
}

export interface BW {
    country: string;
    region: string;
}

export interface BF {
    country: string;
    region: string;
}

export interface BI {
    country: string;
    region: string;
}

export interface CV {
    country: string;
    region: string;
}

export interface CM {
    country: string;
    region: string;
}

export interface CF {
    country: string;
    region: string;
}

export interface TD {
    country: string;
    region: string;
}

export interface Data {
    DZ: DZ;
    AO: AO;
    BJ: BJ;
    BW: BW;
    BF: BF;
    BI: BI;
    CV: CV;
    CM: CM;
    CF: CF;
    TD: TD;
}

export interface RootCountry {
    status: string;
    statusCode: number;
    version: string;
    total: number;
    limit: number;
    offset: number;
    access: string;
    data: Data;
}


