import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss']
})
export class StayListComponent {
  constructor(private stayService: StayService) { 
    this.stays = this.mockData as unknown as Stay[];
  }
  mockData: Stay[] = [
    {
      "_id": "640f1a201c1c4cc4add67107",
      "name": "Westin Kaanapali KORVN 2BR",
      "type": "National parks",
      "imgUrls": [
        "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg",
        "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg",
        "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436496/ihozxprafjzuhil9qhh4.jpg",
        "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg",
        "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436948/vgfxpvmcpd2q40qxtuv3.jpg"
      ],
      "price": 595,
      "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
      "capacity": 8,
      "amenities": [
        "32\" HDTV with Disney+, standard cable",
        "Wifi",
        "AC - split type ductless system",
        "Private outdoor pool - available all year, open 24 hours, lap pool",
        "Kitchen",
        "Free parking on premises",
        "Hot water",
        "Heating - split type ductless system",
        "Indoor fireplace: wood-burning",
        "Shampoo",
        "Hair dryer",
        "Hot water",
        "Backyard",
        "Pets allowed"
      ],
      "bathrooms": 2,
      "bedrooms": 2,
      "roomType": "Entire home/apt",
      "host": {
        "_id": "63dbac3c5705dc29556eae8d",
        "createAt": "2016-06-12T04:00:00.000Z",
        "fullname": "Patty And Beckett",
        "about": "Adventurous couple loves to travel :)",
        "responseTime": "within an hour",
        "pictureUrl": "https://xsgames.co/randomusers/avatar.php?g=male",
        "isSuperhost": true,
        "policyNumber": 36133410
      },
      "loc": {
        "country": "United States",
        "countryCode": "US",
        "city": "Maui",
        "address": "Lahaina, HI, United States",
        "lat": -156.6917,
        "lan": 20.93792
      },
      "reviews": [
        {
          "at": "1707301512902",
          "by": {
            "_id": "65c359725472fd7bd59a0bcd",
            "fullname": "ameni"
          },
          "txt": "testtt"
        },
        {
          "at": "1702953150114",
          "by": {
            "_id": "641865826781c25062258a35",
            "fullname": "demo user",
            "imgUrl": "https://res.cloudinary.com/dcwibf9o5/image/upload/v1679320445/ewbykz9znjtmoeb1xsip.jpg"
          },
          "txt": "test"
        },
        {
          "at": "1701789005968",
          "by": {
            "_id": "641865826781c25062258a35",
            "fullname": "demo user",
            "imgUrl": "https://res.cloudinary.com/dcwibf9o5/image/upload/v1679320445/ewbykz9znjtmoeb1xsip.jpg"
          },
          "txt": "hdfhthhgdgdfffgrghthj"
        },
        {
          "at": "2016-06-12T04:00:00.000Z",
          "by": {
            "_id": "622f3407e36c59e6164fc004",
            "fullname": "Kiesha",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/73.jpg"
          },
          "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
        },
        {
          "at": "2016-07-28T04:00:00.000Z",
          "by": {
            "_id": "622f3403e36c59e6164fb204",
            "fullname": "Chris",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/43.jpg"
          },
          "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
        }
      ],
      "likedByUsers": [
        "834-186DF7D01FB-1B38",
        "6410711d7aae5eb4b8c3218b",
        "64109116d36d072768162be5",
        "6419625e66f7670c9ffb744d",
        "65a9af8d435120dcf1d12fe9",
        "65c359725472fd7bd59a0bcd",
        "65ecec599d861860ddd288f7"
      ],
      "labels": [
        "Campers",
        "New",
        "Amazing views",
        "OMG"
      ],
      "statReviews": {
        "cleanliness": 4.39,
        "communication": 4.31,
        "checkIn": 4.31,
        "accuracy": 4.46,
        "location": 4,
        "value": 4.38
      }
    }
  ];
  public stays: Stay[] | null = this.mockData;
  //@Input() stays!: Stay[] | null;
}
