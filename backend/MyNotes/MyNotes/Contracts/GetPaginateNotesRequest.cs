namespace MyNotes.Contracts
{
    public record GetPaginateNotesRequest(string? Search, string? SortItem, string? SortOrder, int PageNumber = 1, int PageSize = 3);
}