// flightData.js

const flights = [
    {
        "flightNumber": "AI101",
        "airline": "Air India",
        "aircraftType": "B787 Dreamliner",
        "status": "On Time",
        "departure": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T06:30:00+05:30",
            "estimatedTime": "2025-11-13T06:35:00+05:30",
            "terminal": "T3",
            "gate": "B12"
        },
        "arrival": {
            "airportCode": "LHR",
            "city": "London",
            "scheduledTime": "2025-11-13T11:30:00+00:00",
            "estimatedTime": "2025-11-13T11:40:00+00:00",
            "terminal": "T4",
            "gate": "A8"
        },
        "duration": "9h 30m",
        "price": { "min": 48000, "max": 52000 }
    },
    {
        "flightNumber": "6E203",
        "airline": "IndiGo",
        "aircraftType": "A320neo",
        "status": "Delayed",
        "departure": {
            "airportCode": "BLR",
            "city": "Bengaluru",
            "scheduledTime": "2025-11-13T09:10:00+05:30",
            "estimatedTime": "2025-11-13T09:45:00+05:30",
            "terminal": "T1",
            "gate": "C5"
        },
        "arrival": {
            "airportCode": "BOM",
            "city": "Mumbai",
            "scheduledTime": "2025-11-13T10:55:00+05:30",
            "estimatedTime": "2025-11-13T11:20:00+05:30",
            "terminal": "T2",
            "gate": "A2"
        },
        "duration": "1h 45m",
        "price": { "min": 3500, "max": 4200 }
    },
    {
        "flightNumber": "SG842",
        "airline": "SpiceJet",
        "aircraftType": "B737 MAX 8",
        "status": "Cancelled",
        "departure": {
            "airportCode": "HYD",
            "city": "Hyderabad",
            "scheduledTime": "2025-11-13T15:00:00+05:30",
            "estimatedTime": null,
            "terminal": "T1",
            "gate": null
        },
        "arrival": {
            "airportCode": "CCU",
            "city": "Kolkata",
            "scheduledTime": "2025-11-13T17:15:00+05:30",
            "estimatedTime": null,
            "terminal": "T2",
            "gate": null
        },
        "duration": "2h 15m",
        "price": { "min": 2700, "max": 3100 }
    },
    {
        "flightNumber": "UK822",
        "airline": "Vistara",
        "aircraftType": "A321neo",
        "status": "Departed",
        "departure": {
            "airportCode": "BOM",
            "city": "Mumbai",
            "scheduledTime": "2025-11-13T10:30:00+05:30",
            "estimatedTime": "2025-11-13T10:25:00+05:30",
            "terminal": "T2",
            "gate": "E8"
        },
        "arrival": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T12:45:00+05:30",
            "estimatedTime": "2025-11-13T12:50:00+05:30",
            "terminal": "T3",
            "gate": "B4"
        },
        "duration": "2h 15m",
        "price": { "min": 4200, "max": 5200 }
    },
    {
        "flightNumber": "EK507",
        "airline": "Emirates",
        "aircraftType": "A380-800",
        "status": "On Time",
        "departure": {
            "airportCode": "BOM",
            "city": "Mumbai",
            "scheduledTime": "2025-11-13T04:30:00+05:30",
            "estimatedTime": "2025-11-13T04:30:00+05:30",
            "terminal": "T2",
            "gate": "E9"
        },
        "arrival": {
            "airportCode": "DXB",
            "city": "Dubai",
            "scheduledTime": "2025-11-13T06:10:00+04:00",
            "estimatedTime": "2025-11-13T06:10:00+04:00",
            "terminal": "T3",
            "gate": "A1"
        },
        "duration": "3h 10m",
        "price": { "min": 28000, "max": 32000 }
    },
    {
        "flightNumber": "QR571",
        "airline": "Qatar Airways",
        "aircraftType": "B777-300ER",
        "status": "On Time",
        "departure": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T03:10:00+05:30",
            "estimatedTime": "2025-11-13T03:10:00+05:30",
            "terminal": "T3",
            "gate": "F2"
        },
        "arrival": {
            "airportCode": "DOH",
            "city": "Doha",
            "scheduledTime": "2025-11-13T05:00:00+03:00",
            "estimatedTime": "2025-11-13T05:00:00+03:00",
            "terminal": "T1",
            "gate": "C7"
        },
        "duration": "4h 20m",
        "price": { "min": 32000, "max": 35000 }
    },
    {
        "flightNumber": "G81245",
        "airline": "Go First",
        "aircraftType": "A320neo",
        "status": "Boarding",
        "departure": {
            "airportCode": "AMD",
            "city": "Ahmedabad",
            "scheduledTime": "2025-11-13T08:00:00+05:30",
            "estimatedTime": "2025-11-13T08:00:00+05:30",
            "terminal": "T1",
            "gate": "B2"
        },
        "arrival": {
            "airportCode": "BLR",
            "city": "Bengaluru",
            "scheduledTime": "2025-11-13T10:10:00+05:30",
            "estimatedTime": "2025-11-13T10:10:00+05:30",
            "terminal": "T1",
            "gate": "A3"
        },
        "duration": "2h 10m",
        "price": { "min": 4100, "max": 4700 }
    },
    {
        "flightNumber": "AI458",
        "airline": "Air India",
        "aircraftType": "A321",
        "status": "Landed",
        "departure": {
            "airportCode": "CCU",
            "city": "Kolkata",
            "scheduledTime": "2025-11-13T06:00:00+05:30",
            "estimatedTime": "2025-11-13T06:05:00+05:30",
            "terminal": "T2",
            "gate": "D2"
        },
        "arrival": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T08:25:00+05:30",
            "estimatedTime": "2025-11-13T08:30:00+05:30",
            "terminal": "T3",
            "gate": "C6"
        },
        "duration": "2h 25m",
        "price": { "min": 3800, "max": 4600 }
    },
    {
        "flightNumber": "BA142",
        "airline": "British Airways",
        "aircraftType": "B777-200ER",
        "status": "On Time",
        "departure": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T02:45:00+05:30",
            "estimatedTime": "2025-11-13T02:50:00+05:30",
            "terminal": "T3",
            "gate": "E10"
        },
        "arrival": {
            "airportCode": "LHR",
            "city": "London",
            "scheduledTime": "2025-11-13T06:50:00+00:00",
            "estimatedTime": "2025-11-13T06:55:00+00:00",
            "terminal": "T5",
            "gate": "B7"
        },
        "duration": "9h 35m",
        "price": { "min": 49000, "max": 54000 }
    },
    {
        "flightNumber": "AF225",
        "airline": "Air France",
        "aircraftType": "B777-300ER",
        "status": "Delayed",
        "departure": {
            "airportCode": "DEL",
            "city": "New Delhi",
            "scheduledTime": "2025-11-13T01:35:00+05:30",
            "estimatedTime": "2025-11-13T02:15:00+05:30",
            "terminal": "T3",
            "gate": "C11"
        },
        "arrival": {
            "airportCode": "CDG",
            "city": "Paris",
            "scheduledTime": "2025-11-13T07:25:00+01:00",
            "estimatedTime": "2025-11-13T08:00:00+01:00",
            "terminal": "T2E",
            "gate": "A9"
        },
        "duration": "9h 20m",
        "price": { "min": 51000, "max": 56000 }
    },

    ...Array.from({ length: 40 }).map((_, i) => ({
        flightNumber: `IN${1000 + i}`,
        airline: ["Air India", "IndiGo", "SpiceJet", "Vistara", "Go First", "Emirates", "Qatar Airways"][i % 7],
        aircraftType: ["A320neo", "A321neo", "B737 MAX 8", "B787 Dreamliner", "B777-300ER"][i % 5],
        status: ["On Time", "Delayed", "Boarding", "Departed", "Cancelled", "Landed"][i % 6],
        departure: {
            airportCode: ["DEL", "BOM", "BLR", "HYD", "CCU", "PNQ", "AMD"][i % 7],
            city: ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"][i % 7],
            scheduledTime: `2025-11-13T${String(6 + (i % 12)).padStart(2, "0")}:00:00+05:30`,
            estimatedTime: `2025-11-13T${String(6 + (i % 12)).padStart(2, "0")}:15:00+05:30`,
            terminal: `T${1 + (i % 3)}`,
            gate: `G${1 + (i % 10)}`
        },
        arrival: {
            airportCode: ["DEL", "BOM", "BLR", "HYD", "CCU", "PNQ", "AMD"].reverse()[i % 7],
            city: ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"].reverse()[i % 7],
            scheduledTime: `2025-11-13T${String(8 + (i % 12)).padStart(2, "0")}:30:00+05:30`,
            estimatedTime: `2025-11-13T${String(8 + (i % 12)).padStart(2, "0")}:40:00+05:30`,
            terminal: `T${1 + (i % 3)}`,
            gate: `A${1 + (i % 10)}`
        },
        duration: `${1 + (i % 6)}h ${15 + (i % 45)}m`,
        price: {
            min: 3000 + (i % 20) * 500,
            max: 3500 + (i % 20) * 600
        }
    }))
];

module.exports = flights;
