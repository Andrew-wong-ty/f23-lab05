/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
import {IntegerList} from "./IntegerList";
import {SortedIntLinkedList} from "./hidden/SortedIntListLibrary";

class DelegationSortedIntList implements IntegerList{
    private sortedIntList: SortedIntLinkedList;
    private totalAdded: number;
    constructor() {
        this.sortedIntList = new SortedIntLinkedList();
        this.totalAdded = 0;
    }
    add(num: number): boolean {
        this.totalAdded++;
        return this.sortedIntList.add(num);
    }

    addAll(list: IntegerList): boolean {
        this.totalAdded += list.size();
        return this.sortedIntList.addAll(list);
    }

    get(index: number): number {
        return this.sortedIntList.get(index);
    }

    remove(num: number): boolean {
        return this.sortedIntList.remove(num);
    }

    removeAll(list: IntegerList): boolean {
        return this.sortedIntList.removeAll(list);
    }

    size(): number {
        return this.sortedIntList.size();
    }
  // Write your implementation below with API documentatioin
    getTotalAdded(): number {
        return this.totalAdded;
    }
}

export { DelegationSortedIntList }
