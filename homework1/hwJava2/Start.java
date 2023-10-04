package hwJava2;

public class Start {
    public static void main(String[] args) {
        char parChar = 'G';
        System.out.println("char: "+ parChar);
        int parInt = 89;
        System.out.println("int: "+ parInt);
        byte parByte = 4;
        System.out.println("byte: " + parByte);
        short parShort = 56;
        System.out.println("short: " + parShort);
        float parFloat = 4.7333436F;
        System.out.println("float: " + parFloat);
        double parDouble = 4.355453532;
        System.out.println("double: " + parDouble);
        long parLong = 12121;
        System.out.println("long: "+ parLong);

        int par = 345;
        System.out.println("число "+ par+ "-> "+par/100+", "+par%100/10+", "+par%100%10);
    }
}
