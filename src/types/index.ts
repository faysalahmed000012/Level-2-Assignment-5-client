export type TFacility = {
  _id: string;
  name: string;
  imgUrl: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TBooking = {
  _id?: string;
  date: string;
  startTime: string;
  endTime: string;
  user: unknown;
  facility: TFacility;
  payableAmount: number;
  tranId: string;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
};

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
};
