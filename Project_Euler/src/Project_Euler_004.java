//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit
// numbers is 9009 = 91 × 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.


public class Project_Euler_004 {
    private long biggest = 0;
    private Integer numberOne = 999, numberTwo = 999;


    public Project_Euler_004(){

    }

    public boolean isPalindrome( String s )
    {
        //if odd length then remove middle character
        if ( s.length() % 2 != 0 )
        {
            s = s.substring( 0, s.length() / 2 ) + s.substring( (s.length() / 2) + 1);
        }

        return new StringBuffer( s.substring( 0, s.length() / 2) ).
                reverse().toString().equals( s.substring( s.length() / 2) );
    }

    public Long start(){
        for (int n1 = numberOne; n1>0; n1--){
            for (int n2 = numberTwo; n2>0; n2--){
                if(isPalindrome(new Long(n1*n2).toString())){
                    if(n1*n2> biggest){
                        biggest = n1*n2;
                    }
                }
            }
        }
        return biggest;
    }

}
