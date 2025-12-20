// Simple VIN decoder - extracts basic info from VIN
export interface VINInfo {
  manufacturer: string;
  region: string;
  year: string;
  valid: boolean;
}

const worldManufacturerIdentifierRegions: { [key: string]: string } = {
  '1': 'United States',
  '2': 'Canada',
  '3': 'Mexico',
  '4': 'United States',
  '5': 'United States',
  'J': 'Japan',
  'K': 'South Korea',
  'L': 'China',
  'S': 'United Kingdom',
  'V': 'France/Spain',
  'W': 'Germany',
  'Z': 'Italy',
};

const manufacturersByWMICode: { [key: string]: string } = {
  '1FA': 'Ford (USA)',
  '1G': 'General Motors',
  '1HG': 'Honda (USA)',
  '1J': 'Jeep',
  '1N': 'Nissan (USA)',
  '2HG': 'Honda (Canada)',
  '3VW': 'Volkswagen (Mexico)',
  '4T': 'Toyota (USA)',
  '5YJ': 'Tesla',
  'JHM': 'Honda (Japan)',
  'JN': 'Nissan (Japan)',
  'JT': 'Toyota (Japan)',
  'KM': 'Hyundai',
  'KN': 'Kia',
  'SAL': 'Land Rover',
  'SAJ': 'Jaguar',
  'SCA': 'Rolls Royce',
  'VF': 'Peugeot/Citroën',
  'WBA': 'BMW',
  'WDB': 'Mercedes-Benz',
  'WDD': 'Mercedes-Benz',
  'WVW': 'Volkswagen',
  'WAU': 'Audi',
  'WP0': 'Porsche',
  'ZAR': 'Alfa Romeo',
  'ZFF': 'Ferrari',
};

const modelYearByCode: { [key: string]: string } = {
  'A': '2010', 'B': '2011', 'C': '2012', 'D': '2013', 'E': '2014',
  'F': '2015', 'G': '2016', 'H': '2017', 'J': '2018', 'K': '2019',
  'L': '2020', 'M': '2021', 'N': '2022', 'P': '2023', 'R': '2024',
  'S': '2025', 'T': '2026',
};

export function decodeVIN(vinInput: string): VINInfo {
  const sanitizedVin = vinInput.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
  
  if (sanitizedVin.length !== 17) {
    return {
      manufacturer: 'Unknown',
      region: 'Unknown',
      year: 'Unknown',
      valid: false,
    };
  }

  const worldManufacturerIdentifier = sanitizedVin.substring(0, 3);
  const modelYearCode = sanitizedVin.charAt(9);
  
  let manufacturerName = 'Unknown';
  for (const [manufacturerCode, manufacturerDescription] of Object.entries(manufacturersByWMICode)) {
    if (worldManufacturerIdentifier.startsWith(manufacturerCode)) {
      manufacturerName = manufacturerDescription;
      break;
    }
  }

  const regionCode = sanitizedVin.charAt(0);
  const manufacturingRegion = worldManufacturerIdentifierRegions[regionCode] || 'Unknown';
  const modelYear = modelYearByCode[modelYearCode] || 'Unknown';

  return {
    manufacturer: manufacturerName,
    region: manufacturingRegion,
    year: modelYear,
    valid: true,
  };
}
