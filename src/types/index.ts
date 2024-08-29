export type TFacility = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};