public class Main {
    public static void main(String[] args) {

    Project_Euler_001 p1 = new Project_Euler_001(1000);
    Project_Euler_002 p2 = new Project_Euler_002(1,2);

        System.out.println("Solutions:");
        System.out.println("Project Euler 1: " + p1.findNaturalNumbers());
        p2.start();
        System.out.println("Project Euler 2: " + p2.getResult());
    }
}
