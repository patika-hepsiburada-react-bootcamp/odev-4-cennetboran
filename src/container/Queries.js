import { gql } from "@apollo/client";

export const WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

// query {
//   getCityByName(name: "izmir") {
//     id
//     name
//     country
//     coord {
//       lon
//       lat
//     }
//     weather {
//       summary {
//         title
//         description
//         icon
//       }
//       temperature {
//         actual
//         feelsLike
//         min
//         max
//       }
//       wind {
//         speed
//         deg
//       }
//       clouds {
//         all
//         visibility
//         humidity
//       }
//       timestamp
//     }
//   }
// }
