using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program
{
  

    static void Main(string[] args)
    {
        var sentence1 = reverseCase("Happy Birthday");
        Console.WriteLine(sentence1);
       // Console.ReadLine();
       
        var sentence2 = reverseCase("MANY THANKS");
        Console.WriteLine(sentence2);
        //Console.ReadLine();

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
