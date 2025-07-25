namespace MyNotes.Models
{
    public class PaginationList<T>
    {
        public T[] Records { get; set; }
        public int ElementCount { get; set; }
    }
}
