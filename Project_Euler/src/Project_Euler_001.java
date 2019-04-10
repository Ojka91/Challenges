/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

 */


import java.util.ArrayList;

public class Project_Euler_001 {
    private Integer maxNum, result;
    private ArrayList<Integer> actualNum = new ArrayList<>();

    public Project_Euler_001(){

    }

    public Project_Euler_001(Integer maxNum){
        this.maxNum = maxNum;
    }

    public Integer getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(Integer maxNum) {
        this.maxNum = maxNum;
    }

    public Integer findNaturalNumbers(){
        this.result = 0;
        for (int x = 0; x<this.maxNum; x++){
            if (x%3==0 || x%5==0){
                this.actualNum.add(x);
            }
        }
        for (Integer num:this.actualNum){
            this.result = this.result+num;
        }
        return result;

    }

}
