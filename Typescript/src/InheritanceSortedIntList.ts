import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import {IntegerList} from "./IntegerList";

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList{
    private totalAdded:number;
    constructor() {
        super();
        this.totalAdded = 0;
    }
    add(num: number): boolean {
        this.totalAdded++;
        return super.add(num);
    }
    addAll(list: IntegerList): boolean {
        // this.totalAdded+=list.size();
        return super.addAll(list);
    }
    getTotalAdded(): number {
        return this.totalAdded;
    }

}

export { InheritanceSortedIntList }
