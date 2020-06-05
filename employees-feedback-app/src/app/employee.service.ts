import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployees(): Observable<any> {
   let employees = [{
      "id": 1,
      "first_name": "Sunshine",
      "last_name": "Giacopelo",
      "email": "sgiacopelo0@tinyurl.com",
      "phone": "696-683-7839",
      "dob": "11/29/2019"
    }, {
      "id": 2,
      "first_name": "Benjie",
      "last_name": "Southwick",
      "email": "bsouthwick1@wix.com",
      "phone": "648-118-6360",
      "dob": "5/14/2020"
    }, {
      "id": 3,
      "first_name": "Boote",
      "last_name": "Habben",
      "email": "bhabben2@xrea.com",
      "phone": "348-628-1005",
      "dob": "4/19/2020"
    }, {
      "id": 4,
      "first_name": "Domingo",
      "last_name": "Discombe",
      "email": "ddiscombe3@samsung.com",
      "phone": "305-998-0660",
      "dob": "2/5/2020"
    }, {
      "id": 5,
      "first_name": "Weber",
      "last_name": "Gater",
      "email": "wgater4@barnesandnoble.com",
      "phone": "403-165-1729",
      "dob": "2/6/2020"
    }, {
      "id": 6,
      "first_name": "Corty",
      "last_name": "Durant",
      "email": "cdurant5@nymag.com",
      "phone": "472-669-0069",
      "dob": "4/6/2020"
    }, {
      "id": 7,
      "first_name": "Sinclair",
      "last_name": "Felstead",
      "email": "sfelstead6@youku.com",
      "phone": "704-363-7288",
      "dob": "1/24/2020"
    }, {
      "id": 8,
      "first_name": "Keslie",
      "last_name": "Isaacson",
      "email": "kisaacson7@spiegel.de",
      "phone": "123-386-4093",
      "dob": "12/9/2019"
    }, {
      "id": 9,
      "first_name": "Anthiathia",
      "last_name": "Lemarie",
      "email": "alemarie8@godaddy.com",
      "phone": "394-967-6529",
      "dob": "11/27/2019"
    }, {
      "id": 10,
      "first_name": "Bonny",
      "last_name": "Marchand",
      "email": "bmarchand9@delicious.com",
      "phone": "406-269-9696",
      "dob": "11/18/2019"
    }, {
      "id": 11,
      "first_name": "Marlow",
      "last_name": "Garlick",
      "email": "mgarlicka@disqus.com",
      "phone": "139-291-2675",
      "dob": "8/15/2019"
    }, {
      "id": 12,
      "first_name": "Franchot",
      "last_name": "Stollhofer",
      "email": "fstollhoferb@furl.net",
      "phone": "768-337-9303",
      "dob": "11/6/2019"
    }, {
      "id": 13,
      "first_name": "Odille",
      "last_name": "Logesdale",
      "email": "ologesdalec@dagondesign.com",
      "phone": "299-930-4854",
      "dob": "10/28/2019"
    }, {
      "id": 14,
      "first_name": "Skyler",
      "last_name": "Swinford",
      "email": "sswinfordd@angelfire.com",
      "phone": "748-573-3855",
      "dob": "5/14/2020"
    }, {
      "id": 15,
      "first_name": "Fiann",
      "last_name": "Kidd",
      "email": "fkidde@linkedin.com",
      "phone": "168-801-8994",
      "dob": "12/13/2019"
    }, {
      "id": 16,
      "first_name": "Isaac",
      "last_name": "Schultes",
      "email": "ischultesf@yellowbook.com",
      "phone": "623-842-4159",
      "dob": "8/3/2019"
    }, {
      "id": 17,
      "first_name": "Rowan",
      "last_name": "Hubery",
      "email": "rhuberyg@china.com.cn",
      "phone": "524-343-6328",
      "dob": "1/12/2020"
    }, {
      "id": 18,
      "first_name": "Maximo",
      "last_name": "Meadows",
      "email": "mmeadowsh@eepurl.com",
      "phone": "801-887-8535",
      "dob": "5/17/2020"
    }, {
      "id": 19,
      "first_name": "Marilee",
      "last_name": "Tarzey",
      "email": "mtarzeyi@samsung.com",
      "phone": "494-254-8951",
      "dob": "6/4/2019"
    }, {
      "id": 20,
      "first_name": "Codi",
      "last_name": "Leonard",
      "email": "cleonardj@icio.us",
      "phone": "657-653-0828",
      "dob": "11/3/2019"
    }];

    return of(employees);
  }

  getReviews(): Observable<any> {
    const reviews = [{
      "id": 1,
      "name": "Umeko",
      "department": "Human Resources",
      "reviewer": [
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    }, {
      "id": 2,
      "name": "Emelita",
      "department": "Sales",
      "reviewer": [
        {
        },
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    }, {
      "id": 3,
      "name": "Grange",
      "department": "Accounting",
      "reviewer": [
        {
        },
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    }, {
      "id": 4,
      "name": "Ami",
      "department": "Legal",
      "reviewer": [
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    }, {
      "id": 5,
      "name": "Antony",
      "department": "Research and Development",
      "reviewer": [
        {
        },
        {
        },
        {
        }
      ]
    }];

    return of(reviews);
  }
}
