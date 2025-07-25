﻿namespace MyNotes.Models
{
    public class Result<T>
    {
        public bool IsSuccess {  get; set; }

        public string ErrorMessage { get; set; }

        public T Output { get; set; }
    }
}
