export interface BookingData {
  id?: number;
  bookingFormUrl: string;
  rateType: string;
  fuelPolicy: string;
  vehicle: {
    category: string;
    name: string;
    imageUrl: string;
    acrissCode: string;
    gearType: string;
    bags: {
      min: number | null;
      max: number | null;
    };
    seats: number;
    doors: number;
    hasAC: boolean;
  };
  supplier: {
    name: string;
    rawName: string;
    logoUrl: string;
    rating: {
      average: number;
      count: number;
    } | null;
  };
  hasSanitationGuarantee: boolean;
  price: {
    currencyCode: string;
    value: number;
    taxPercentage: number | null;
    payAt: string;
  };
}

const rawData = [
  {
    bookingFormUrl: 'https://happycar.de/bookingform/8334819598528102463',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Fiat Panda',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/54ecd83e-a02c-4582-bd87-cf822ff71abc-izmo.png',
      acrissCode: 'MBMN',
      gearType: 'manual',
      bags: {
        min: 2,
        max: null,
      },
      seats: 4,
      doors: 2,
      hasAC: false,
    },
    supplier: {
      name: 'Interrent',
      rawName: 'Interrent',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/52.png',
      rating: {
        average: 0.6828571455819267,
        count: 519,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 50.400001525878906,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/5994055716519196301',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Skoda Fabia',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/2310ae3b-773d-4e1b-9107-8f58ca4dffe8-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: 1,
      },
      seats: 4,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Interrent',
      rawName: 'Interrent',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/52.png',
      rating: {
        average: 0.6828571455819267,
        count: 519,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 52.86000061035156,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/3004819588218929710',
    rateType: 'EXCELLENT',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Fiat 500',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/277ff295-b31a-4fde-94db-ae8b5756d1f8-izmo.png',
      acrissCode: 'MBMN',
      gearType: 'manual',
      bags: {
        min: null,
        max: 2,
      },
      seats: 4,
      doors: 2,
      hasAC: false,
    },
    supplier: {
      name: 'Global Drive',
      rawName: 'Global Drive',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/90x30/b8ab9d17-2126-4886-a794-7d7cc1e3fafb.jpg',
      rating: null,
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 53.15999984741211,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/1071091797364294080',
    rateType: 'EXCELLENT',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Renault Clio',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/46e9fd81-d607-4af1-8a04-e382f68802a6-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: null,
        max: 2,
      },
      seats: 4,
      doors: 4,
      hasAC: true,
    },
    supplier: {
      name: 'Global Drive',
      rawName: 'Global Drive',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/90x30/b8ab9d17-2126-4886-a794-7d7cc1e3fafb.jpg',
      rating: null,
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 55.619998931884766,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/1395152786846434275',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'COMPACT',
      name: 'Renault Clio',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/46e9fd81-d607-4af1-8a04-e382f68802a6-izmo.png',
      acrissCode: 'CCMR',
      gearType: 'manual',
      bags: {
        min: 2,
        max: 1,
      },
      seats: 5,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Interrent',
      rawName: 'Interrent',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/52.png',
      rating: {
        average: 0.6828571455819267,
        count: 519,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 56.13999938964844,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/8339418286468400254',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'STATION_WAGON',
      name: 'Skoda Fabia Combi',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/db314dbc-5d0a-4970-9671-63eb72597451-izmo.png',
      acrissCode: 'CWMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: 2,
      },
      seats: 5,
      doors: 5,
      hasAC: true,
    },
    supplier: {
      name: 'Interrent',
      rawName: 'Interrent',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/52.png',
      rating: {
        average: 0.6828571455819267,
        count: 519,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 58.599998474121094,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/3211133482134885616',
    rateType: 'EXCELLENT',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'COMPACT',
      name: 'Ford Focus',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/810a9c4e-a496-4200-abb3-9ee9a478f401-izmo.png',
      acrissCode: 'CCMR',
      gearType: 'manual',
      bags: {
        min: null,
        max: 2,
      },
      seats: 5,
      doors: 4,
      hasAC: true,
    },
    supplier: {
      name: 'Global Drive',
      rawName: 'Global Drive',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/90x30/b8ab9d17-2126-4886-a794-7d7cc1e3fafb.jpg',
      rating: null,
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 58.900001525878906,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/8572407631054171088',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Toyota Aygo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/d9c09355-f0d1-4b8e-827a-e7048dedb750-izmo.png',
      acrissCode: 'MBMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 59.880001068115234,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/2465441239578082753',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Toyota Aygo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/d9c09355-f0d1-4b8e-827a-e7048dedb750-izmo.png',
      acrissCode: 'MBMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 59.880001068115234,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/8574457311704202740',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Toyota Aygo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/d9c09355-f0d1-4b8e-827a-e7048dedb750-izmo.png',
      acrissCode: 'MBMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 59.880001068115234,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/2973440547188515471',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Toyota Aygo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/d9c09355-f0d1-4b8e-827a-e7048dedb750-izmo.png',
      acrissCode: 'MBMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 59.880001068115234,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/460339315263556907',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Opel/Vauxhall Corsa',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/86b7d68e-2b62-459c-95fb-c13014b7db5a-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: 2,
        max: null,
      },
      seats: 5,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 60.599998474121094,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/9065170853182145077',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Opel/Vauxhall Corsa',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/86b7d68e-2b62-459c-95fb-c13014b7db5a-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: 2,
        max: null,
      },
      seats: 5,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 60.599998474121094,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/4475571981205374837',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Opel/Vauxhall Corsa',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/86b7d68e-2b62-459c-95fb-c13014b7db5a-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: 2,
        max: null,
      },
      seats: 5,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 60.599998474121094,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/2208842991256752242',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Opel/Vauxhall Corsa',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/86b7d68e-2b62-459c-95fb-c13014b7db5a-izmo.png',
      acrissCode: 'ECMR',
      gearType: 'manual',
      bags: {
        min: 2,
        max: null,
      },
      seats: 5,
      doors: 2,
      hasAC: true,
    },
    supplier: {
      name: 'Enterprise',
      rawName: 'Enterprise',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/405x105/14.png',
      rating: {
        average: 0.8999999863760814,
        count: 200,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 60.599998474121094,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/9804028996384376',
    rateType: 'EXCELLENT',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'STATION_WAGON',
      name: 'Opel/Vauxhall Combo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/b49f18cd-a82c-4053-ae19-5b7e52df2788-izmo.png',
      acrissCode: 'CWMR',
      gearType: 'manual',
      bags: {
        min: null,
        max: 4,
      },
      seats: 5,
      doors: 4,
      hasAC: true,
    },
    supplier: {
      name: 'Global Drive',
      rawName: 'Global Drive',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/90x30/b8ab9d17-2126-4886-a794-7d7cc1e3fafb.jpg',
      rating: null,
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 61.36000061035156,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/3410857989075437563',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Fiat 500',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/277ff295-b31a-4fde-94db-ae8b5756d1f8-izmo.png',
      acrissCode: 'MCMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 3,
      hasAC: true,
    },
    supplier: {
      name: 'Keddy by Europcar',
      rawName: 'Keddy by Europcar',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/495x120/icn-big-supplier-keddy-by-europcar@3x.png',
      rating: {
        average: 0.911428587777274,
        count: 161,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 62.04999923706055,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/6407415545679425035',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'ECONOMY',
      name: 'Volkswagen Polo',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/7ee841f6-bc0b-4bde-be1d-7416e7f3bfce-izmo.png',
      acrissCode: 'EBMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 5,
      doors: 5,
      hasAC: true,
    },
    supplier: {
      name: 'Keddy by Europcar',
      rawName: 'Keddy by Europcar',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/495x120/icn-big-supplier-keddy-by-europcar@3x.png',
      rating: {
        average: 0.911428587777274,
        count: 161,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 63.880001068115234,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/1886513717547655592',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Fiat 500',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/277ff295-b31a-4fde-94db-ae8b5756d1f8-izmo.png',
      acrissCode: 'MCMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 3,
      hasAC: true,
    },
    supplier: {
      name: 'Keddy by Europcar',
      rawName: 'Keddy by Europcar',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/495x120/icn-big-supplier-keddy-by-europcar@3x.png',
      rating: {
        average: 0.911428587777274,
        count: 161,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 64.5,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
  {
    bookingFormUrl: 'https://happycar.de/bookingform/5365306199667772701',
    rateType: 'BASIC',
    fuelPolicy: 'f2f',
    vehicle: {
      category: 'MINI',
      name: 'Fiat 500',
      imageUrl:
        'https://vehicle-images.carrentalgateway.com/small/277ff295-b31a-4fde-94db-ae8b5756d1f8-izmo.png',
      acrissCode: 'MCMR',
      gearType: 'manual',
      bags: {
        min: 1,
        max: null,
      },
      seats: 4,
      doors: 3,
      hasAC: true,
    },
    supplier: {
      name: 'Keddy by Europcar',
      rawName: 'Keddy by Europcar',
      logoUrl:
        'https://d2qrtxdwnxepsi.cloudfront.net/images/suppliers/logos/495x120/icn-big-supplier-keddy-by-europcar@3x.png',
      rating: {
        average: 0.911428587777274,
        count: 161,
      },
    },
    hasSanitationGuarantee: false,
    price: {
      currencyCode: 'EUR',
      value: 64.5,
      taxPercentage: null,
      payAt: 'MIXED',
    },
  },
];

export default rawData.map((data: BookingData, index) => {
  return { ...data, ...{ id: index } };
});
