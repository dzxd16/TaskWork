package homework1;

import java.util.Scanner;

public class Ex1 {
    public static void main(String[] args) {
//Создайте строку через new - I study Basic Java!
        String var1 = "I study Basic Java!";
//Напишите метод, который принимает в качестве параметра строку, передайте в
//этот метод строку, которую создали в п.1
        Ex2 ex2 = new Ex2();
        ex2.GetPar(var1);
//Создайте методы с математическими операциями +, -, *, /
//a. Каждый метод принимает два числа в параметрах и возвращает
//результат
//
//Вызовите все методы в main
//
//Результат распечатайте в консоль
        MathMetods mathMetods = new MathMetods();
        System.out.println("Введите числа для математических действий");
        System.out.println("1-е число");
        Scanner in = new Scanner(System.in);
        float par1 = in.nextFloat();
        System.out.println("2-е число");
        float par2 = in.nextFloat();
        float add = mathMetods.Add(par1,par2);
        System.out.println(""+par1 + " + " + par2 + " = "+ add);
        float decrease = mathMetods.Decrease(par1,par2);
        System.out.println(""+par1 + " - " + par2 + " = "+ decrease);
        float multy = mathMetods.Multy(par1,par2);
        System.out.println(""+par1 + " * " + par2 + " = "+ multy);
        float divide = mathMetods.Divide(par1,par2);
        System.out.println(""+par1 + " / " + par2 + " = "+ divide);
    }
}
