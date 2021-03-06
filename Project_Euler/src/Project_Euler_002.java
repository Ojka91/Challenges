/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

 */

import java.util.ArrayList;

public class Project_Euler_002 {
    private ArrayList<Integer> array = new ArrayList<>();
    private Integer result = 0;


    public Integer getResult() {
        return result;
    }

    public Project_Euler_002(Integer num1, Integer num2){
        array.add(num1);
        array.add(num2);
    }


    public void start(){
        while(array.get(array.size()-1)<4000000){
            nextNumber();
        }

        sumEvenNum();
    }
    public void nextNumber(){
        Integer last = array.get(array.size() - 1);
        Integer penultimate = array.get(array.size()-2);
        array.add(last+penultimate);
    }

    public Integer sumEvenNum(){

        for (Integer num:array) {
            if(num%2==0){
                result = result + num;
            }
        }
        return result;
    }
}