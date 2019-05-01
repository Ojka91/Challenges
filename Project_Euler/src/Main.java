import java.sql.SQLOutput;

public class Main {
    public static void main(String[] args) {

    Project_Euler_001 p1 = new Project_Euler_001(1000);
    Project_Euler_002 p2 = new Project_Euler_002(1,2);
    Project_Euler_003 p3 = new Project_Euler_003(600851475143L);
    Project_Euler_004 p4 = new Project_Euler_004();
    Project_Euler_005 p5 = new Project_Euler_005();

        System.out.println("Solutions:");
        System.out.println("Project Euler 1: " + p1.findNaturalNumbers());
        p2.start();
        System.out.println("Project Euler 2: " + p2.getResult());
        System.out.println("Project Euler 3: " + p3.start());
        System.out.println("Project Euler 4: " + p4.start());
        System.out.println("Project Euler 5: " + p5.start());

    }
}
