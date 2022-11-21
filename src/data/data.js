import drugs from "../assets/images/drugs.png";
import medicine from "../assets/images/medicine.png";
import onlinePharmacy from "../assets/images/online-pharmacy.png";
import pharmacy from "../assets/images/pharmacy.png";
import suppositories from "../assets/images/suppositories.png";

import medicinesPath from "../assets/images/medicine/medicinePath";

export const LIST_ITEMS = [
  {
    id: 0,
    title: "gooddrugs.com",
    image: drugs,
    adress: "23, Green St. New York",
    medicines: 
      {
        images: medicinesPath.medicine1,
        names: "Adderal",
        dosageForm: "Liquid",
        dosage: "10gr",
      },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 26.177624,
    longitude: -81.806946,
    isOpen: false,
  },
  {
    id: 1,
    title: "MyPharmacy",
    image: medicine,
    adress: "33, Freeman St. New York",
    medicines: 
      {
        images: medicinesPath.medicine2,
        names: "Alfasid",
        dosageForm: "Liquid",
        dosage: "15gr",
      },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 36.082157,
    longitude: -94.171852,
    isOpen: false,
  },
  {
    id: 2,
    title: "Pasteur",
    image: onlinePharmacy,
    adress: "21 Dupont St. New York",
    medicines: 
    {
      images: medicinesPath.medicine3,
      names: "Neosilin",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 37.129986,
    longitude: -84.084122,
    isOpen: false,
  },
  {
    id: 3,
    title: "Mixlab",
    image: pharmacy,
    adress: "26 Java St. New York",
    medicines: 
    {
      images: medicinesPath.medicine4,
      names: "Penbak",
      dosageForm: "Liquid",
      dosage: "5gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 38.9847642,
    longitude: -94.677658,
    isOpen: true,
  },
  {
    id: 4,
    title: "Omnicare",
    image: suppositories,
    adress: "54th Ave, New York",
    medicines: 
    {
      images: medicinesPath.medicine5,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "20gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 44.636513,
    longitude: -123.105927,
    isOpen: true,
  },
  {
    id: 5,
    title: "gooddrugs.com",
    image: drugs,
    adress: "23, Green St. New York",
    medicines: 
    {
      images: medicinesPath.medicine6,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 26.177624,
    longitude: -81.806946,
    isOpen: false,
  },
  {
    id: 6,
    title: "Mixlab",
    image: pharmacy,
    adress: "26 Java St. New York",
    medicines: 
    {
      images: medicinesPath.medicine7,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 41.651031,
    longitude: -83.541939,
    isOpen: true,
  },
  {
    id: 7,
    title: "Omnicare",
    image: suppositories,
    adress: "54th Ave, New York",
    medicines: 
    {
      images: medicinesPath.medicine8,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 44.636513,
    longitude: -123.105927,
    isOpen: true,
  },
  {
    id: 8,
    title: "gooddrugs.com",
    image: drugs,
    adress: "23, Green St. New York",
    medicines: 
    {
      images: medicinesPath.medicine10,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 26.177624,
    longitude: -81.806946,
    isOpen: false,
  },
  {
    id: 9,
    title: "Mixlab",
    image: pharmacy,
    adress: "26 Java St. New York",
    medicines: 
    {
      images: medicinesPath.medicine10,
      names: "Alfasid",
      dosageForm: "Liquid",
      dosage: "15gr",
    },
    time: "9am-10pm",
    number: "9021312312312",
    latitude: 41.651031,
    longitude: -83.541939,
    isOpen: true,
  },
];
