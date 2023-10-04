package homework1;

public class Ex2 {
    public void GetPar(String par){
        String var1 = par;
//Распечатать пред-последний символ строки. Используем метод String.charAt().
        int lenghtAll = var1.length();
        System.out.println( var1.charAt(lenghtAll-1));
//Проверить, содержит ли ваша строка подстроку “Java”. Используем метод
//String.contains().
        if ( var1.contains("Java")){
            System.out.println("Содержит Java" );
        } else{
            System.out.println("Не содержит Java" );
        }
//Вырезать строку Java c помощью метода String.substring().
        String var2 = var1.substring(lenghtAll-5,lenghtAll-1);
//Заменить все символы “а” на “о”.
        String var3 = var1.replace("a","o");
        System.out.println(var3);
//Преобразуйте строку к верхнему регистру
        System.out.println(var1.toUpperCase());
//Преобразуйте строку к нижнему регистру.
        System.out.println(var1.toLowerCase());
    }
}
