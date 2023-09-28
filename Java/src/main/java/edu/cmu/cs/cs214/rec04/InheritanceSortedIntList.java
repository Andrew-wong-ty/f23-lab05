package edu.cmu.cs.cs214.rec04;

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class InheritanceSortedIntList extends SortedIntList {
    // Write your implementation below with API documentation
    private int totalAdded;
    public InheritanceSortedIntList() {
        super(); // initialize super class (not necessary)
        totalAdded = 0;
    }
    @Override
    public boolean add(int num) {
        totalAdded++;
        return super.add(num);
    }

    @Override
    public boolean addAll(IntegerList list) {
//        totalAdded += list.size(); // since super.addAll(list) will call override add(), we do not add totalAdded here.
        return super.addAll(list);
    }

    /**
     * count how many elements have been added since it was created
     * @return that number
     */
    public int getTotalAdded() {
        return totalAdded;
    }
}