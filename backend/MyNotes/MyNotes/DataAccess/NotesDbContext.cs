using Microsoft.EntityFrameworkCore;
using MyNotes.Models;

namespace MyNotes.DataAccess
{
    public class NotesDbContext : DbContext
    {
        public DbSet<Note> Notes => Set<Note>();
        private readonly IConfiguration _configuration;

        public NotesDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
        }
    }
}
