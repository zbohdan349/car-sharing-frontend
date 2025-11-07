export type RentalCar = {
  id: string;
  vehicleBrand: string;
  vehicleBodyType: string;
  image: string;
  dailyPrice: number;
  dailyPriceWithDiscount?: number;
  fuelCapacity: number;
  transmission: "Manual" | "Automatic";
  passengerCapacity: number;
};
