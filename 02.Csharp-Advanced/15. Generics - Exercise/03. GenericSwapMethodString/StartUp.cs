﻿namespace GenericSwapMethodString
{
    public class StartUp
    {
        public static void Main()
        {
            List<string> list = new List<string>();
            int countOfText = int.Parse(Console.ReadLine());
            for (int i = 0; i < countOfText; i++)
            {
                string curentText = Console.ReadLine();
                Box<string> text = new Box<string>(curentText);
                list.Add(text.ToString());
            }
            int[] index = Console.ReadLine().Split(" " , StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            Box<string> swaping = new Box<string>();
            list = swaping.Swap(list, index[0], index[1]);

            foreach (var x in list)
            {
                Console.WriteLine(x);
            }
        }

    }
}