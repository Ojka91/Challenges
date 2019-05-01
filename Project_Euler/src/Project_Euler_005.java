//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//       What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

public class Project_Euler_005 {
    private Integer result = 2520;


    public Project_Euler_005(){

    }
    public Project_Euler_005(Integer result) {
        this.result = result;
    }

    public Integer start(){
        while (!checkIfItsDivisible(result)){
            result++;
        }
        return result;
    }

    public boolean checkIfItsDivisible(Integer num){
        for(int x = 1; x<21; x++){
            if(result%x == 0){

            }
            else{
                return false;
            }
        }
        return true;
    }
}


