using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // Part 1
        List<int> numbers = new List<int>() { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        foreach (int number in numbers)
        {
            if (number % 2 == 0)
            {
                Console.WriteLine(number);
            }
        }
        Console.WriteLine();

        // Part 2
        int[] numsToSquare = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        for (int i=0; i<numsToSquare.Length; i++)
        {
            Console.WriteLine(numsToSquare[i] * numsToSquare[i]);
        }

        Console.Read();
    }
}
