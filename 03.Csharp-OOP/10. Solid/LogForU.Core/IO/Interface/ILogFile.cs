﻿namespace LogForU.Core.IO.Interface
{
    public interface ILogFile
    {
        string Name { get; }
        string Extension { get; }
        string Path { get; }
        string FullPath { get; }
        string Content { get; }
        int Size { get; }

        void WriteLine(string text);
    }
}
