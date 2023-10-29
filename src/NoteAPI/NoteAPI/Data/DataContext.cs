using Microsoft.EntityFrameworkCore;

namespace NoteAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Note> Notes => Set<Note>();
    }
}
