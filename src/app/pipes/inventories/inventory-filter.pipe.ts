import { Pipe, PipeTransform } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';

@Pipe({
  name: 'inventoryFilter'
})
export class InventoryFilterPipe implements PipeTransform {

  transform(inventories: Inventory[], searchText: string): Inventory[] {
    if (!inventories || !searchText) {
      return inventories;
    }

    searchText = searchText.toLowerCase();

    return inventories.filter(inventory => {
      return inventory.shelfLocation.toLowerCase().includes(searchText);
    });
  }


}
