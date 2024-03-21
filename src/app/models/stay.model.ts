 export interface Stay {
    _id: string,
    type: string,
    name: string,
    imgUrls: string[],
    price: number,
    summary: string,
    capacity: number,
    amenities: string[],
    labels: string[],
    host: Host,
    loc: Loc,
    reviews: Review[],
    likedByUsers: string[],
    roomType: string,
    statReviews: StatReviews,
    bathrooms: number,
    bedrooms: number
}
export interface Host {
    _id: string,
    fullname: string,
    pictureUrl: string,
    createAt: string,
    isSuperhost: boolean,
    policyNumber: number,
    responseTime: string,
}

export interface Loc {
    country: string
    countryCode: string
    city: string
    address: string
    lat: number
    lan: number
}
export interface googleMapLoc {
    lat: number
    lng: number
}

export interface Review {
    at: string
    txt: string,
    by: {
        _id: string,
        fullname: string,
        imgUrl?: string | undefined
    }
}

export interface StatReviews {
    cleanliness: number,
    communication: number,
    checkIn: number,
    accuracy: number,
    location: number,
    value: number
}

export interface StayFilter {
  likeByUser: string,
  place: string,
  label: string,
  hostId: string,
  isPetAllowed: string
}
