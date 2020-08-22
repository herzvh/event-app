export class Event {
  constructor(
    public id: number,
    public title: string,
    public place: string,
    public  date: Date,
    public  from: string,
    public  to?: string,
    public  persons: number = 0,
    public subscribed: boolean = false
  ) {
  }
}
