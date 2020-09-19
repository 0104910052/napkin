const data = {
  "itinerary_id": "3dd59474-f467-42bc-8098-3c1695ab362d",
  "traveler": {
    "first_name": "John",
    "middle_name": "C.",
    "last_name": "Doe"
  },
  "origin_iata": "ATH",
  "destination_iata": "SKG",
  "segments": [
    {
      "segment_id": "452dfb51-0ac6-4274-b740-af6f89bc6116",
      "type": "GROUND",
      "origin": {
        "value": "Nikosthenous 10, 11635, Athens",
        "type": "STREET_ADDRESS"
      },
      "departure": 1588825200,
      "destination": {
        "type": "AIRPORT",
        "value": "ATH"
      }
    },
    {
      "segment_id": "39552e6d-6785-4e83-82dc-157a45773b45",
      "type": "AIRPORT",
      "origin": {
        "type": "AIRPORT",
        "value": "ATH"
      },
      "departure": 1588827600,
      "detail": {
        "busyness_index": 10
      }
    },
    {
      "segment_id": "07f77c9f-7fdf-446b-91d5-52e900f33723",
      "type": "FLIGHT",
      "origin": {
        "type": "AIRPORT",
        "value": "ATH"
      },
      "destination": {
        "type": "AIRPORT",
        "value": "SKG"
      },
      "departure": 1588830000,
      "detail": {
        "boarding": 1588828800,
        "flight_number": "A3 123",
        "gate": "C12",
        "seat": "12C"
      }
    }
  ]
}

export default data