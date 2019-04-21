//The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

public class Project_Euler_003 {
    private Long num;
    private Long result;
    private Long d = 2L;

    public Project_Euler_003(Long num) {
        this.num = num;
    }

    public Long start(){
        Long result;
        while (1==1) {
            Long tmp = num / d;
            if ( num % tmp == 0 &&  isPrime(tmp) )
            {
                result = tmp;
                break;
            }
            d++;
        }
    return result;

    }

    public boolean isPrime(long n)
    {
        if ( n % 2 == 0 ) //even numer so can't be prime
            return false;

        long half = (n/2) % 2 == 0 ? (n/2)-1 : n/2; //make sure we work with odd number
        for ( int i = 3; i < half; i += 2 ) //step of 2 to keep it odd numbers
        {
            if ( n % i == 0 )
                return false;
        }

        return true;
    }

}
