import { SearchFilter } from './reducers/filters';
import { BookingData } from '../data';

export default function filterData(
  data: BookingData[],
  searcFilters: SearchFilter
): BookingData[] {
  return data.filter((item) => {
    return (
      (!searcFilters.seats ||
        item.vehicle.seats === Number(searcFilters.seats)) &&
      (!searcFilters.category ||
        item.vehicle.category
          .toLowerCase()
          .includes(searcFilters.category.toLowerCase())) &&
      (!searcFilters.gearType ||
        item.vehicle.gearType === searcFilters.gearType) &&
      (!searcFilters.rateType ||
        item.rateType
          .toLowerCase()
          .includes(searcFilters.rateType.toLowerCase()))
    );
  });
}
