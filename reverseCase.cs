using System;

class Program
{  

    static void Main(string[] args)
    {

        var sentence1 = reverseCase("Happy Birthday");
        Console.WriteLine(sentence1);
       
        var sentence2 = reverseCase("MANY THANKS");
        Console.WriteLine(sentence2);

        var sentence3 = reverseCase("SpOnTaNeOuS");
        Console.WriteLine(sentence3);

        Console.ReadLine();


        string reverseCase(string str)
        {
            string result = "";
            foreach (char letter in str)
            {
                if (char.IsUpper(letter))
                {
                    result += char.ToLower(letter);
                }
                else
                {
                    result += char.ToUpper(letter);
                }
            }
            return result;
        }
    }
}
