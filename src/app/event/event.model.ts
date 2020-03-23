export class EventModel {
  title: string;
  days: number;
  country?: string;
  region?: string;
  town: string;
  constructor(
    title: string,
    days: number,
    town: string,
    country?: string,
    region?: string
  ) {this.title = title;
     this.days = days;
     this.country = country;
     this.region = region;
     this.town = town;
  }
}
